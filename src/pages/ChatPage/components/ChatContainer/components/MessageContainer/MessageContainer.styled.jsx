import styled, { css } from "styled-components";

export const MessageContainerStyle = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  padding-x: 2rem;
  width: 100%;

  /* from 768px */
  @media (min-width: 768px) {
    width: 65vw;
  }

  /* from 1024px */
  @media (min-width: 1024px) {
    width: 70vw;
  }

  /* from 1280px */
  @media (min-width: 1280px) {
    width: 80vw;
  }
`;

export const MessagesList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem; /* space-y-4 */
`;

export const ChatWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 1rem;

  ${({ isOwner }) =>
    isOwner
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: flex-start;
        `}
`;

export const ChatImage = styled.div`
  display: flex;
  // align-items: center;
  margin-right: 0.5rem;
`;

export const Avatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  overflow: hidden;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;

export const ChatName = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
`;

export const ChatTime = styled.time`
  font-size: 0.75rem;
  opacity: 0.5;
  margin-left: 0.25rem;
`;

export const ChatBubble = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  ${({ isOwner }) =>
    isOwner
      ? css`
          background: var(--primary-60);
          color: var(--gray-0);
          border-radius: 0.5rem 0 0.5rem 0.5rem;
        `
      : css`
          background: var(--gray-10);
          color: var(--gray-100);
          border-radius: 0 0.5rem 0.5rem 0.5rem;
        `}
`;

export const ChatImageAttachment = styled.img`
  max-width: 200px;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
`;

export const DateDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  font-size: 0.875rem;
  color: #666;

  &:before,
  &:after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ccc;
    margin: 0 0.5rem;
  }
`;
