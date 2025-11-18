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
    // </Container> */}
  );
}

export default App;
