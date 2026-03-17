import { DropdownMenuDemo } from "../DropDownMenu";
import { ArrowBack, SearchInputHeaderStyle } from "./SearchInputHeader.styled";
import { IoIosArrowBack } from "react-icons/io";

const SearchInputHeader = ({
  onBack,
  searchQuery,
  setSearchQuery,
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
