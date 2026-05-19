import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider as ReactRouteProvider } from "react-router-dom";
import { router } from "../routes";

export const RouterProvider = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<ReactRouteProvider router={router} />
		</QueryClientProvider>
	);
};
