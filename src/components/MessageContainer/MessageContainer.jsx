import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
	formatDividerDate,
	formatMessageTime,
	getDateKey,
	trimFileName,
} from "../../../lib/utils";
import icon from "../../assets/icons/sprite.svg";
import SkeletonLoader from "../../ui/SkeletonLoader/SkeletonLoader";
import { fetchWithAuth } from "../../utils/fetchWithAuth";
import {
	AvatarContainer,
	AvatarImg,
	ChatBubble,
	ChatContainer,
	ChatHeader,
	ChatImage,
	ChatImageAttachment,
	ChatName,
	ChatTime,
	ChatWrapper,
	DateDivider,
	FileContainer,
	FileIcon,
	FileIconContainer,
	FileName,
	FileSize,
	Like,
	LikeBtn,
	MessageContainerStyle,
	MessagesList,
} from "./MessageContainer.styled";

const MessageContainer = ({
	onOpenUserProfile,
	messages,
	onLikeMessage,
	ref,
	isLoading,
	isMembersLoading,
}) => {
	const [owner, setOwner] = useState(null);
	const [isOwnerLoading, setIsOwnerLoading] = useState(true);

	const grouped = (messages || []).reduce((acc, msg) => {
		const key = getDateKey(msg.createdAt);
		if (!acc[key]) acc[key] = [];
		acc[key].push(msg);
		return acc;
	}, {});

	const sortedDates = Object.keys(grouped).sort();

	useEffect(() => {
		async function handleGetInfo() {
			try {
				const response = await fetchWithAuth(
					"https://thecore-backend-nest.onrender.com/user/me",
				);

				if (!response.ok) {
					const error = await response.json();
					throw new Error(error.message);
				}

				const data = await response.json();

				setOwner(data.id);
				setIsOwnerLoading(false);
			} catch (error) {
				console.error(error.message);
			}
		}

		handleGetInfo();
	}, []);

	const handleDownload = async (fileUrl, fileName) => {
		try {
			const response = await fetch(fileUrl);

			if (!response.ok) {
				throw new Error(`Не вдалося завантажити файл: ${response.status}`);
			}

			const blob = await response.blob();
			const blobUrl = URL.createObjectURL(blob);

			const link = document.createElement("a");
			link.href = blobUrl;
			link.download = fileName;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			URL.revokeObjectURL(blobUrl);
		} catch (err) {
			console.error("Помилка завантаження файлу:", err);
		}
	};

	return (
		<MessageContainerStyle>
			{isLoading || isOwnerLoading || isMembersLoading ? (
				<SkeletonLoader />
			) : (
				<MessagesList ref={ref}>
					{sortedDates.map((dateKey) => (
						<li key={dateKey}>
							<DateDivider>{formatDividerDate(dateKey)}</DateDivider>
							{grouped[dateKey]
								.sort(
									(a, b) =>
										Number(new Date(a.createdAt)) -
										Number(new Date(b.createdAt)),
								)
								.map((message) => (
									// console.log(message),
									<ChatWrapper
										key={message.id}
										$isOwner={message.member.user.id === owner}
									>
										<ChatImage>
											{message.member.user.id !== owner && (
												<AvatarContainer>
													<AvatarImg
														src={message.member.user.avatarUrl}
														alt="Profile pic"
													/>
												</AvatarContainer>
											)}
										</ChatImage>

										{(message.content || message.fileUrl !== null) && (
											<ChatContainer>
												<ChatHeader>
													<ChatName onClick={onOpenUserProfile}>
														{message.member.user.id === owner
															? "You"
															: message.member.user.firstName}
													</ChatName>
													<ChatTime>
														{formatMessageTime(message.createdAt)}
													</ChatTime>
												</ChatHeader>

												{message.fileUrl && (
													// <FileList>
													// 	<FileItem key={Math.random()}>
													<FileContainer
														onClick={() =>
															handleDownload(message.fileUrl, message.fileName)
														}
														style={{ cursor: "pointer" }}
													>
														<FileIconContainer>
															<FileIcon>
																<use href={`${icon}#icon-image`}></use>
															</FileIcon>
														</FileIconContainer>

														<div>
															<FileName>
																{trimFileName(message.fileName)}
															</FileName>
															<FileSize>
																{message.fileSize >= 1024 * 1024
																	? `${(message.fileSize / (1024 * 1024)).toFixed(1)} MB`
																	: `${Math.round(message.fileSize / 1024)} KB`}
															</FileSize>
														</div>
													</FileContainer>
													// 	</FileItem>
													// </FileList>
												)}

												{message.content && (
													<ChatBubble
														$isOwner={message.member.user.id === owner}
													>
														{message.image && (
															<ChatImageAttachment
																src={message.image}
																alt="Attachment"
															/>
														)}
														{message.content && message.content}
													</ChatBubble>
												)}

												<LikeBtn
													type="button"
													onClick={() => onLikeMessage?.(message.id)}
													$isOwner={message.member.user.id === owner}
													style={{
														color: message.isLiked ? "#ff4d4d" : "#888",
													}}
												>
													<Like>
														{message.isLiked ? (
															<FaHeart size={14} />
														) : (
															<FaRegHeart size={14} />
														)}
														{message.likes.length > 0 && (
															<span
																style={{
																	fontSize: "12px",
																	fontWeight: "bold",
																	marginLeft: "5px",
																}}
															>
																{message.likes.length}
															</span>
														)}
													</Like>
												</LikeBtn>
											</ChatContainer>
										)}
									</ChatWrapper>
								))}
						</li>
					))}
				</MessagesList>
			)}
		</MessageContainerStyle>
	);
};

export default MessageContainer;
