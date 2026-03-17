import styled from "styled-components";

export const EditProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 100;
  position: absolute;
  padding: 0 16px;
  top: 0;
  left: 0;
  height: 100%;
  background: var(--gray-0);
  width: 100%;
  transition: transform 0.3s ease;
  border-right: 0.3px solid #4c4c4c;
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-100%)")};

  /* from 768px */
  @media (min-width: 768px) {
    width: 35vw;
  }

  /* from 1024px */
  @media (min-width: 1024px) {
    width: 30vw;
  }

  /* from 1280px */
  @media (min-width: 1280px) {
    width: 20vw;
  }
`;

export const EditProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const EditProfileButtonBlock = styled.div`
  display: flex;
  align-items: top;
  gap: 8px;
  height: 68px;
  margin-bottom: 32px;
`;

export const EditProfileIcon = styled.div`
  position: relative;
  width: ${(props) => props.$size || "100%"};
  height: ${(props) => props.$size || "100%"};
`;

export const AddPhoto = styled.div`
  background: var(--gray-20);
  position: absolute;
  bottom: -10px;
  right: -10px;
  font-size: 14px;
  display: flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid var(--gray-0);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: var(--gray-100);
  margin-bottom: 0.25rem;
`;

export const InputStyle = styled.input`
  //   background-color: var(--gray-0);
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--gray-20);
  font-size: 16px;
  transition: 0.2s;
  height: 48px;

  &:focus {
    border-color: #8a5cff;
    outline: none;
    background-color: var(--gray-0);
  }
`;
