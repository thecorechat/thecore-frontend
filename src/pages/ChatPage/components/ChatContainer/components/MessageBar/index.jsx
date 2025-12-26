"use client";

import { useEffect, useRef, useState } from "react";
import {
  DropDownEmojiList,
  EmojiStickerBoxStyle,
  EmojiStickerButton,
  MessageBarInputStyle,
  MessageBarMainContainerStyle,
  MessageBarSemiContainerStyle,
} from "./MessageBar.styled";
import { GrAttachment } from "react-icons/gr";
import { RiEmojiStickerLine } from "react-icons/ri";
import { IoSend } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";
import Button from "../../../../../../ui/Button";

const MessageBar = ({ onSend }) => {
  const [message, setMessage] = useState("");
  const emojiRef = useRef();
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
  }, [emojiRef]);

  const handleAddEmoji = (emoji) => {
    setMessage((msg) => msg + emoji.emoji);
  };

  const handleSend = () => {
    if (message.trim()) {
      onSend(message); // Вызываем функцию из родителя
      setMessage(""); // Очищаем поле
    }
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
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <EmojiStickerButton>
          <GrAttachment />
        </EmojiStickerButton>
      </MessageBarSemiContainerStyle>
      <Button
        onClick={handleSend}
        children={<IoSend size={20} />}
        width="48px"
        height="48px"
      />
    </MessageBarMainContainerStyle>
  );
};

export default MessageBar;
