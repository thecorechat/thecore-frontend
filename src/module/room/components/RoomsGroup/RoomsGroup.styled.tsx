import styled from "styled-components";

export const Group = styled.div`
  border-bottom: 1px solid #ececec;
`;

export const GroupHeader = styled.button<{ $open: boolean }>`
  width: 100%;
  background: transparent;
  gap: 0.25rem;
  border: none;
  outline: none;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 400;
  color: #333;
  transition: background 0.2s;

  &:hover {
    background: #f0f0f0;
  }

  svg {
    transition: transform 0.3s;
    ${({ $open }) => $open && "transform: rotate(90deg);"}
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
