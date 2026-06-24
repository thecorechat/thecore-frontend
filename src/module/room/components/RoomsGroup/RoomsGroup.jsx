import { GoPlus } from "react-icons/go";
import { IoMdArrowDropright } from "react-icons/io";
import { useGetRooms } from "../../hooks/useGetRooms";
import {
	AddChatStyle,
	Group,
	GroupHeader,
	GroupItem,
	GroupList,
} from "./RoomsGroup.styled";

function RoomsGroup({ workspace, isOpen, onToggle, onAddRoom }) {
	const { data: rooms = [] } = useGetRooms(workspace.id);

	return (
		<Group>
			<GroupHeader onClick={onToggle} $open={isOpen}>
				<IoMdArrowDropright size={16} />
				<span>{workspace.name}</span>
			</GroupHeader>
			<GroupList $open={isOpen}>
				{rooms.map((room) => (
					<GroupItem key={room._id}>
						<a href={`/workspace/${workspace.id}/${room._id}`}>{room.name}</a>
					</GroupItem>
				))}
				<AddChatStyle onClick={onAddRoom}>
					<GoPlus />
					<span>Add Chat</span>
				</AddChatStyle>
			</GroupList>
		</Group>
	);
}

export default RoomsGroup;
