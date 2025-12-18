// import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
// import SignIn from './pages/SignIn/SignIn';
// import MainSignIn from './pages/MainSignIn/MainSignIn';
// import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
// import EnterCode from './pages/EnterCode/EnterCode';
// import ChangePassword from './pages/ChangePassword/ChangePassword';
import SignIn from "./pages/SignIn/SignIn";
import MainSignIn from "./pages/MainSignIn/MainSignIn";
import { Container } from "./styles/container";
import Chat from "./pages/ChatPage/index";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import VerifyCode from "./pages/VerifyCode";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import SuccessMessage from "./pages/ChangePassword/components/SuccessMessage";
import AccessCode from "./pages/SelectAccount/components/AccessCode";
import SelectAccountType from "./pages/SelectAccount/index";
import CreateAccount from "./pages/CreateAccount/index";
import EmailPassword from "./pages/CreateAccount/components/EmailPassword";

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

        <Route path="/select-account" element={<SelectAccountType />} />
        <Route path="/select-account/access-code" element={<AccessCode />} />

        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/create-account/email-password"
          element={<EmailPassword />}
        />
      </Routes>
    </BrowserRouter>

    // {/* <Container> */}
    // {/* <MainSignIn /> */}
    // {/* <SignIn /> */}
    // {/* <Chat />
    // <ForgotPassword />
    /* <EnterCode /> */
    //         <ChangePassword />
    // </Container> */}
  );
}

export default App;
