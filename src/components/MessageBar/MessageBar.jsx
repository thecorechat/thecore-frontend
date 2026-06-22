"use client";

import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
// import { GrAttachment } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
// import { RiEmojiStickerLine } from "react-icons/ri";
import icon from "../../assets/icons/sprite.svg";
import Button from "../../ui/Button/Button";
import {
	DropDownEmojiList,
	EmojiStickerBoxStyle,
	EmojiStickerButton,
	FileContainer,
	FileIcon,
	FileIconContainer,
	FileList,
	FileName,
	FileSize,
	MessageBarInputStyle,
	MessageBarMainContainerStyle,
	MessageBarSemiContainerStyle,
} from "./MessageBar.styled";

const MessageBar = ({ onSend, containerRef }) => {
	const [message, setMessage] = useState("");
	const emojiRef = useRef(null);
	const [files, setFiles] = useState([]);
	const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
	const heightRef = useRef(null);
	const hiddenFileInput = useRef(null);

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
		if (!message.trim() && files.length === 0) return;

		onSend(message, files);
		setMessage("");
		setFiles([]);
		heightRef.current.style.height = "22px";
		// scrollIntoView({ behavior: "instant", block: "end" });

		// if (message.trim()) {
		// 	onSend(message);
		// 	setMessage("");
		// 	heightRef.current.style.height = "22px";
		// }
	};

	const handleInput = (e) => {
		e.preventDefault();
		e.target.style.height = "22px";
		e.target.style.height = e.target.scrollHeight + "px";

		setTimeout(() => {
			const container = containerRef.current;
			if (container) container.scrollTop = container.scrollHeight;
		}, 0);
	};

	const handleClick = () => {
		hiddenFileInput.current.click();
	};

	const handleAddFile = (e) => {
		setFiles((prev) => [...prev, e.target.files[0]]);
	};

	return (
		<MessageBarMainContainerStyle>
			{files.length > 0 && (
				<FileList>
					{files.map((file) => (
						<li key={Math.random()}>
							<FileContainer>
								<FileIconContainer>
									<FileIcon>
										<use href={`${icon}#icon-image`}></use>
									</FileIcon>
								</FileIconContainer>

								<div>
									<FileName>{file.name}</FileName>
									<FileSize>
										{file.size >= 1024 * 1024
											? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
											: `${Math.round(file.size / 1024)} KB`}
									</FileSize>
								</div>
							</FileContainer>
						</li>
					))}
				</FileList>
			)}

			<MessageBarSemiContainerStyle ref={emojiRef}>
				<EmojiStickerBoxStyle>
					<EmojiStickerButton
						type="button"
						onClick={() => setEmojiPickerOpen(!emojiPickerOpen)}
					>
						<svg width={22} height={22} aria-hidden="true">
							<use href={`${icon}#icon-smile`}></use>
						</svg>
					</EmojiStickerButton>

					<DropDownEmojiList>
						<EmojiPicker open={emojiPickerOpen} onEmojiClick={handleAddEmoji} />
					</DropDownEmojiList>
				</EmojiStickerBoxStyle>

				{/* <EmojiStickerBoxStyle>
					<EmojiStickerButton onClick={() => setEmojiPickerOpen(true)}>
						<RiEmojiStickerLine />
					</EmojiStickerButton>
					<DropDownEmojiList ref={emojiRef}>
						<EmojiPicker open={emojiPickerOpen} onEmojiClick={handleAddEmoji} />
					</DropDownEmojiList>
				</EmojiStickerBoxStyle> */}
				<MessageBarInputStyle
					name="messageBar"
					placeholder="Type a message"
					value={message}
					rows={1}
					onChange={(e) => setMessage(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSend()}
					onInput={handleInput}
					ref={heightRef}
				/>

				<button type="button" onClick={handleClick}>
					<svg width={22} height={22} aria-hidden="true">
						<use href={`${icon}#icon-paperclip`}></use>
					</svg>
				</button>

				{/* <EmojiStickerButton onClick={handleClick}>
					<GrAttachment />
				</EmojiStickerButton> */}

				<input
					type="file"
					ref={hiddenFileInput}
					style={{ display: "none" }}
					onChange={handleAddFile}
				/>
			</MessageBarSemiContainerStyle>
			<Button onClick={handleSend} width="48px" height="48px">
				<IoSend size={20} />
			</Button>
		</MessageBarMainContainerStyle>
	);
};

export default MessageBar;
