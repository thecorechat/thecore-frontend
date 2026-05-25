import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const token = localStorage.getItem("token");
	const isInvalidToken = !token || token === "null" || token === "undefined";

	if (isInvalidToken) {
		localStorage.clear();
		return <Navigate to="/" replace />;
	}

	return children;
};

export default ProtectedRoute;
