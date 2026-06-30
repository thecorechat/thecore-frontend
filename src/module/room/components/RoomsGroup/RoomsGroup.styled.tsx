import styled from "styled-components";

export const Group = styled.div`
  border-bottom: 1px solid #ececec;
`;

export const GroupHeader = styled.div<{ $open: boolean }>`
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem 0 0;
  transition: background 0.2s;
  position: relative;

  &:hover {
    background: #f0f0f0;
  }

  &:hover button.trash-btn {
    opacity: 1;
  }
`;

export const GroupHeaderToggle = styled.button<{ $open: boolean }>`
  flex: 1;
  background: transparent;
  gap: 0.25rem;
  border: none;
  outline: none;
  padding: 0.75rem 0.5rem 0.75rem 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 400;
  color: #333;

  svg {
    transition: transform 0.3s;
    ${({ $open }) => $open && "transform: rotate(90deg);"}
  }
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #c4c4c4;
  display: flex;
  align-items: center;
  padding: 3px 5px;
  border-radius: 4px;
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.15s, color 0.15s, background 0.15s;

  &:hover {
    color: #dc2626;
    background: #fef2f2;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const WorkspaceConfirmBox = styled.div`
  margin: 0 0.75rem 0.5rem;
  padding: 10px 12px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;

  p {
    margin: 0 0 4px;
    font-size: 0.78rem;
    font-weight: 600;
    color: #dc2626;
  }

  p.warning {
    font-size: 0.72rem;
    font-weight: 400;
    color: #ef4444;
    margin-bottom: 10px;
  }

  .confirm-buttons {
    display: flex;
    gap: 6px;

    button {
      flex: 1;
      padding: 5px 0;
      border-radius: 6px;
      border: none;
      font-size: 0.75rem;
      font-weight: 600;
      cursor: pointer;

      &.btn-yes {
        background: #dc2626;
        color: #fff;
        &:hover { opacity: 0.85; }
      }

      &.btn-no {
        background: #f3f4f6;
        color: #374151;
        &:hover { background: #e5e7eb; }
      }
    }
  }
`;

export const GroupList = styled.ul<{ $open: boolean }>`
  list-style: none;
  margin: 0;
  padding: ${({ $open }) => ($open ? "0.5rem 0 0.5rem 1.5rem" : "0")};
  max-height: ${({ $open }) => ($open ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const GroupItem = styled.li`
  padding: 0.4rem 0;
  a {
    color: #555;
    text-decoration: none;
    font-size: 0.8rem;
    &:hover {
      color: #111;
    }
  }
`;

export const RoomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.5rem;

  &:hover button {
    opacity: 1;
  }
`;

export const DotsButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #9ca3af;
  display: flex;
  align-items: center;
  padding: 2px 4px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.15s, color 0.15s;

  &:hover {
    color: #374151;
    background: #ececec;
  }
`;

export const AddChatStyle = styled.div`
  padding: 0.4rem 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #555;
  font-size: 0.7rem;
  cursor: pointer;
  &:hover {
    color: #111;
  }
`;
