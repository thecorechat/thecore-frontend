import { useEffect, useRef, useState } from "react";
import { socket } from "../../../helper/socket";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import MessageBar from "../../components/MessageBar/MessageBar";
import MessageContainer from "../../components/MessageContainer/MessageContainer";
import { useGetMessages } from "../../module/messages/hooks/useGetMessages";
import { useActiveRoom } from "../../module/room/context/ActiveRoomContext";
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

	useEffect(() => {
		if (messages) setRealMessages(messages);
	}, [messages]);

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

	const handleSendMessage = (text, files) => {
		socket.emit("sendMessage", {
			userId,
			dto: {
				workspaceId,
				roomId,
				content: text,
				userId,
				file: files,
			},
		});
	};

	useEffect(() => {
		const handleNewMessage = (newMessage) => {
			if (newMessage.roomId === roomId) {
				setRealMessages((prev) => {
					prev.some(
						(msg) =>
							(newMessage.id !== undefined && msg.id === newMessage.id) ||
							(newMessage._id !== undefined && msg._id === newMessage._id),
					);

					return [...prev, newMessage];
				});
			}
		};

		socket.on("newMessage", handleNewMessage);

		return () => {
			socket.off("newMessage", handleNewMessage);
		};
	}, [roomId]);

	useEffect(() => {
		socket.on(
			"messageLikeUpdated",
			({ messageId, likesCount, isLikedByMe }) => {
				setRealMessages((prev) =>
					prev.map((msg) =>
						msg.id === messageId
							? { ...msg, likesCount: likesCount, isLiked: isLikedByMe }
							: msg,
					),
				);
			},
		);

		return () => {
			socket.off("messageLikeUpdated");
		};
	}, []);

	const handleLikeMessage = (messageId) => {
		socket.emit("toggleLike", { dto: { messageId } });
		setRealMessages((prev) =>
			prev.map((msg) =>
				msg.id === messageId
					? {
							...msg,
							isLiked: !msg.isLiked,
							likesCount: msg.isLiked
								? msg.likesCount - 1
								: (msg.likesCount || 0) + 1,
						}
					: msg,
			),
		);
	};

	// const uploadFile = async (file) => {
	// 	const token = localStorage.getItem("token");
	// 	const formData = new FormData();
	// 	formData.append("file", file); // якщо "file" не підійде — спробуємо іншу назву

	// 	const response = await fetch(
	// 		"https://thecore-backend-nest.onrender.com/messages/upload",
	// 		{
	// 			method: "POST",
	// 			headers: {
	// 				Authorization: `Bearer ${token}`,
	// 			},
	// 			body: formData,
	// 		},
	// 	);

	// 	if (!response.ok) {
	// 		const errorData = await response.json().catch(() => null);
	// 		throw new Error(errorData?.message || "Upload failed");
	// 	}

	// 	return response.json(); // очікуємо щось типу { fileUrl, fileType, fileName, fileSize }
	// };
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
				/>
				<MessageBar onSend={handleSendMessage} containerRef={ref} />
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
