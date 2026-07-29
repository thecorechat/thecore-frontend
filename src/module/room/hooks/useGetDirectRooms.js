import { useQueries } from "@tanstack/react-query";
import { useGetMyWorkspaces } from "../../workspace/hooks/useGetMyWorkspaces";
import { handleGetRooms } from "../api/handleGetRooms";

const isDirect = (/** @type {any} */ room) =>
	room.type?.toUpperCase() === "DIRECT";

// The backend's room-list response already includes the other participant
// as `roomMembers[0]` for DIRECT rooms (self excluded, take: 1) — no need
// for a separate per-room fetch to resolve the display name.

const getOtherUser = (/** @type {any} */ room) =>
	room.roomMembers?.[0]?.member?.user ?? null;

const getDirectRoomName = (/** @type {any} */ room) => {
	const user = getOtherUser(room);
	if (!user) return room.name;
	if (user.firstName || user.lastName) {
		return `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();
	}
	return user.username ?? room.name;
};

/**
 * Aggregates DIRECT rooms across every workspace the current user belongs
 * to, and resolves each one's display name from the other participant
 * (the backend only stores an internal placeholder name for DIRECT rooms,
 * e.g. "direct-<memberId>-<memberId>").
 */

export const useGetDirectRooms = () => {
	const { data: workspaces = [], isPending: isWorkspacesPending } =
		useGetMyWorkspaces();

	const roomListQueries = useQueries({
		queries: workspaces.map((/** @type {any} */ workspace) => ({
			queryKey: ["rooms", workspace.id],
			queryFn: () => handleGetRooms(workspace.id),
			enabled: !!workspace.id,
			staleTime: 5 * 60 * 1000,
		})),
	});

	const items = workspaces.flatMap((/** @type {any} */ workspace, index) => {
		const rooms = /** @type {any[]} */ (roomListQueries[index]?.data) ?? [];
		return rooms.filter(isDirect).map((room) => {
			const otherUser = getOtherUser(room);
			return {
				roomId: room._id ?? room.id,
				workspaceId: workspace.id,
				type: room.type,
				name: getDirectRoomName(room),
				otherUserId: otherUser?.id ?? null,
				avatarUrl: otherUser?.avatarUrl ?? null,
			};
		});
	});

	const isLoading =
		isWorkspacesPending || roomListQueries.some((query) => query.isPending);

	return { data: items, isLoading };
};
