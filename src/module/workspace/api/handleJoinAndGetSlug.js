import { handleGetMyWorkspaces } from "./handleGetMyWorkspaces";
import { handleJoinCode } from "./handleJoinCode";

/** @param {string} code */
export const handleJoinAndGetSlug = async (code) => {
	try {
		const joinData = await handleJoinCode(code);
		const { workspaceId } = joinData;

		const workspaces = await handleGetMyWorkspaces();

		const currentWorkspace = workspaces.find((w) => w.id === workspaceId);

		return {
			slug: currentWorkspace ? currentWorkspace.slug : workspaceId,
		};
	} catch (error) {
		throw new Error(error.message || "Error when joining workspace");
	}
};
