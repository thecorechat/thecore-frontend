import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router-dom";
import { handleGetMyWorkspaces } from "../../../module/workspace/api/handleGetMyWorkspaces";

import { Background, Content, Title, TitleBox } from "./WorkspacePage.styled";

function WorkspacePage() {
	const { slug } = useParams();

	const {
		data: workspace,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["workspaces"],
		queryFn: handleGetMyWorkspaces,

		select: (workspaces) => workspaces.find((w) => w.slug === slug),
	});

	if (isLoading) {
		return (
			<Background>
				<Content>
					<Title>Loading Workspace...</Title>
				</Content>
			</Background>
		);
	}

	if (error || !workspace) {
		return (
			<Background>
				<Content>
					<Title>Workspace not found</Title>
					<p style={{ color: "red", textAlign: "center" }}>
						You are not a member of the workspace "{slug}" or it does not exist.
					</p>
				</Content>
			</Background>
		);
	}

	return (
		<Background>
			<Content>
				<TitleBox>
					<Title>Welcome to {workspace.name}</Title>
				</TitleBox>

				<div
					style={{
						marginTop: "32px",
						display: "flex",
						flexDirection: "column",
						gap: "12px",
						textAlign: "center",
					}}
				>
					<p style={{ color: "var(--gray-70)", fontSize: "15px" }}>
						<strong style={{ color: "var(--gray-100)" }}>Slug from URL:</strong>{" "}
						{slug}
					</p>
					<p style={{ color: "var(--gray-70)", fontSize: "15px" }}>
						<strong style={{ color: "var(--gray-100)" }}>Workspace ID:</strong>{" "}
						{workspace.id}
					</p>
					<p style={{ color: "var(--gray-70)", fontSize: "15px" }}>
						<strong style={{ color: "var(--gray-100)" }}>Members:</strong>{" "}
						{workspace._count.members}
					</p>
				</div>
			</Content>
		</Background>
	);
}

export default WorkspacePage;
