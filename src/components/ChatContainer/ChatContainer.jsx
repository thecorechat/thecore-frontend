import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { socket } from "../../../helper/socket";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import MessageBar from "../../components/MessageBar/MessageBar";
import MessageContainer from "../../components/MessageContainer/MessageContainer";
import { useGetMessages } from "../../module/messages/hooks/useGetMessages";
import { useActiveRoom } from "../../module/room/context/ActiveRoomContext";
import { fetchWithAuth } from "../../utils/fetchWithAuth";
import { UserProfile } from "../UserProfile/UserProfile";
import { ChatContainerStyle } from "./ChatContainer.styled";

const ChatContainer = () => {
	const { activeRoom } = useActiveRoom();
	const workspaceId = activeRoom?.workspaceId;
	const roomId = activeRoom?.roomId;
	const { data: messages, isLoading } = useGetMessages(roomId);

	const token = localStorage.getItem("token");
	const userId = token ? JSON.parse(atob(token.split(".")[1])).id : null;

	const ref = useRef(null);
	const pendingLikesRef = useRef(new Set());

	const [allMembers, setAllMembers] = useState([]);
	const currentMember = allMembers.find((m) => m.member.user.id === userId);
	const currentMemberId = currentMember?.memberId;

	const [isMembersLoading, setIsMembersLoading] = useState(true);
	const [isOwnerLoading, setIsOwnerLoading] = useState(true);
	const [selectedUser, setSelectedUser] = useState(null);

	const realMessages = useMemo(() => {
		return (messages ?? []).map((msg) => ({
			...msg,
			isLiked:
				msg.likes?.some((like) => like.memberId === currentMemberId) ?? false,
		}));
	}, [messages, currentMemberId]);

	// useEffect(() => {
	// 	const container = ref.current;
	// 	if (!container) return;
	// 	container.scrollTop = container.scrollHeight;
	// }, [realMessages]);

	const isChatReady = !isLoading && !isMembersLoading && !isOwnerLoading;

	useEffect(() => {
		if (!isChatReady) return;
		const container = ref.current;
		if (!container) return;
		container.scrollTop = container.scrollHeight;
	}, [realMessages, isChatReady]);

	useEffect(() => {
		if (!roomId) return;

		if (socket.connected) {
			socket.emit("joinRoom", { roomId });
		} else {
			socket.on("connect", () => {
				socket.emit("joinRoom", { roomId });
			});
		}

		return () => {
			socket.off("connect");
		};
	}, [roomId]);

	const queryClient = useQueryClient();

	const handleSendMessage = async (text, file) => {
		let fileData = null;

		if (file) {
			try {
				fileData = await uploadFile(file);
			} catch (err) {
				console.error("Помилка завантаження файлу:", err);
				return;
			}
		}

		socket.emit("sendMessage", {
			userId,
			dto: {
				workspaceId,
				roomId,
				content: text,
				userId,
				...(fileData && {
					fileUrl: fileData.fileUrl,
					fileType: fileData.fileType,
					fileName: fileData.fileName,
					fileSize: fileData.fileSize,
				}),
			},
		});
	};

	useEffect(() => {
		const handleNewMessage = (newMessage) => {
			if (newMessage.roomId !== roomId) return;

			queryClient.setQueryData(["room", roomId], (old = []) => {
				const exists = old.some((msg) => msg.id === newMessage.id);
				if (exists) return old;
				return [...old, newMessage];
			});
		};

		socket.on("newMessage", handleNewMessage);
		return () => socket.off("newMessage", handleNewMessage);
	}, [roomId, queryClient]);

	const handleGetInfoUser = useCallback(async () => {
		try {
			setIsMembersLoading(true);
			const response = await fetchWithAuth(
				`https://thecore-backend-nest.onrender.com/workspaces/${workspaceId}/rooms/${roomId}`,
			);

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.message);
			}

			const data = await response.json();

			setAllMembers(data.roomMembers);
		} catch (err) {
			console.error(err.message);
		} finally {
			setIsMembersLoading(false);
		}
	}, [roomId, workspaceId]);

	useEffect(() => {
		handleGetInfoUser();
	}, [handleGetInfoUser]);

	useEffect(() => {
		const handleLikeUpdate = ({ messageId, likes }) => {
			pendingLikesRef.current.delete(messageId);
			queryClient.setQueryData(["room", roomId], (old = []) =>
				old.map((msg) => (msg.id === messageId ? { ...msg, likes } : msg)),
			);
		};

		socket.on("messageLikeUpdated", handleLikeUpdate);
		return () => socket.off("messageLikeUpdated", handleLikeUpdate);
	}, [roomId, queryClient]);

	const handleLikeMessage = (messageId) => {
		if (pendingLikesRef.current.has(messageId)) return;
		pendingLikesRef.current.add(messageId);

		socket.emit("toggleLike", { dto: { messageId } });

		queryClient.setQueryData(["room", roomId], (old = []) =>
			old.map((msg) => {
				if (msg.id !== messageId) return msg;
				const isLiked = msg.likes?.some(
					(like) => like.memberId === currentMemberId,
				);
				return {
					...msg,
					likes: isLiked
						? msg.likes.filter((like) => like.memberId !== currentMemberId)
						: [...(msg.likes ?? []), { memberId: currentMemberId }],
				};
			}),
		);
	};

	const uploadFile = async (file) => {
		const token = localStorage.getItem("token");
		const formData = new FormData();
		formData.append("file", file);
		const response = await fetch(
			"https://thecore-backend-nest.onrender.com/messages/upload",
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
				body: formData,
			},
		);

		if (!response.ok) {
			const errorData = await response.json().catch(() => null);
			throw new Error(errorData?.message || "Upload failed");
		}

		return response.json();
	};

	const handleOpenUserProfile = async (username) => {
		try {
			const response = await fetchWithAuth(
				`https://thecore-backend-nest.onrender.com/user/${username}`,
			);
			if (!response.ok) {
				const error = await response.json();
				throw new Error(error.message);
			}
			const data = await response.json();
			setSelectedUser(data);
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<>
			<ChatContainerStyle>
				<ChatHeader />
				<MessageContainer
					messages={realMessages}
					onOpenUserProfile={handleOpenUserProfile}
					onLikeMessage={handleLikeMessage}
					ref={ref}
					// isLoading={isLoading}
					// isMembersLoading={isMembersLoading}
					// isOwnerLoading={isOwnerLoading}
					isChatReady={isChatReady}
					setIsOwnerLoading={setIsOwnerLoading}
				/>
				<MessageBar
					onSend={handleSendMessage}
					containerRef={ref}
					uploadFile={uploadFile}
					key={roomId}
					// isLoading={isLoading}
					// isMembersLoading={isMembersLoading}
					// isOwnerLoading={isOwnerLoading}
					isChatReady={isChatReady}
				/>
			</ChatContainerStyle>

			{selectedUser && (
				<UserProfile
					user={selectedUser}
					onCancel={() => setSelectedUser(null)}
					onConfirm={() => setSelectedUser(null)}
				/>
			)}
		</>
	);
};

export default ChatContainer;
