"use client";

import { useEffect, useRef } from "react";
import {
  CreateChatContainer,
  CreateChatContent,
  CreateChatFooter,
  InputStyle,
  InputWrapper,
  Label,
} from "./CreateChat.styled";
import Button from "../../../../ui/Button";
import HeaderBack from "../../../../ui/HeaderBack";

export function CreateChat({ onCancel, onConfirm }) {
  const createRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (createRef.current && !createRef.current.contains(e.target)) {
        onCancel();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onCancel]);

  return (
    <>
      <CreateChatContainer>
        <CreateChatContent ref={createRef}>
          <div>
            <HeaderBack children="Create chat" onClick={onCancel} />
            <InputWrapper>
              <Label>Name</Label>
              <InputStyle
                type="text"
                placeholder="# Name your chat"
                //   value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>
          </div>

          <CreateChatFooter>
            <Button children="Create" />
          </CreateChatFooter>
        </CreateChatContent>
      </CreateChatContainer>
    </>
  );
}
