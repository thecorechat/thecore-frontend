import styled from "styled-components";

export const MyProfileStyle = styled.div`
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

export const MyProfileStyleBottom = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 68px;
  margin-bottom: 32px;
  color: var(--system-error);
`;

export const MyProfileStyleBodyTop = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
`;

export const MyProfileStyleBodyTopRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: 14px;
    color: var(--gray-70);
  }
`;

export const MyProfileStyleBodyCenter = styled.div`
  padding: 16px 0;
`;

export const MyProfileStyleBodyCenterSettings = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  gap: 24px;
`;

export const MyProfileStyleBodyCenterSettingsItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MyProfileStyleBodyCenterSettingsItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
