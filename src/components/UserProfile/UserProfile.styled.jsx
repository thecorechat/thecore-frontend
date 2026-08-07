import styled, { css } from "styled-components";

export const UserProfileStyleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
   width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;

  @media (min-width: 768px) {
  align-items: center;
  }
`;

export const UserProfileStyleContent = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 16px 16px 0 0;
  border-bottom: 1px solid var(--Gray-20, #DBDBE2);
  /* height: 100%; */
    /* height: 350px; */
  
  /* from 768px */
  @media (min-width: 768px) {
    width: 400px;
    border-radius: 8px;

    justify-content: space-between;
  }

  h2 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 16px;
  }

      	${({ $isVisible, $dragY, $isDragging }) =>
					$isVisible
						? css`
            /* transform: translateY(0); */
            transform: translateY(${$dragY}px);

        `
						: css`
            transform: translateY(100%);

        `}

        /* transition: transform 0.3s ease; */
        transition: ${({ $isDragging }) =>
					$isDragging ? "none" : "transform 0.3s ease"};
`;

export const CloseStripe = styled.span`
position: absolute;
left: 50%;
top: 6px;

transform: translateX(-50%);
width: 80px;
height: 4px;
border-radius: 100px;
background: var(--Gray-40, #B6B6BC);

  @media (min-width: 768px) {
  display: none;
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

export const UserImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
`;
