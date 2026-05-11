import { IoIosArrowBack } from "react-icons/io";
import { ArrowBackStyle } from "./ArrowBack.styled";

const ArrowBack = ({ onClick }) => {
	return (
		<ArrowBackStyle onClick={onClick}>
			<IoIosArrowBack />
		</ArrowBackStyle>
	);
};

export default ArrowBack;
