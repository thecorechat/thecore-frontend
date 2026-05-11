import { useForm } from "react-hook-form";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
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
} from './ForgotPasswordPage.styled';

import HeaderBack from '../../ui/HeaderBack/HeaderBack';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import Loader from '../../ui/Loader/Loader';
import { useForm } from 'react-hook-form';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { useState } from 'react';
import { toast } from 'react-toastify';

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, isValid },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    console.log(data);
    if (isValid) {
      console.log('Form is valid. Attempting to send reset email for:', email);

      //   try {
      //     navigate('/verify', {
      //       state: { emailSent: email, from: 'forgot-password' },
      //     });
      //   } catch (error) {
      //     console.error('Error sending reset email:', error);
      //   }
      // } else {
      //   console.log('Form is invalid. Navigation prevented.');
      // }

      setLoading(true);
      const toastId = toast.loading('Вхід в систему...');

      if (isValid) {
        try {
          const response = await fetch('https://thecore-backend-nest.onrender.com/auth/forgot-password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          const result = await response.json();
          console.log(result);

          console.log(response);
          if (response.ok) {
            toast.success('Логін працює', { id: toastId });

            if (result.token) {
              localStorage.setItem('token', result.token);
            }

            //   setTimeout(() => navigate('/verify'), 1000);
            // } else {
            //   toast.error(result.message || 'Помилка авторизації', { id: toastId });
            // }

            navigate('/verify', {
              state: { from: 'forgot-password', email: data.email },
            });
          }
        } catch {
          toast.error('Сервер недоступний', { id: toastId });
        } finally {
          setLoading(false);
        }
      } else {
        console.log('Form is invalid. Navigation prevented.');
      }
    }
  };

	const navigate = useNavigate();
	const handleBackClick = () => {
		navigate("/signin");
	};

	return (
		<Background>
			<Content>
				<HeaderBack onClick={handleBackClick} />
				<TitleBox>
					<Title>Forgot password?</Title>
					<p>Enter your registered email address</p>
				</TitleBox>

        <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <ContentForm>
            <div>
              <InputContent>
                <InputWrapper>
                  <Label>Email</Label>
                  <InputBox>
                    <InputStyle
                      $error={errors.email ? true : false}
                      $success={!errors.email && isSubmitted}
                      type="email"
                      placeholder="example@gmail.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    <IconBox>{!errors.email && isSubmitted && <IoIosCheckmarkCircleOutline size={24} color={'var(--success-70)'} />}</IconBox>
                  </InputBox>
                  {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </InputWrapper>
              </InputContent>
            </div>

            <Bottom>
              {loading ? (
                <Loader />
              ) : (
                <ButtonBlock>
                  <Button children="Send" type="submit" disabled={loading} />
                </ButtonBlock>
              )}
            </Bottom>
          </ContentForm>
        </form>
      </Content>
    </Background>
  );
}

export default ForgotPassword;
