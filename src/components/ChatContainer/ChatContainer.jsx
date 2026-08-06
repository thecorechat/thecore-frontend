import { useCallback, useEffect, useRef, useState } from "react";
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

	const [showUserProfile, setShowUserProfile] = useState(false);
	const [realMessages, setRealMessages] = useState([]);
	const ref = useRef(null);

	const [allMembers, setAllMembers] = useState([]);
	const currentMember = allMembers.find((m) => m.member.user.id === userId);
	const currentMemberId = currentMember?.memberId;

	const [isMembersLoading, setIsMembersLoading] = useState(true);
	const [isOwnerLoading, setIsOwnerLoading] = useState(true);

	useEffect(() => {
		if (messages) {
			setRealMessages(
				messages.map((msg) => ({
					...msg,
					isLiked:
						msg.likes?.some((like) => like.memberId === currentMemberId) ??
						false,
				})),
			);
		}
	}, [messages, currentMemberId]);

	useEffect(() => {
		const container = ref.current;
		if (!container) return;
		container.scrollTop = container.scrollHeight;
	}, [realMessages]);

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
			if (newMessage.roomId === roomId) {
				setRealMessages((prev) => {
					const exists = prev.some(
						(msg) => newMessage.id !== undefined && msg.id === newMessage.id,
					);

					if (exists) return prev;
					return [...prev, newMessage];
				});
			}
		};

		socket.on("newMessage", handleNewMessage);

		return () => {
			socket.off("newMessage", handleNewMessage);
		};
	}, [roomId]);

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
		socket.on("messageLikeUpdated", ({ messageId, likes }) => {
			return setRealMessages((prev) =>
				prev.map((msg) =>
					msg.id === messageId
						? {
								...msg,
								likes,
								isLiked: likes.some(
									(like) => like.memberId === currentMemberId,
								),
							}
						: msg,
				),
			);
		});

		return () => {
			socket.off("messageLikeUpdated");
		};
	}, [currentMemberId]);

	const handleLikeMessage = (messageId) => {
		socket.emit("toggleLike", { dto: { messageId } });
		setRealMessages((prev) =>
			prev.map((msg) => {
				if (msg.id !== messageId) return msg;

				const isLiked = msg.likes?.some(
					(like) => like.memberId === currentMemberId,
				);

				return {
					...msg,
					isLiked: !isLiked,
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

	return (
		<>
			<ChatContainerStyle>
				<ChatHeader />
				<MessageContainer
					messages={realMessages}
					onOpenUserProfile={() => setShowUserProfile(true)}
					onLikeMessage={handleLikeMessage}
					ref={ref}
					isLoading={isLoading}
					isMembersLoading={isMembersLoading}
					isOwnerLoading={isOwnerLoading}
					setIsOwnerLoading={setIsOwnerLoading}
				/>
				<MessageBar
					onSend={handleSendMessage}
					containerRef={ref}
					uploadFile={uploadFile}
					key={roomId}
					isLoading={isLoading}
					isMembersLoading={isMembersLoading}
					isOwnerLoading={isOwnerLoading}
					setIsOwnerLoading={setIsOwnerLoading}
				/>
			</ChatContainerStyle>

			{showUserProfile && (
				<UserProfile
					onCancel={() => setShowUserProfile(false)}
					onConfirm={() => {
						setShowUserProfile(false);
					}}
				/>
			)}
		</>
	);
};

export default ChatContainer;
