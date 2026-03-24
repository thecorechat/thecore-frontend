import { InputWrapper, SearchIcon, StyledInput } from "./InputSearch.styled";

const InputSearch = ({
  type = "text",
  placeholder = "Search people or channels",
}) => {
  return (
    <InputWrapper>
      <SearchIcon />
      <StyledInput type={type} placeholder={placeholder} />
    </InputWrapper>
  );
};

export default InputSearch;
