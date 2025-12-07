import {
  AddPhoto,
  EditProfileBody,
  EditProfileButtonBlock,
  EditProfileIcon,
  EditProfileStyle,
  InputStyle,
  InputWrapper,
  Label,
} from "./EditProfile.styled";
import HeaderBack from "../../../../ui/HeaderBack";
import Button from "../../../../ui/Button";
import { Avatar } from "../../../../ui/Avatar";
import { MdOutlineAddAPhoto } from "react-icons/md";

const EditProfile = ({ isOpen, onClose }) => {
  return (
    <EditProfileStyle $open={isOpen}>
      <div>
        <HeaderBack children="Edit profile" onClick={onClose} />

        <EditProfileBody>
          <EditProfileIcon $size="120px">
            <Avatar size="120px" iconSize="36px" />
            <AddPhoto>
              <MdOutlineAddAPhoto />
            </AddPhoto>
          </EditProfileIcon>
          <div>
            <InputWrapper>
              <Label>First name</Label>
              <InputStyle
                type="text"
                placeholder="John"
                //   value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <Label>Last name</Label>
              <InputStyle
                type="text"
                placeholder="Dorian"
                //   value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrapper>

            <InputWrapper>
              <Label>Email</Label>
              <InputStyle
                type="email"
                placeholder="example@gmail.com"
                //   value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputWrapper>
          </div>
        </EditProfileBody>
      </div>

      <EditProfileButtonBlock>
        <Button
          children="Return"
          background="transparent"
          color="var(--gray-70)"
          borderColor="var(--gray-70)"
          hoverColor="var(--gray-10)"
          onClick={onClose}
        />
        <Button
          children="Save"
          background="var(--primary-60)"
          color="var(--gray-0)"
          borderColor="var(--primary-60)"
          hoverColor="var(--primary-70)"
        />
      </EditProfileButtonBlock>
    </EditProfileStyle>
  );
};

export default EditProfile;
