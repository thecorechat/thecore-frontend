import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { RouterProvider as ReactRouteProvider } from "react-router-dom";
import { router } from "../routes";

// Created once at module scope so the cache (and its persistence) survives
// across re-renders of RouterProvider, not just within a single mount.
const ONE_DAY = 24 * 60 * 60 * 1000;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// Keep cached data around long enough to be written to storage and
			// read back on the next page load, instead of being garbage
			// collected after the default 5 minutes.
			gcTime: ONE_DAY,
		},
	},
});

const persister = createAsyncStoragePersister({
	storage: window.localStorage,
	key: "thecore-query-cache",
});

export const RouterProvider = () => {
	return (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={{ persister, maxAge: ONE_DAY, buster: "v2" }}
		>
			<ReactQueryDevtools initialIsOpen={false} />
			<ReactRouteProvider router={router} />
		</PersistQueryClientProvider>
	);
};
