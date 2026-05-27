import { useCallback, useEffect, useRef, useState } from "react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { Avatar } from "../../ui/Avatar/Avatar";
import Button from "../../ui/Button/Button";
import HeaderBack from "../../ui/HeaderBack/HeaderBack";
import { fetchWithAuth } from "../../utils/fetchWithAuth";
import {
  AddPhoto,
  AddPhotoInput,
  EditProfileBody,
  EditProfileButtonBlock,
  EditProfileIcon,
  EditProfileStyle,
  InputStyle,
  InputWrapper,
  Label,
  Image,
} from "./EditProfile.styled";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import { useForm } from "react-hook-form";

const EditProfile = ({ isOpen, onClose }) => {
  //   const { register, handleSubmit, formState: { errors } } = useForm({
  //   defaultValues: {
  //     firstName: "",
  //     lastName: "",
  //   }
  // });
  const [formData, setFormData] = useState({
    avatarUrl: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const hiddenFileInput = useRef(null);

  // async function handleGetInfo() {
  //   try {
  //     const response = await fetchWithAuth(
  //       "https://thecore-backend-nest.onrender.com/user/me",
  //     );

  //     if (!response.ok) {
  //       const error = await response.json();
  //       throw new Error(error.message);
  //     }

  //     const data = await response.json();
  //     const { avatarUrl, firstName, lastName, email } = data;

  //     console.log(data);
  //     setFormData({ avatarUrl, firstName, lastName, email });
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }

  const handleGetInfo = useCallback(async () => {
    try {
      const response = await fetchWithAuth(
        "https://thecore-backend-nest.onrender.com/user/me",
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      const { avatarUrl, firstName, lastName, email } = data;

      console.log(data);
      setFormData({ avatarUrl, firstName, lastName, email });
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const handleChange = async (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    handleGetInfo();
  }, [handleGetInfo]);

  const handleSave = async () => {
    const response = await fetch(
      "https://thecore-backend-nest.onrender.com/user/update",
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
        }),
      },
    );

    const data = await response.json();
    console.log(data);
  };

  // useEffect(() => {
  //   handleGetInfo();
  // }, []);

  const handleImgClick = () => {
    hiddenFileInput.current.click();
  };

  const handleImgUpload = async (evt) => {
    // if (evt.target.files.length > 0) {
    //   setImg({
    //     src: URL.createObjectURL(evt.target.files[0]),
    //   });
    // }

    const formDataImg = new FormData();
    formDataImg.append("file", evt.target.files[0]);

    const response = await fetch(
      "https://thecore-backend-nest.onrender.com/user/avatar",
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formDataImg,
      },
    );

    const data = await response.json();
    console.log(data);
    setFormData((prev) => ({ ...prev, avatarUrl: data.avatarUrl }));
  };

  // console.log(formData);

  return (
    <EditProfileStyle $open={isOpen}>
      <div>
        <HeaderBack onClick={onClose}>Edit profile</HeaderBack>
        {/* <form action=""> */}
        <EditProfileBody>
          <EditProfileIcon $size="120px">
            {formData ? (
              formData.avatarUrl === "" ? (
                <Avatar size="120px" iconSize="36px" />
              ) : (
                <Image src={formData.avatarUrl} alt="User avatar" />
              )
            ) : (
              <Skeleton width={120} height={120} />
            )}

            <AddPhoto onClick={handleImgClick}>
              <MdOutlineAddAPhoto />
              <AddPhotoInput
                type="file"
                accept="image/*"
                name="photo"
                id="photo"
                ref={hiddenFileInput}
                onChange={handleImgUpload}
              />
            </AddPhoto>
          </EditProfileIcon>
          <div>
            <InputWrapper>
              <Label htmlFor="firstName">First name</Label>
              <InputStyle
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="lastName">Last name</Label>
              <InputStyle
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </InputWrapper>

            <InputWrapper>
              <Label>Email</Label>
              <InputStyle
                type="email"
                name="email"
                value={formData.email}
                disabled
              />
            </InputWrapper>
          </div>
        </EditProfileBody>
      </div>

      <EditProfileButtonBlock>
        <Button
          background="transparent"
          color="var(--gray-70)"
          borderColor="var(--gray-70)"
          hoverColor="var(--gray-10)"
          onClick={onClose}
        >
          Return
        </Button>
        <Button
          background="var(--primary-60)"
          color="var(--gray-0)"
          borderColor="var(--primary-60)"
          hoverColor="var(--primary-70)"
          type="submit"
          onClick={handleSave}
        >
          Save
        </Button>
      </EditProfileButtonBlock>
    </EditProfileStyle>
  );
};

export default EditProfile;
