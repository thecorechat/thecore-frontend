import { useEffect, useRef } from "react";
import {
  ButtonCancel,
  ButtonDelete,
  DeleteDialogContainer,
  DeleteDialogContent,
  DeleteDialogFooter,
} from "./DeleteDialog.styled";

export function DeleteDialog({ onCancel, onConfirm }) {
  const deleteRef = useRef();

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
    <>
      <DeleteDialogContainer>
        <DeleteDialogContent ref={deleteRef}>
          <h2>Delete chat?</h2>
          <p>This will permanently delete the chat</p>
          <DeleteDialogFooter>
            <ButtonCancel onClick={onCancel}>Cancel</ButtonCancel>
            <ButtonDelete onClick={onConfirm}>Delete</ButtonDelete>
          </DeleteDialogFooter>
        </DeleteDialogContent>
      </DeleteDialogContainer>
    </>
  );
}
