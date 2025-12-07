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
// import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/signin" element={<MainSignIn />} />
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
