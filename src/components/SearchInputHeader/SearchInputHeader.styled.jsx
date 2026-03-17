import styled from "styled-components";

export const ChatHeaderContainerStyle = styled.div`
  height: 10vh;
  border-bottom: 0.3px solid #4c4c4c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem
  
  }
`;

export const ChatHeaderContainerLeftStyle = styled.div`
  
  display: flex;
  align-items: center;
  gap:1rem
  
  
  }
`;

export const SearchInputHeaderStyle = styled.input`
  width: 100%;
  height: 2.25rem;
  border-radius: 0.375rem;
  border: 1px solid #e6eaf0ff;
  // border: none;
  background: white;
  padding: 0.25rem 0.75rem 0.25rem 2rem;
  font-size: 0.875rem;
  color: #111;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  }

  &::placeholder {
    color: #9ca3af; /* muted text */
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ArrowBack = styled.button`
  padding: 0.5rem 1rem;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: #4c4c4c;
  }
`;
