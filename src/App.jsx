// import { lazy } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
// import StateProtectedRoute from "./components/StateProtectedRoute/StateProtectedRoute";

// const MainSignIn = lazy(() => import("./pages/MainSignInPage/MainSignInPage"));
// const SignIn = lazy(() => import("./pages/SignInPage/SignInPage"));
// const ForgotPassword = lazy(
// 	() => import("./pages/ForgotPasswordPage/ForgotPasswordPage"),
// );
// const VerifyCode = lazy(() => import("./pages/VerifyCodePage/VerifyCodePage"));
// const ChangePassword = lazy(
// 	() => import("./pages/ChangePasswordPage/ChangePasswordPage"),
// );
// const CreateAccount = lazy(
// 	() => import("./pages/CreateAccountPage/CreateAccountPage"),
// );
// const Chat = lazy(() => import("./pages/ChatPage/ChatPage"));
// const EmailPassword = lazy(
// 	() => import("./components/EmailPassword/EmailPassword"),
// );
// const SuccessMessage = lazy(
// 	() => import("./components/SuccessMessage/SuccessMessage"),
// );

function App() {
	return (
// 		<BrowserRouter>
// 			<Routes>
// 				<Route path="/" element={<MainSignIn />} />
// 				<Route path="/signin" element={<SignIn />} />
// 				<Route path="/forgot-password" element={<ForgotPassword />} />
// 				<Route path="/change-password" element={<ChangePassword />} />
// 				<Route path="/create-account" element={<CreateAccount />} />
// 				{/* // <Route path="/create-workspace" element={<CreateWorkspace />} /> */}
// 				<Route
// 					path="/create-account/email-password"
// 					element={
// 						<StateProtectedRoute requiredState={["firstName", "lastName"]}>
// 							<EmailPassword />
// 						</StateProtectedRoute>
// 					}
// 				/>
// 				<Route
// 					path="/verify"
// 					element={
// 						<StateProtectedRoute requiredState={["email"]}>
// 							<VerifyCode />
// 						</StateProtectedRoute>
// 					}
// 				/>
// 				<Route
// 					path="/change-password/success"
// 					element={
// 						<StateProtectedRoute requiredState={["passwordChanged"]}>
// 							<SuccessMessage />
// 						</StateProtectedRoute>
// 					}
// 				/>
// 				<Route
// 					path="/chat"
// 					element={
// 						<ProtectedRoute>
// 							<Chat />
// 						</ProtectedRoute>
// 					}
// 				/>
// 			</Routes>
// 		</BrowserRouter>
// 	);

	
	return null;
}

export default App;
