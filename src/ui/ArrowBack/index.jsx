import { ArrowBackStyle } from "./ArrowBack.styled";
import { IoIosArrowBack } from "react-icons/io";

const ArrowBack = ({ onClick }) => {
  return (
    <ArrowBackStyle onClick={onClick}>
      <IoIosArrowBack />
    </ArrowBackStyle>
  );
};

export default ArrowBack;
