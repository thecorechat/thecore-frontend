import { useState, useState } from "react";
import { useForm, useForm } from "react-hook-form";
import { FiEye, FiEye, FiEyeOff, FiEyeOff } from "react-icons/fi";
import { useLocation, useNavigate, useNavigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import Button from "../../ui/Button/Button";
import HeaderBack from "../../ui/HeaderBack/HeaderBack";
import {
  Title,
  Background,
  Content,
  InputWrapper,
  InputStyle,
  Label,
  Bottom,
  ButtonBlock,
  InputBox,
  IconBox,
  InputContent,
  ContentForm,
  ErrorMessage,
  TitleBox,
} from './ChangePasswordPage.styled';

import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import Button from '../../ui/Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import HeaderBack from '../../ui/HeaderBack/HeaderBack';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

function ChangePassword() {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isSubmitting },
    getValues,
  } = useForm();
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log('state:', state);

  const onSubmit = async (data) => {
    const toastId = toast.loading('Code submiting...');

    try {
      const response = await fetch('https://thecore-backend-nest.onrender.com/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: state.token,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.update(toastId, {
          render: 'Your password successfully changed',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
        });

        if (result.accessToken) {
          localStorage.setItem('token', result.accessToken);
        }

        navigate('/verify', {
          state: { from: 'forgot-password', email: data.email },
        });
      } else {
        toast.update(toastId, {
          render: result.message,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
        });
      }

      navigate('/change-password/success', {
        state: { passwordChanged: true },
      });
    } catch (err) {
      toast.error('Error:', err.message);
    }
  };

	const handleShowClick = () => {
		setShow(!show);
	};

	const handleBackClick = () => {
		navigate("/verify");
	};

	return (
		<Background>
			<Content>
				<HeaderBack onClick={handleBackClick} />
				<TitleBox>
					<Title>Change password</Title>
				</TitleBox>

        <ToastContainer />

        <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <ContentForm>
            <div>
              <InputContent>
                <InputWrapper>
                  <Label>Password</Label>
                  <InputBox>
                    <InputStyle
                      $error={errors.password ? true : false}
                      $success={!errors.password && isSubmitted}
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters',
                        },
                        pattern: {
                          value: /^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/,
                          message: 'Password must contain only Latin letters',
                        },
                      })}
                      disabled={isSubmitting}
                    />
                    <IconBox onClick={handleShowClick}>{show ? <FiEye size={18} /> : <FiEyeOff size={18} />}</IconBox>
                  </InputBox>
                  {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </InputWrapper>

                <InputWrapper>
                  <Label>Repeat password</Label>
                  <InputBox>
                    <InputStyle
                      $error={errors.repeatPassword ? true : false}
                      $success={!errors.repeatPassword && isSubmitted}
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                      {...register('repeatPassword', {
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters',
                        },
                        validate: (value) => value === getValues('password') || 'Passwords do not match',
                      })}
                      disabled={isSubmitting}
                    />
                    <IconBox onClick={handleShowClick}>{show ? <FiEye size={18} /> : <FiEyeOff size={18} />}</IconBox>
                  </InputBox>
                  {errors.repeatPassword && <ErrorMessage>{errors.repeatPassword.message}</ErrorMessage>}
                </InputWrapper>
              </InputContent>
            </div>
            <Bottom>
              <ButtonBlock>
                <Button children="Send password" type="submit" disabled={isSubmitting} />
              </ButtonBlock>
            </Bottom>
          </ContentForm>
        </form>
      </Content>
    </Background>
  );

}

export default ChangePassword;
