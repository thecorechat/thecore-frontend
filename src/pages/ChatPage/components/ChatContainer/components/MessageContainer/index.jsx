import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  formatDividerDate,
  formatMessageTime,
  getDateKey,
} from "../../../../../../../lib/utils";
import { messages } from "../../../../../../mock/data";
import {
  Avatar,
  ChatBubble,
  ChatHeader,
  ChatImage,
  ChatImageAttachment,
  ChatName,
  ChatTime,
  ChatWrapper,
  DateDivider,
  Like,
  MessageContainerStyle,
  MessagesList,
} from "./MessageContainer.styled";

const owner = "Peter Parker";

const MessageContainer = ({ onOpenUserProfile, messages, onLikeMessage }) => {
  // const grouped = messages.reduce((acc, msg) => {
  //   const key = getDateKey(msg.createdAt);
  //   if (!acc[key]) acc[key] = [];
  //   acc[key].push(msg);
  //   return acc;
  // }, {});

  const grouped = (messages || []).reduce((acc, msg) => {
    const key = getDateKey(msg.createdAt);
    if (!acc[key]) acc[key] = [];
    acc[key].push(msg);
    return acc;
  }, {});

  const sortedDates = Object.keys(grouped).sort();

  return (
    <MessageContainerStyle>
      <MessagesList>
        {sortedDates.map((dateKey) => (
          <div key={dateKey}>
            <DateDivider>{formatDividerDate(dateKey)}</DateDivider>
            {grouped[dateKey].map((message) => (
              <ChatWrapper key={message._id} isOwner={message.name === owner}>
                <ChatImage>
                  {message.name !== owner && (
                    <Avatar>
                      {/* <img
                src={
                  message.name === owner
                    ? authUser.profilePic || "/avatar.png"
                    : selectedUser.profilePic || "/avatar.png"
                }
                alt="profile pic"
              /> */}
                    </Avatar>
                  )}
                </ChatImage>

                <div style={{ position: "relative", marginBottom: "15px" }}>
                  <ChatHeader>
                    <ChatName onClick={onOpenUserProfile}>
                      {message.name === owner ? "You" : message.name}
                    </ChatName>
                    <ChatTime>{formatMessageTime(message.createdAt)}</ChatTime>
                  </ChatHeader>

                  <ChatBubble isOwner={message.name === owner}>
                    {message.image && (
                      <ChatImageAttachment
                        src={message.image}
                        alt="Attachment"
                      />
                    )}
                    {message.message && <p>{message.message}</p>}
                  </ChatBubble>

                  <button
                    onClick={() => onLikeMessage && onLikeMessage(message._id)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: "2px",
                      cursor: "pointer",
                      position: "absolute",
                      bottom: "-35px",

                      right: message.name === owner ? "0" : "auto",
                      left: message.name === owner ? "auto" : "0",
                      color: message.isLiked ? "#ff4d4d" : "#888",
                      zIndex: 10,
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
                </div>
              </ChatWrapper>
            ))}
          </div>
        ))}
      </MessagesList>
    </MessageContainerStyle>
  );
};

export default MessageContainer;
