import styled from "styled-components";

export const Circle = styled.div`
  border: 2px solid #1570ef;
  border-radius: 50%;
  position: absolute;
  right: -2px;
  bottom: -3px;
  height: 10px;
  width: 10px;
  background-color: #7ff999ff;
`;

export const LogoBoxContactsContainerStyle = styled.span`
  position: relative;
  padding: 0.5rem 0.6rem;
  background-color: #eaeaeaff;
  color: #bcbcbcff;
  line-height: 90%;
  font-size: 18px;
  border-radius: 7px;
  cursor: pointer;
`;

export const ProfileImgContainerStyle = styled.span`
  position: relative;
  background-color: #eaeaeaff;
  color: #bcbcbcff;
  line-height: 90%;
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
