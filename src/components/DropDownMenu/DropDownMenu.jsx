"use client";

import React, { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoMute, GoUnmute } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import {
  Group,
  Item,
  Label,
  Menu,
  MenuButton,
  Wrapper,
} from "./DropDownMenu.styled";
import { DeleteDialog } from "../DeleteDialog";

export const DropdownMenuDemo = ({ onSearchClick }) => {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleDeleteChat = () => {
    setShowDeleteDialog(true);
    setOpen(false);
  };

  return (
    <>
      <Wrapper ref={ref}>
        <MenuButton onClick={() => setOpen((o) => !o)}>
          <BsThreeDotsVertical />
        </MenuButton>
        {open && (
          <Menu>
            <Group>
              <Item onClick={handleToggleMute}>
                {isMuted ? <GoMute /> : <GoUnmute />}
                {isMuted ? "Unmute notifications" : "Mute notifications"}
              </Item>
              <Item onClick={onSearchClick}>
                <IoMdSearch />
                Search
              </Item>
              <Item onClick={handleToggleFavorite}>
                {isFavorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
                {isFavorite ? "Remove from favorites" : "Add to favorite chats"}
              </Item>
              <Item onClick={handleDeleteChat}>
                <FiTrash />
                Delete chat
              </Item>
            </Group>
          </Menu>
        )}
      </Wrapper>

      {showDeleteDialog && (
        <DeleteDialog
          onCancel={() => setShowDeleteDialog(false)}
          onConfirm={() => {
            setShowDeleteDialog(false);
          }}
        />
      )}
    </>
  );
};
