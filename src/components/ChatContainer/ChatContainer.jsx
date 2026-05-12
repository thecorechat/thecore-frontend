import { useEffect, useState } from "react";
import { socket } from "../../../helper/socket";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import MessageBar from "../../components/MessageBar/MessageBar";
import MessageContainer from "../../components/MessageContainer/MessageContainer";
import { UserProfile } from "../UserProfile/UserProfile";
import { ChatContainerStyle } from "./ChatContainer.styled";

const ChatContainer = () => {
	const [showUserProfile, setShowUserProfile] = useState(false);
	const [realMessages, setRealMessages] = useState([]);

	useEffect(() => {
		socket.on("receive_message", (newMessage) => {
			setRealMessages((prev) => [...prev, newMessage]);
		});

		return () => {
			socket.off("receive_message");
		};
	}, []);

	const handleSendMessage = (text) => {
		const newMessage = {
			_id: Date.now().toString(),
			name: "Peter Parker",
			message: text,
			createdAt: new Date().toISOString(),
		};

		socket.emit("send_message", newMessage);

		setRealMessages((prev) => [...prev, newMessage]);
	};

	useEffect(() => {
		socket.on("message_liked", ({ messageId, likesCount, isLikedByMe }) => {
			setRealMessages((prev) =>
				prev.map((msg) =>
					msg._id === messageId
						? { ...msg, likesCount: likesCount, isLiked: isLikedByMe }
						: msg,
				),
			);
		});

		return () => {
			socket.off("message_liked");
		};
	}, []);
	const handleLikeMessage = (messageId) => {
		socket.emit("like_message", { messageId });

		setRealMessages((prev) =>
			prev.map((msg) =>
				msg._id === messageId
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
	return (
		<>
			<ChatContainerStyle>
				<ChatHeader />
				<MessageContainer
					messages={realMessages}
					onOpenUserProfile={() => setShowUserProfile(true)}
					onLikeMessage={handleLikeMessage}
				/>
				<MessageBar onSend={handleSendMessage} />
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
