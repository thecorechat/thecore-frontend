import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.97); }
  to   { opacity: 1; transform: scale(1); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
`;

export const Modal = styled.div`
  position: relative;
  z-index: 1;
  background: #fff;
  border-radius: 16px;
  width: 360px;
  max-width: calc(100vw - 32px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  overflow: hidden;
  animation: ${fadeIn} 0.15s ease;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 20px 16px;
  border-bottom: 1px solid #f0f0f0;
`;

export const RoomIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #f0f4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
`;

export const RoomInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const RoomName = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: #111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RoomType = styled.span`
  display: inline-block;
  margin-top: 2px;
  font-size: 0.7rem;
  font-weight: 500;
  color: #6b7280;
  background: #f3f4f6;
  border-radius: 6px;
  padding: 1px 7px;
  text-transform: capitalize;
`;

export const MemberCount = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  font-size: 0.7rem;
  color: #9ca3af;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #9ca3af;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 6px;
  flex-shrink: 0;
  &:hover {
    color: #374151;
    background: #f3f4f6;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  background: transparent;
  border: none;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  text-align: left;
  transition: background 0.15s;

  &:hover {
    background: #f9fafb;
  }

  svg {
    flex-shrink: 0;
    color: #6b7280;
  }
`;

export const FavouriteButton = styled(ActionButton)`
  &[data-active="true"] {
    color: #d97706;
    svg {
      color: #d97706;
    }
    &:hover {
      background: #fffbeb;
    }
  }
`;

export const DangerButton = styled(ActionButton)`
  color: #dc2626;
  &:hover {
    background: #fef2f2;
  }
  svg {
    color: #dc2626;
  }
`;

export const Divider = styled.hr`
  margin: 4px 0;
  border: none;
  border-top: 1px solid #f0f0f0;
`;

export const InviteSection = styled.div`
  padding: 0 20px 8px;
`;

export const SearchInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px;
  font-size: 0.8rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  outline: none;
  margin-top: 4px;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.15);
  }
`;

export const UserList = styled.ul`
  list-style: none;
  margin: 6px 0 0;
  padding: 0;
  max-height: 160px;
  overflow-y: auto;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`;

export const UserItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  font-size: 0.8rem;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`;

export const InviteBtn = styled.button`
  font-size: 0.72rem;
  font-weight: 600;
  color: #6366f1;
  background: transparent;
  border: 1px solid #6366f1;
  border-radius: 6px;
  padding: 2px 10px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background: #6366f1;
    color: #fff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SearchHint = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 6px 0 0;
  text-align: center;
`;

export const MemberListSection = styled.div`
  padding: 12px 20px 16px;
`;

export const MemberListTitle = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 8px;
`;

export const MemberListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 0;
`;

export const MemberAvatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #e0e7ff;
  color: #4f46e5;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  text-transform: uppercase;
`;

export const MemberName = styled.span`
  font-size: 0.8rem;
  color: #374151;
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AdminBadge = styled.span`
  font-size: 0.62rem;
  font-weight: 700;
  color: #7c3aed;
  background: #ede9fe;
  border-radius: 4px;
  padding: 1px 6px;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const RemoveMemberBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #d1d5db;
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 4px;
  flex-shrink: 0;
  margin-left: auto;
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: #dc2626;
    background: #fef2f2;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const ConfirmSection = styled.div`
  padding: 12px 20px;
  background: #fef2f2;
  border-top: 1px solid #fee2e2;
`;

export const ConfirmMessage = styled.p`
  margin: 0 0 10px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #dc2626;
  text-align: center;
`;

export const ConfirmButtons = styled.div`
  display: flex;
  gap: 8px;

  button {
    flex: 1;
    padding: 7px 0;
    border-radius: 8px;
    border: none;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.15s;

    &:hover {
      opacity: 0.85;
    }
  }

  .btn-yes {
    background: #dc2626;
    color: #fff;
  }

  .btn-no {
    background: #f3f4f6;
    color: #374151;
  }
`;
