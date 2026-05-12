import {
  Title,
  Background,
  Content,
  InputWrapper,
  InputStyle,
  Bottom,
  ButtonBlock,
  InputContent,
  ContentForm,
  TitleBox,
  Text,
  Link,
} from './VerifyCodePage.styled';

import HeaderBack from '../../ui/HeaderBack/HeaderBack';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../../ui/Button/Button';
import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const CODE_LENGTH = 4;
function VerifyCode() {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const { state } = useLocation();
  const navigate = useNavigate();
  const fromPage = state?.from;

  const [isCodeInvalid, setIsCodeInvalid] = useState(false);
  const [code, setCode] = useState(new Array(CODE_LENGTH).fill(''));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const combinedCode = code.join('');

  const onSubmit = async () => {
    if (code.some((digit) => digit === '')) {
      setIsCodeInvalid(true);
      return;
    }

    const toastId = toast.loading('Code submiting...');

    try {
      const endpoint =
        fromPage === 'forgot-password'
          ? 'https://thecore-backend-nest.onrender.com/auth/verify-forgot-password'
          : 'https://thecore-backend-nest.onrender.com/auth/verify-registration';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: state.email,
          code: combinedCode,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        setIsCodeInvalid(true);
        throw new Error(result.message);
      }

      if (response.ok) {
        toast.update(toastId, {
          render: 'Code is correct',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
        });

        if (result.accessToken) {
          localStorage.setItem('token', result.accessToken);
        }
      }

      setIsCodeInvalid(false);

      if (fromPage === 'registration') {
        navigate('/chat');
      } else if (fromPage === 'forgot-password') {
        navigate('/change-password', {
          state: {
            token: result.resetToken,
          },
        });
      } else {
        navigate('/chat');
      }
    } catch (err) {
      toast.update(toastId, {
        render: err.message || 'Невірний код',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  const handleBackClick = () => {
    navigate('/forgot-password');
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleChange = (index, e) => {
    setIsCodeInvalid(false);

    const value = e.target.value;
    if (isNaN(value)) return;

    const newCode = [...code];
    newCode[index] = value.substring(value.length - 1);
    setCode(newCode);

    const nextIndex = index + 1;
    if (value && nextIndex < CODE_LENGTH) {
      inputRefs.current[nextIndex].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pastedValue = e.clipboardData.getData('text').trim();

    if (isNaN(pastedValue)) return;

    const newCode = [...code];
    pastedValue.split('').forEach((char, index) => {
      if (index < CODE_LENGTH) {
        newCode[index] = char;
      }
    });

    setCode(newCode);

    const lastIndex = Math.min(pastedValue.length, CODE_LENGTH) - 1;
    inputRefs.current[lastIndex].focus();
  };

  const handleSendAgain = async () => {
    try {
      const response = await fetch('https://thecore-backend-nest.onrender.com/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: state.email,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (err) {
      // console.error('Помилка:', err.message);
      toast.error('Error:', err.message);
    }
  };

  return (
    <Background>
      <Content>
        <HeaderBack onClick={handleBackClick} />

        <ToastContainer />

        <TitleBox>
          <Title>Verify Code</Title>
          <p>
            An 4-digit code has been sent to <span>{'your email address'}</span>
          </p>
        </TitleBox>

        <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <ContentForm>
            <div>
              <InputContent>
                <InputWrapper>
                  {code.map((value, index) => {
                    return (
                      <InputStyle
                        key={index}
                        ref={(input) => (inputRefs.current[index] = input)}
                        $error={isCodeInvalid}
                        name="code"
                        type="tel"
                        maxLength={1}
                        placeholder="0"
                        value={value}
                        onChange={(e) => handleChange(index, e)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        disabled={isSubmitting}
                      />
                    );
                  })}
                </InputWrapper>
                <Text>
                  Don't get a code?
                  <Link onClick={handleSendAgain}>Send again</Link>
                </Text>
              </InputContent>
            </div>
            <Bottom>
              <ButtonBlock>
                <Button children="Verify" type="submit" disabled={isSubmitting} />
              </ButtonBlock>
            </Bottom>
          </ContentForm>
        </form>
      </Content>
    </Background>
  );
}

export default VerifyCode;
