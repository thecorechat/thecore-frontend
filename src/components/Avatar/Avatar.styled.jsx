import styled from "styled-components";

export const Circle = styled.div`
  border: 1px solid #ffffff;
  border-radius: 50%;
  position: absolute;
  right: -2px;
  bottom: -3px;
  height: 10px;
  width: 10px;
  transition: background-color 0.3s ease;
`;

export const LogoBoxContactsContainerStyle = styled.div`
  position: relative;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
  color: #bcbcbc;
  border-radius: 7px;
  cursor: pointer;
`;

export const ProfileImgContainerStyle = styled.div`
  position: relative;
  background-color: #eaeaea;
  color: #bcbcbc;
  line-height: 10%;
  font-size: 18px;
  border-radius: 7px;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 7px;
  object-fit: cover;
`;
