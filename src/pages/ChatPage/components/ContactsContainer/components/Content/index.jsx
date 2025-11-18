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

const Content = () => {
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (title) => {
    setOpenGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <SidebarProvider>
      <AddButton />
      <SidebarWrapper>
        <SidebarRail />
        {sidebar.navMain.map((group) => {
          const isOpen = openGroups[group.title] ?? true; // можно задать defaultOpen=true
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
                <AddChat />
              </GroupList>
            </Group>
          );
        })}
      </SidebarWrapper>
    </SidebarProvider>
  );
};

export default Content;

const AddChat = () => {
  return (
    <AddChatStyle>
      <a href={"#"}>
        <GoPlus />
        <span>Add Chat</span>
      </a>
    </AddChatStyle>
  );
};

const AddButton = () => {
  return (
    <AddButtonStyle>
      <a href={"#"}>
        <GoPlus />
      </a>
    </AddButtonStyle>
  );
};
