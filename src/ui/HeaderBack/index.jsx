import ArrowBack from "../ArrowBack";
import { HeaderBackStyle } from "./HeaderBack.styled";

const HeaderBack = ({ children, onClick }) => {
  return (
    <HeaderBackStyle>
      <ArrowBack onClick={onClick} />
      <p>{children}</p>
    </HeaderBackStyle>
  );
};

export default HeaderBack;
