"use client";

import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import { RiEmojiStickerLine } from "react-icons/ri";
import Button from "../../ui/Button/Button";
import {
	DropDownEmojiList,
	EmojiStickerBoxStyle,
	EmojiStickerButton,
	MessageBarInputStyle,
	MessageBarMainContainerStyle,
	MessageBarSemiContainerStyle,
} from "./MessageBar.styled";

const MessageBar = ({ onSend }) => {
	const [message, setMessage] = useState("");
	const emojiRef = useRef(null);
	const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

	useEffect(() => {
		function handleClickOutside(event) {
			if (emojiRef.current && !emojiRef.current.contains(event.target)) {
				setEmojiPickerOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleAddEmoji = (emoji) => {
		setMessage((msg) => msg + emoji.emoji);
	};

	const handleSend = () => {
		if (message.trim()) {
			onSend(message); // Вызываем функцию из родителя
			setMessage(""); // Очищаем поле
		}
	};

	const handleInput = (e) => {
		e.preventDefault();
		e.target.style.height = "45px";
		e.target.style.height = e.target.scrollHeight + "px";
	};

	return (
		<MessageBarMainContainerStyle>
			<MessageBarSemiContainerStyle>
				<EmojiStickerBoxStyle>
					<EmojiStickerButton onClick={() => setEmojiPickerOpen(true)}>
						<RiEmojiStickerLine />
					</EmojiStickerButton>
					<DropDownEmojiList ref={emojiRef}>
						<EmojiPicker open={emojiPickerOpen} onEmojiClick={handleAddEmoji} />
					</DropDownEmojiList>
				</EmojiStickerBoxStyle>
				<MessageBarInputStyle
					name="messageBar"
					placeholder="Type a message"
					value={message}
					rows={1}
					onChange={(e) => setMessage(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSend()}
					onInput={handleInput}
				/>
				<EmojiStickerButton>
					<GrAttachment />
				</EmojiStickerButton>
			</MessageBarSemiContainerStyle>
			<Button onClick={handleSend} width="48px" height="48px">
				<IoSend size={20} />
			</Button>
		</MessageBarMainContainerStyle>
	);
};

export default MessageBar;
