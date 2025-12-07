"use client";

import { useState } from "react";
import {
  AddButtonStyle,
  AddChatStyle,
  Group,
  GroupHeader,
  GroupItem,
  GroupList,
  SidebarWrapper,
} from "./Content.styled";
import { IoMdArrowDropright } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { SidebarRail } from "../SidebarRail";
import { SidebarProvider } from "../SidebarRail/SidebarContext";
import { sidebar } from "../../../../../../mock/data";
import Button from "../../../../../../ui/Button";

const Content = ({ onOpenCreateChat }) => {
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (title) => {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <SidebarProvider>
      <AddButtonStyle>
        <Button
          onClick={onOpenCreateChat}
          children={<GoPlus size={24} />}
          width="48px"
          height="48px"
        />
      </AddButtonStyle>
      <SidebarWrapper>
        <SidebarRail />
        {sidebar.navMain.map((group) => {
          const isOpen = openGroups[group.title] ?? true;
          return (
            <Group key={group.title}>
              <GroupHeader
                onClick={() => toggleGroup(group.title)}
                $open={isOpen}
              >
                <IoMdArrowDropright size={16} />
                <span>{group.title}</span>
              </GroupHeader>
              <GroupList $open={isOpen}>
                {group.items.map((item) => (
                  <GroupItem key={item.title}>
                    <a href={item.url}>{item.title}</a>
                  </GroupItem>
                ))}
                <AddChat onOpenCreateChat={onOpenCreateChat} />
              </GroupList>
            </Group>
          );
        })}
      </SidebarWrapper>
    </SidebarProvider>
  );
};

export default Content;

const AddChat = ({ onOpenCreateChat }) => {
  return (
    <AddChatStyle onClick={onOpenCreateChat}>
      <a href={"#"}>
        <GoPlus />
        <span>Add Chat</span>
      </a>
    </AddChatStyle>
  );
};
