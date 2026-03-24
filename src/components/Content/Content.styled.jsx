import styled from "styled-components";

export const SidebarWrapper = styled.div`
  height: 85vh;
  border-right: 1px solid #e2e2e2;
  background: white;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Group = styled.div`
  border-bottom: 1px solid #ececec;
`;

export const GroupHeader = styled.button`
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

export const GroupList = styled.ul`
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

  a {
    display: flex;
    align-items: center;

    gap: 0.25rem;
    color: #555;
    text-decoration: none;
    font-size: 0.7rem;
    &:hover {
      color: #111;
    }
  }
`;

export const AddButtonStyle = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
`;
