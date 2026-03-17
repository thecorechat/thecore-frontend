import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const MenuButton = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: #4c4c4c;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  width: 14rem;
  background: white;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  z-index: 100;
`;

export const Group = styled.div`
  padding: 0.25rem 0;
  border-bottom: 1px solid #f1f1f1;
`;

export const Item = styled.button`
  width: 100%;
  gap: 1rem;
  text-align: left;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 14px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: start;
  &:hover {
    background: #f3f4f6;
  }
  &:disabled {
    color: #aaa;
    cursor: not-allowed;
  }
`;

export const Label = styled.div`
  padding: 0.5rem 1rem;
  font-size: 12px;
  font-weight: 600;
  color: #555;
`;
