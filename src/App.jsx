import SignIn from './pages/SignInPage/SignInPage';
import MainSignIn from './pages/MainSignInPage/MainSignInPage';
import Chat from './pages/ChatPage/ChatPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPasswordPage/ForgotPasswordPage';
import VerifyCode from './pages/VerifyCodePage/VerifyCodePage';
import ChangePassword from './pages/ChangePasswordPage/ChangePasswordPage';
import SuccessMessage from './components/SuccessMessage/SuccessMessage';
// import AccessCode from './components/AccessCode/AccessCode';
// import SelectAccountType from './pages/SelectAccountPage/SelectAccountPage';
import CreateAccount from './pages/CreateAccountPage/CreateAccountPage';
import EmailPassword from './components/EmailPassword/EmailPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<MainSignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify" element={<VerifyCode />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/change-password/success" element={<SuccessMessage />} />

        {/* <Route path="/select-account" element={<SelectAccountType />} />
        <Route path="/select-account/access-code" element={<AccessCode />} /> */}

        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/create-account/email-password" element={<EmailPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
