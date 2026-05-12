"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../../ui/Button/Button";
import HeaderBack from "../../ui/HeaderBack/HeaderBack";
import {
	CreateChatContainer,
	CreateChatContent,
	CreateChatFooter,
	InputStyle,
	InputWrapper,
	Label,
} from "./CreateChat.styled";

export function CreateChat({ onCancel, onConfirm }) {
	void onConfirm;
	const createRef = useRef(null);
	const [, setName] = useState("");

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
		<CreateChatContainer>
			<CreateChatContent ref={createRef}>
				<div>
					<HeaderBack onClick={onCancel}>Create chat</HeaderBack>
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
					<Button>Create</Button>
				</CreateChatFooter>
			</CreateChatContent>
		</CreateChatContainer>
	);
}
