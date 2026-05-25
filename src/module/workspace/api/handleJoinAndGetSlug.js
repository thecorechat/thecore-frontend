import { handleJoinCode } from "./handleJoinCode";

/** @param {string} code */
export const handleJoinAndGetSlug = async (code) => {
	try {
		const { workspaceId } = await handleJoinCode(code);
		return { id: workspaceId };
	} catch (error) {
		throw new Error(error.message || "Error when joining workspace");
	}
};
