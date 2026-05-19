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
const CreateAccount = lazy(
	() => import("../pages/CreateAccountPage/CreateAccountPage"),
);
const Chat = lazy(() => import("../pages/ChatPage/ChatPage"));
const EmailPassword = lazy(
	() => import("../components/EmailPassword/EmailPassword"),
);
const SuccessMessage = lazy(
	() => import("../components/SuccessMessage/SuccessMessage"),
);

const withSuspense = (Component) => (
	<Suspense fallback={<div>Loading...</div>}>
		<Component />
	</Suspense>
);

export const router = createBrowserRouter([
	{ path: "/", element: withSuspense(MainSignIn) },
	{ path: "/signin", element: withSuspense(SignIn) },
	{ path: "/forgot-password", element: withSuspense(ForgotPassword) },
	{ path: "/change-password", element: withSuspense(ChangePassword) },
	{ path: "/create-account", element: withSuspense(CreateAccount) },
	// { path: "/enter-access-code", element: <EnterAccessCodePage /> },
	{
		path: "/create-account/email-password",
		element: (
			<StateProtectedRoute requiredState={["firstName", "lastName"]}>
				{withSuspense(EmailPassword)}
			</StateProtectedRoute>
		),
	},
	{
		path: "/verify",
		element: (
			<StateProtectedRoute requiredState={["email"]}>
				{withSuspense(VerifyCode)}
			</StateProtectedRoute>
		),
	},
	{
		path: "/change-password/success",
		element: (
			<StateProtectedRoute requiredState={["passwordChanged"]}>
				{withSuspense(SuccessMessage)}
			</StateProtectedRoute>
		),
	},
	{
		path: "/chat",
		element: <ProtectedRoute>{withSuspense(Chat)}</ProtectedRoute>,
	},
	// WORKSPACE ROUTES
	{
		path: "/",
		children: [...workspaceRoutes],
	},
]);
