import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
	formatDividerDate,
	formatMessageTime,
	getDateKey,
} from "../../../lib/utils";
import icon from "../../assets/icons/sprite.svg";
import {
	// Avatar,
	ChatBubble,
	ChatContainer,
	ChatHeader,
	// ChatImage,
	ChatImageAttachment,
	ChatName,
	ChatTime,
	ChatWrapper,
	DateDivider,
	FileContainer,
	FileIcon,
	FileIconContainer,
	FileItem,
	FileList,
	FileName,
	FileSize,
	Like,
	MessageContainerStyle,
	MessagesList,
} from "./MessageContainer.styled";

// const owner = "Peter Parker";

const MessageContainer = ({
	onOpenUserProfile,
	messages,
	onLikeMessage,
	ref,
	isLoading,
}) => {
	const grouped = (messages || []).reduce((acc, msg) => {
		const key = getDateKey(msg.createdAt);
		if (!acc[key]) acc[key] = [];
		acc[key].push(msg);
		return acc;
	}, {});

	const sortedDates = Object.keys(grouped).sort();

	return (
		<MessageContainerStyle>
			{isLoading ? (
				"loading..."
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
								.map(
									(message) => (
										console.log(message),
										(
											<ChatWrapper
												key={message.id}
												// isOwner={message.name === owner}
											>
												{/* <ChatImage> - повідомлення співрозмовника
									{
										// message.name !== owner &&
										<Avatar>
											{/* <img
                src={
                  message.name === owner
                    ? authUser.profilePic || "/avatar.png"
                    : selectedUser.profilePic || "/avatar.png"
                }
                alt="profile pic"
              /> 
										</Avatar>
									
								</ChatImage> */}

												{(message.content || message.fileUrl !== null) && (
													<ChatContainer>
														<ChatHeader>
															<ChatName onClick={onOpenUserProfile}>
																{message.member.user.firstName === "owner"
																	? "You"
																	: message.member.user.firstName}
															</ChatName>
															<ChatTime>
																{formatMessageTime(message.createdAt)}
															</ChatTime>
														</ChatHeader>

														<FileList>
															{message.fileUrl?.map((file) => (
																<FileItem key={Math.random()}>
																	<FileContainer>
																		<FileIconContainer>
																			<FileIcon>
																				<use href={`${icon}#icon-image`}></use>
																			</FileIcon>
																		</FileIconContainer>

																		<div>
																			<FileName>{file.name}</FileName>
																			<FileSize>
																				{file.size >= 1024 * 1024
																					? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
																					: `${Math.round(file.size / 1024)} KB`}
																			</FileSize>
																		</div>
																	</FileContainer>
																</FileItem>
															))}
														</FileList>

														{message.content && (
															<ChatBubble
															//  isOwner={message.name === owner}
															>
																{message.image && (
																	<ChatImageAttachment
																		src={message.image}
																		alt="Attachment"
																	/>
																)}
																{message.content && message.content}
																{/* {message.message && <p>{message.message}</p>} */}
															</ChatBubble>
														)}

														<button
															type="button"
															onClick={() => onLikeMessage?.(message.id)}
															style={{
																// right: message.name === owner ? "0" : "auto",
																// left: message.name === owner ? "auto" : "0",
																color: message.isLiked ? "#ff4d4d" : "#888",
																// zIndex: 10,
															}}
														>
															<Like>
																{message.isLiked ? (
																	<FaHeart size={14} />
																) : (
																	<FaRegHeart size={14} />
																)}
																{message.likesCount > 0 && (
																	<span
																		style={{
																			fontSize: "12px",
																			fontWeight: "bold",
																			marginLeft: "5px",
																		}}
																	>
																		{message.likesCount}
																	</span>
																)}
															</Like>
														</button>
													</ChatContainer>
												)}
											</ChatWrapper>
										)
									),
								)}
						</li>
					))}
				</MessagesList>
			)}
		</MessageContainerStyle>
	);
};

export default MessageContainer;
