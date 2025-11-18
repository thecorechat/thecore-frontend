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
  MessageContainerStyle,
  MessagesList,
} from "./MessageContainer.styled";

const owner = "Peter Parker";

const MessageContainer = () => {
  const grouped = messages.reduce((acc, msg) => {
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
                </ChatImage>

                <div>
                  <ChatHeader>
                    <ChatName>
                      {message.name === owner ? "You" : message.name}
                    </ChatName>
                    <ChatTime>{formatMessageTime(message.createdAt)}</ChatTime>
                  </ChatHeader>

                  <ChatBubble>
                    {message.image && (
                      <ChatImageAttachment
                        src={message.image}
                        alt="Attachment"
                      />
                    )}
                    {message.message && <p>{message.message}</p>}
                  </ChatBubble>
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
