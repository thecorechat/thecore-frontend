import { ButtonStyle } from "./Button.styled";

/**
 * @param {{
 * children?: any,
 * background?: string,
 * color?: string,
 * width?: string,
 * height?: string,
 * borderColor?: string,
 * onClick?: () => void,
 * hoverColor?: string,
 * nonactive?: boolean,
 * disabled?: boolean,
 * type?: "button" | "submit" | "reset"
 * }} props
 */
const Button = ({
	children,
	background,
	color,
	width,
	height,
	borderColor,
	onClick,
	hoverColor,
	nonactive,
	disabled,
	type = "button",
}) => {
	return (
		<ButtonStyle
			onClick={onClick}
			$background={background}
			$color={color}
			$width={width}
			$borderColor={borderColor}
			$hoverColor={hoverColor}
			$height={height}
			disabled={nonactive || disabled}
			type={type}
		>
			{children || "Save"}
		</ButtonStyle>
	);
};

export default Button;
