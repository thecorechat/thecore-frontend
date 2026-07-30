import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../../../ui/Button/Button";
import {
	handleCreateGroupInvite,
	handleCreatePersonalInvite,
} from "../../api/handleCreateInviteWorkspace";
import {
	Background,
	Bottom,
	ButtonBlock,
	Content,
	ContentForm,
	RadioCardSelected,
	RadioCardUnselected,
	RadioGroup,
	Title,
	TitleBox,
} from "./CreateInviteModal.styled";

/**
 * @param {{ workspaceId: string }} props
 */
function CreateInviteModal({ workspaceId }) {
	const [, setSearchParams] = useSearchParams();

	const [inviteType, setInviteType] = useState("group");
	const [role, setRole] = useState("TEACHER");
	const [isPending, setIsPending] = useState(false);

	const [inviteResult, setInviteResult] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsPending(true);

		try {
			let response;
			if (inviteType === "group") {
				response = await handleCreateGroupInvite(workspaceId, role);
			} else {
				response = await handleCreatePersonalInvite(workspaceId, role);
			}

			setInviteResult(response);
		} catch (error) {
			console.error(error.message);
		} finally {
			setIsPending(false);
		}
	};

	const handleCopyCode = () => {
		if (inviteResult?.code) {
			navigator.clipboard.writeText(inviteResult.code);
			toast.success("Code copied!");
		}
	};

	const handleClose = () => {
		setSearchParams({}, { replace: true });
	};

	return (
		<Background>
			<Content>
				<button
					type="button"
					onClick={handleClose}
					style={{
						position: "absolute",
						top: "20px",
						left: "20px",
						background: "none",
						border: "none",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "4px",
					}}
				>
					<IoClose size={24} color="#555" />
				</button>

				{inviteResult ? (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							flex: 1,
							justifyContent: "space-between",
						}}
					>
						<TitleBox>
							<Title>Invite Created!</Title>
							<p>Share this code with the {role.toLowerCase()}</p>
						</TitleBox>

						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "16px",
								padding: "24px",
								background: "var(--gray-20, #f0f0f0)",
								borderRadius: "12px",
							}}
						>
							<span
								style={{
									fontSize: "32px",
									fontWeight: "bold",
									letterSpacing: "4px",
									color: "var(--gray-100)",
								}}
							>
								{inviteResult.code}
							</span>
							<Button type="button" onClick={handleCopyCode}>
								Copy Code
							</Button>
						</div>

						<Bottom>
							<ButtonBlock>
								<Button
									type="button"
									onClick={() => setSearchParams({}, { replace: true })}
								>
									Done
								</Button>
							</ButtonBlock>
						</Bottom>
					</div>
				) : (
					<>
						<TitleBox>
							<Title>Create Invite for Workspace</Title>
							<p>Choose a role for the invite link</p>
						</TitleBox>

						<form
							onSubmit={handleSubmit}
							noValidate
							style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
						>
							<ContentForm>
								<RadioGroup>
									{role === "STUDENT" ? (
										<RadioCardSelected onClick={() => setRole("STUDENT")}>
											<span>👩‍🎓 👨‍🎓</span> Student
										</RadioCardSelected>
									) : (
										<RadioCardUnselected onClick={() => setRole("STUDENT")}>
											<span>👩‍🎓 👨‍🎓</span> Student
										</RadioCardUnselected>
									)}

									{role === "TEACHER" ? (
										<RadioCardSelected onClick={() => setRole("TEACHER")}>
											<span>👩‍🏫 👨‍💻</span> Teacher
										</RadioCardSelected>
									) : (
										<RadioCardUnselected onClick={() => setRole("TEACHER")}>
											<span>👩‍🏫 👨‍💻</span> Teacher
										</RadioCardUnselected>
									)}

									{role === "PARENT" ? (
										<RadioCardSelected onClick={() => setRole("PARENT")}>
											<span>👨‍👩</span> Parent
										</RadioCardSelected>
									) : (
										<RadioCardUnselected onClick={() => setRole("PARENT")}>
											<span>👨‍👩</span> Parent
										</RadioCardUnselected>
									)}
								</RadioGroup>

								<RadioGroup style={{ marginTop: "16px" }}>
									{inviteType === "group" ? (
										<RadioCardSelected onClick={() => setInviteType("group")}>
											<span>⏳</span> Group (7 days)
										</RadioCardSelected>
									) : (
										<RadioCardUnselected onClick={() => setInviteType("group")}>
											<span>⏳</span> Group (7 days)
										</RadioCardUnselected>
									)}

									{inviteType === "personal" ? (
										<RadioCardSelected
											onClick={() => setInviteType("personal")}
										>
											<span>👤</span> Personal (One-time)
										</RadioCardSelected>
									) : (
										<RadioCardUnselected
											onClick={() => setInviteType("personal")}
										>
											<span>👤</span> Personal (One-time)
										</RadioCardUnselected>
									)}
								</RadioGroup>

								<Bottom>
									<ButtonBlock>
										<Button type="submit" nonactive={isPending}>
											{isPending ? "Creating..." : "Continue"}
										</Button>
									</ButtonBlock>
								</Bottom>
							</ContentForm>
						</form>
					</>
				)}
			</Content>
		</Background>
	);
}

export default CreateInviteModal;
