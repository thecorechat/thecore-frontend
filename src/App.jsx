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
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import StateProtectedRoute from './components/StateProtectedRoute/StateProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/verify" element={<VerifyCode />} /> */}
        <Route path="/change-password" element={<ChangePassword />} />
        {/* <Route path="/change-password/success" element={<SuccessMessage />} /> */}
        <Route path="/create-account" element={<CreateAccount />} />
        {/* <Route path="/create-account/email-password" element={<EmailPassword />} /> */}

        <Route
          path="/create-account/email-password"
          element={
            <StateProtectedRoute requiredState={['firstName', 'lastName']}>
              <EmailPassword />
            </StateProtectedRoute>
          }
        />

        <Route
          path="/verify"
          element={
            <StateProtectedRoute requiredState={['email']}>
              <VerifyCode />
            </StateProtectedRoute>
          }
        />

        <Route
          path="/change-password/success"
          element={
            <StateProtectedRoute requiredState={['passwordChanged']}>
              <SuccessMessage />
            </StateProtectedRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
{
  /* <Route path="/select-account" element={<SelectAccountType />} />
<Route path="/select-account/access-code" element={<AccessCode />} /> */
}

export default App;
