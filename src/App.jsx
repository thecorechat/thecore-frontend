import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import EmailPassword from "./components/EmailPassword/EmailPassword";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import StateProtectedRoute from "./components/StateProtectedRoute/StateProtectedRoute";

// import SuccessMessage from "./components/SuccessMessage/SuccessMessage";
// import ChangePassword from "./pages/ChangePasswordPage/ChangePasswordPage";
// import Chat from "./pages/ChatPage/ChatPage";
// import AccessCode from './components/AccessCode/AccessCode';
// import SelectAccountType from './pages/SelectAccountPage/SelectAccountPage';
// import CreateAccount from "./pages/CreateAccountPage/CreateAccountPage";
// import ForgotPassword from "./pages/ForgotPasswordPage/ForgotPasswordPage";
// import MainSignIn from "./pages/MainSignInPage/MainSignInPage";
// import SignIn from "./pages/SignInPage/SignInPage";
// import VerifyCode from "./pages/VerifyCodePage/VerifyCodePage";

const MainSignIn = lazy(() => import("./pages/MainSignInPage/MainSignInPage"));
const SignIn = lazy(() => import("./pages/SignInPage/SignInPage"));
const ForgotPassword = lazy(
	() => import("./pages/ForgotPasswordPage/ForgotPasswordPage"),
);
const VerifyCode = lazy(() => import("./pages/VerifyCodePage/VerifyCodePage"));
const ChangePassword = lazy(
	() => import("./pages/ChangePasswordPage/ChangePasswordPage"),
);
const CreateAccount = lazy(
	() => import("./pages/CreateAccountPage/CreateAccountPage"),
);
const Chat = lazy(() => import("./pages/ChatPage/ChatPage"));
const EmailPassword = lazy(
	() => import("./components/EmailPassword/EmailPassword"),
);
const SuccessMessage = lazy(
	() => import("./components/SuccessMessage/SuccessMessage"),
);

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
				{/* // <Route path="/create-workspace" element={<CreateWorkspace />} /> */}
				<Route
					path="/create-account/email-password"
					element={
						<StateProtectedRoute requiredState={["firstName", "lastName"]}>
							<EmailPassword />
						</StateProtectedRoute>
					}
				/>
				<Route
					path="/verify"
					element={
						<StateProtectedRoute requiredState={["email"]}>
							<VerifyCode />
						</StateProtectedRoute>
					}
				/>
				<Route
					path="/change-password/success"
					element={
						<StateProtectedRoute requiredState={["passwordChanged"]}>
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

export default App;
