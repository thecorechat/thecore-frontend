import { IoIosArrowBack } from "react-icons/io";
import { DropdownMenuDemo } from "../DropDownMenu/DropDownMenu";
import { ArrowBack, SearchInputHeaderStyle } from "./SearchInputHeader.styled";

const SearchInputHeader = ({
	onBack = () => {},
	searchQuery = "",
	setSearchQuery = (e) => {
		void e;
	},
	type = "text",
	placeholder = "Search",
}) => {
	return (
		<>
			<ArrowBack onClick={onBack}>
				<IoIosArrowBack />
			</ArrowBack>
			<SearchInputHeaderStyle
				type={type}
				placeholder={placeholder}
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<DropdownMenuDemo />
		</>
	);
};

export default SearchInputHeader;
