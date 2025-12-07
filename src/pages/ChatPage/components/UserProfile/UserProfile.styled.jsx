import styled from "styled-components";

export const UserProfileStyleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const UserProfileStyleContent = styled.div`
  background: white;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  /* from 768px */
  @media (min-width: 768px) {
    height: 350px;
    width: 400px;
    border-radius: 8px;
  }

  h2 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 16px;
  }
`;

export const UserProfileStyleBodyTop = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
`;

export const UserProfileStyleBodyTopRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: 14px;
    color: var(--gray-70);
  }
`;

export const UserProfileStyleBodyCenter = styled.div`
  padding: 16px 0;
`;

export const UserProfileStyleBodyCenterSettings = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  gap: 24px;
  border-top: 1px solid var(--gray-20);
  margin-top: 24px;
`;

export const UserProfileStyleBodyCenterSettingsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserProfileStyleBodyCenterSettingsItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
