import styled from "styled-components";

export const MessageBarMainContainerStyle = styled.div`
  height: 9vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem 0;
  margin: 1.5rem 0;
  gap: 1.5rem;
  border-top: 0.3px solid #4c4c4c;
  }
`;

export const MessageBarSemiContainerStyle = styled.div`
  background-color: white;
  display: flex;
  flex: 1;
  align-items: center;
  padding-right:1.25rem;
  border-radius: 0.375rem;
  border: 1px solid #4c4c4c;
 
  
  
  }
`;

export const MessageBarInputStyle = styled.input`
  background-color: transparent;
  display: flex;
  flex: 1;
  padding: 1.25rem;
  border-radius: 0.375rem;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const EmojiStickerBoxStyle = styled.div`
  position: relative;
  padding-left: 1rem;
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

export const CTAButton = styled.div`
  padding: 1rem;
  background-color: #1570ef;
  font-size: 1.2rem;
  color: white;
  border-radius: 7px;
  line-height: 90%;
`;
