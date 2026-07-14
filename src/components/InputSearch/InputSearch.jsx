import { useEffect, useRef, useState } from "react";
import { handleSearchUsers } from "../../module/room/api/handleSearchUsers";
import { useActiveRoom } from "../../module/room/context/ActiveRoomContext";
import { useCreateDirectRoom } from "../../module/room/hooks/useCreateDirectRoom";
import { useGetCurrentUser } from "../../module/user/hooks/useGetCurrentUser";
import { useGetMyWorkspaces } from "../../module/workspace/hooks/useGetMyWorkspaces";
import {
	InputWrapper,
	MessageBtn,
	ResultsDropdown,
	SearchHint,
	SearchIcon,
	StyledInput,
	UserItem,
	UserList,
} from "./InputSearch.styled";

// Members endpoint returns: { id, memberId, member: { id, userId, user: { id, firstName, lastName, ... } } }
const resolveUser = (/** @type {any} */ raw) =>
	raw?.member?.user ?? raw?.user ?? raw;
const getUserId = (/** @type {any} */ raw) =>
	raw?.member?.user?.id ?? raw?.user?.id ?? raw?.id ?? raw?._id;
const getUserName = (/** @type {any} */ raw) => {
	const u = resolveUser(raw);
	if (u?.firstName || u?.lastName) {
		return `${u.firstName ?? ""} ${u.lastName ?? ""}`.trim();
	}
	return u?.username ?? u?.name ?? u?.email ?? "Unknown user";
};

const InputSearch = ({
	type = "text",
	placeholder = "Search people or channels",
}) => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const [isSearching, setIsSearching] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const wrapperRef = useRef(null);

	const { data: workspaces = [] } = useGetMyWorkspaces();
	const { data: currentUser } = useGetCurrentUser();
	const currentUserId = currentUser?.id ?? currentUser?._id;
	const activeRoomCtx = useActiveRoom();
	const {
		mutate: createDirectRoom,
		isPending: isCreating,
		variables: creatingVariables,
	} = useCreateDirectRoom();

	useEffect(() => {
		const handleClickOutside = (/** @type {MouseEvent} */ e) => {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	useEffect(() => {
		const trimmed = query.trim();
		if (trimmed.length < 2 || workspaces.length === 0) {
			setResults([]);
			setIsSearching(false);
			return;
		}

		let cancelled = false;
		setIsSearching(true);

		const timeoutId = setTimeout(async () => {
			try {
				const perWorkspace = await Promise.all(
					workspaces.map((workspace) =>
						handleSearchUsers(workspace.id, trimmed)
							.then((res) =>
								(Array.isArray(res) ? res : []).map((raw) => ({
									raw,
									workspaceId: workspace.id,
								})),
							)
							.catch(() => []),
					),
				);
				if (cancelled) return;

				const q = trimmed.toLowerCase();
				const byUserId = new Map();
				for (const { raw, workspaceId } of perWorkspace.flat()) {
					const userId = getUserId(raw);
					if (!userId || byUserId.has(userId)) continue;
					if (currentUserId && userId === currentUserId) continue;
					const u = resolveUser(raw);
					const matches = [
						u?.firstName,
						u?.lastName,
						u?.username,
						u?.name,
						u?.email,
					]
						.filter(Boolean)
						.some((field) => field.toLowerCase().includes(q));
					if (!matches) continue;
					byUserId.set(userId, {
						userId,
						workspaceId,
						name: getUserName(raw),
					});
				}
				setResults(Array.from(byUserId.values()));
			} finally {
				if (!cancelled) setIsSearching(false);
			}
		}, 300);

		return () => {
			cancelled = true;
			clearTimeout(timeoutId);
		};
	}, [query, workspaces, currentUserId]);

	const handleSelectUser = (
		/** @type {{ userId: string, workspaceId: string, name: string }} */ user,
	) => {
		createDirectRoom(
			{
				workspaceId: user.workspaceId,
				targetUserId: user.userId,
				targetUserName: user.name,
			},
			{
				onSuccess: (room) => {
					activeRoomCtx?.setActiveRoom({
						roomId: room?._id ?? room?.id,
						workspaceId: user.workspaceId,
						name: room?.name ?? user.name,
						type: room?.type ?? "DIRECT",
					});
					setQuery("");
					setResults([]);
					setIsOpen(false);
				},
			},
		);
	};

	const showDropdown = isOpen && query.trim().length >= 2;

	return (
		<InputWrapper ref={wrapperRef}>
			<SearchIcon />
			<StyledInput
				type={type}
				placeholder={placeholder}
				value={query}
				onChange={(e) => {
					setQuery(e.target.value);
					setIsOpen(true);
				}}
				onFocus={() => setIsOpen(true)}
			/>
			{showDropdown && (
				<ResultsDropdown>
					{isSearching && <SearchHint>Searching…</SearchHint>}
					{!isSearching && results.length === 0 && (
						<SearchHint>No users found</SearchHint>
					)}
					{!isSearching && results.length > 0 && (
						<UserList>
							{results.map((user) => {
								const isCreatingThis =
									isCreating && creatingVariables?.targetUserId === user.userId;
								return (
									<UserItem key={user.userId}>
										<span>{user.name}</span>
										<MessageBtn
											type="button"
											disabled={isCreating}
											onClick={() => handleSelectUser(user)}
										>
											{isCreatingThis ? "Opening…" : "Message"}
										</MessageBtn>
									</UserItem>
								);
							})}
						</UserList>
					)}
				</ResultsDropdown>
			)}
		</InputWrapper>
	);
};

export default InputSearch;
