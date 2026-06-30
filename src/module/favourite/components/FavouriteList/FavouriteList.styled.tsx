import styled from "styled-components";

export const FavouriteGroup = styled.div`
  border-bottom: 1px solid #ececec;
`;

export const FavouriteHeader = styled.button<{ $open: boolean }>`
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

export const FavouriteList = styled.ul<{ $open: boolean }>`
  list-style: none;
  margin: 0;
  padding: ${({ $open }) => ($open ? "0.5rem 0 0.5rem 1.5rem" : "0")};
  max-height: ${({ $open }) => ($open ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const EmptyMessage = styled.li`
  padding: 0.4rem 0;
  color: #aaa;
  font-size: 0.75rem;
  list-style: none;
`;

export const FavouriteItem = styled.li`
  padding: 0.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;

  a {
    color: #555;
    text-decoration: none;
    font-size: 0.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
      color: #111;
    }
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: #aaa;
    padding: 0;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    &:hover {
      color: #e53e3e;
    }
  }
`;

export const FavouriteConfirmBox = styled.li`
  margin: 0 0.75rem 0.5rem 0;
  padding: 10px 12px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  list-style: none;

  p {
    margin: 0 0 8px;
    font-size: 0.78rem;
    font-weight: 600;
    color: #dc2626;
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

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &.btn-yes {
        background: #dc2626;
        color: #fff;
        &:hover:not(:disabled) { opacity: 0.85; }
      }

      &.btn-no {
        background: #f3f4f6;
        color: #374151;
        &:hover:not(:disabled) { background: #e5e7eb; }
      }
    }
  }
`;
