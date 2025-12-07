import styled from "styled-components";

export const ToggleSwitchStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`;

export const ToggleSwitchStyleButton = styled.button`
  background-color: ${(props) =>
    props.$toggled ? "var(--primary-60)" : "var(--gray-20)"};
  border-radius: 99px;
  width: 44px;
  height: 24px;
  transition: background-color 0.1s ease, border-color 0.2s ease;
  cursor: pointer;
  padding: 2px;
`;

export const ToggleSwitchStyleThumb = styled.div`
  height: 20px;
  width: 20px;
  background-color: var(--gray-0);
  border-radius: 99px;
  position: absolute;
  top: 2px;
  transition: transform 0.15s ease;

  transform: ${(props) =>
    props.$toggled ? "translateX(20px)" : "translateX(0)"};
`;
