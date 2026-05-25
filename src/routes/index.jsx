import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import StateProtectedRoute from "../components/StateProtectedRoute/StateProtectedRoute";
import { workspaceRoutes } from "./workspaceRoutes";

const MainSignIn = lazy(() => import("../pages/MainSignInPage/MainSignInPage"));
const SignIn = lazy(() => import("../pages/SignInPage/SignInPage"));
const ForgotPassword = lazy(
	() => import("../pages/ForgotPasswordPage/ForgotPasswordPage"),
);
const VerifyCode = lazy(() => import("../pages/VerifyCodePage/VerifyCodePage"));
const ChangePassword = lazy(
	() => import("../pages/ChangePasswordPage/ChangePasswordPage"),
);
const Chat = lazy(() => import("../pages/ChatPage/ChatPage"));
const CreateAccount = lazy(
	() => import("../pages/CreateAccountPage/CreateAccountPage"),
);
const EmailPassword = lazy(
	() => import("../components/EmailPassword/EmailPassword"),
);
const SuccessMessage = lazy(
	() => import("../components/SuccessMessage/SuccessMessage"),
);

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<MainSignIn />
			</Suspense>
		),
	},
	{
		path: "/signin",
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<SignIn />
			</Suspense>
		),
	},
	{
		path: "/forgot-password",
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<ForgotPassword />
			</Suspense>
		),
	},
	{
		path: "/change-password",
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<ChangePassword />
			</Suspense>
		),
	},
	{
		path: "/create-account",
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<CreateAccount />
			</Suspense>
		),
	},
	{
		path: "/create-account/email-password",
		element: (
			<StateProtectedRoute requiredState={["firstName", "lastName"]}>
				<Suspense fallback={<div>Loading...</div>}>
					<EmailPassword />
				</Suspense>
			</StateProtectedRoute>
		),
	},
	{
		path: "/verify",
		element: (
			<StateProtectedRoute requiredState={["email"]}>
				<Suspense fallback={<div>Loading...</div>}>
					<VerifyCode />
				</Suspense>
			</StateProtectedRoute>
		),
	},
	{
		path: "/change-password/success",
		element: (
			<StateProtectedRoute requiredState={["passwordChanged"]}>
				<Suspense fallback={<div>Loading...</div>}>
					<SuccessMessage />
				</Suspense>
			</StateProtectedRoute>
		),
	},
	{
		path: "/",
		children: [...workspaceRoutes],
	},
]);
