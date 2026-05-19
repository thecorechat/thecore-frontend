import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
// import App from "./App.jsx";
import { RouterProvider } from "./providers";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider />
		<ToastContainer
			position="top-right"
			autoClose={4000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="light"
		/>
	</StrictMode>,
);
