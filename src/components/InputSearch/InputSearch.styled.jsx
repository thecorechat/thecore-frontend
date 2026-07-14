import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  // max-width: 20rem;
`;

export const SearchIcon = styled(IoMdSearch)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  height: 1rem;
  width: 1rem;
  z-index: 2;
  pointer-events: none;
  color: #6b7280;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 2.25rem;
  border-radius: 0.375rem;
  border: 1px solid #d1d5db;
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
    color: #9ca3af;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ResultsDropdown = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  z-index: 20;
  overflow: hidden;
`;

export const SearchHint = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
`;

export const UserList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 220px;
  overflow-y: auto;
`;

export const UserItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  font-size: 0.8rem;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`;

export const MessageBtn = styled.button`
  font-size: 0.72rem;
  font-weight: 600;
  color: #2563eb;
  background: transparent;
  border: 1px solid #2563eb;
  border-radius: 6px;
  padding: 2px 10px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    background: #2563eb;
    color: #fff;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
