import styled from "styled-components";

export const MessageBarMainContainerStyle = styled.div`
  /* height: 9vh; */
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  padding: 24px 24px 32px 24px;
  /* padding: 1.5rem 2rem 0; */
  /* margin: 1.5rem 0; */
  gap: 1.5rem;
  /* border-top: 0.3px solid #4c4c4c; */
  border-top: 1px solid var(--gray-20);
`;

export const MessageBarSemiContainerStyle = styled.div`
  background-color: white;
  display: flex;
  flex: 1;
  align-items: flex-end;
  padding: 8px 16px;
  column-gap: 8px;
  /* height: 48px; */
  min-height: 48px;
   max-height: 138px;

  /* padding-right:1.25rem; */
  border-radius: 0.375rem;
  /* border: 1px solid #4c4c4c; */
  border: 1px solid var(--gray-20); 
`;

export const MessageBarInputStyle = styled.textarea`
  background-color: transparent;
  flex: 1;
  /* padding: 1.25rem;
  height: 45px; */
  min-height: 22px;
  max-height: 116px;
  /* border-radius: 0.375rem; */
  border: none;

  overflow-y: auto;
  resize: none;
  &:focus {
    border: none;
    outline: none;
  }

  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none; 
  }
`;

export const EmojiStickerBoxStyle = styled.div`
  position: relative;
  /* padding-left: 1rem; */
`;

export const EmojiStickerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  line-height: 2rem;
  color: #4c4c4c;
`;

export const DropDownEmojiList = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 0;
`;

export const FileList = styled.ul`
    display: flex;
    width: 100%;
    gap: 10px;
`;

export const FileContainer = styled.div`
  padding: 12px 16px;
  display: flex;
  gap: 8px;
  border: 1px solid var(--gray-20);
  border-radius: 10px;
  cursor: pointer;
`;

export const FileIconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 32px;
height: 32px;
padding: 4px;
border-radius: 100px;
background: var(--Primary-10, #D1E9FF);
`;

export const FileIcon = styled.svg`
  width: 18px;
height: 18px;
`;

export const FileName = styled.p`
color: var(--Gray-100, #18181A);

font-size: 16px;
font-weight: 500;
margin-bottom: 4px;
`;

export const FileSize = styled.p`
color: var(--Gray-70, #686970);

font-size: 14px;
font-weight: 500;
`;
