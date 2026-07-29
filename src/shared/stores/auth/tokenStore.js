import { useEffect, useState } from "react";

const TOKEN_EVENT = "auth-token-changed";

export const getToken = () =>
	localStorage.getItem("token") || localStorage.getItem("accessToken");

export const setToken = (token) => {
	if (token) {
		localStorage.setItem("token", token);
	} else {
		localStorage.removeItem("token");
		localStorage.removeItem("accessToken");
	}
	window.dispatchEvent(new Event(TOKEN_EVENT));
};

export const useAuthToken = () => {
	const [token, setTokenState] = useState(getToken());

	useEffect(() => {
		const handleChange = () => setTokenState(getToken());

		window.addEventListener(TOKEN_EVENT, handleChange);
		window.addEventListener("storage", handleChange); // синхронизация между вкладками

		return () => {
			window.removeEventListener(TOKEN_EVENT, handleChange);
			window.removeEventListener("storage", handleChange);
		};
	}, []);

	return token;
};
