import { useEffect, useRef } from "react";
import {
	ButtonCancel,
	ButtonDelete,
	DeleteDialogContainer,
	DeleteDialogContent,
	DeleteDialogFooter,
} from "./DeleteDialog.styled";

export function DeleteDialog({ onCancel, onConfirm, roomName, isPending }) {
	const deleteRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (deleteRef.current && !deleteRef.current.contains(e.target)) {
				onCancel();
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [onCancel]);

	return (
		<DeleteDialogContainer>
			<DeleteDialogContent ref={deleteRef}>
				<h2>Delete {roomName ? `"${roomName}"` : "chat"}?</h2>
				<p>This will permanently delete the chat</p>
				<DeleteDialogFooter>
					<ButtonCancel disabled={isPending} onClick={onCancel}>
						Cancel
					</ButtonCancel>
					<ButtonDelete disabled={isPending} onClick={onConfirm}>
						{isPending ? "Deleting…" : "Delete"}
					</ButtonDelete>
				</DeleteDialogFooter>
			</DeleteDialogContent>
		</DeleteDialogContainer>
	);
}
