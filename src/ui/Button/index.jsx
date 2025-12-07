import { ButtonStyle } from "./Button.styled";

const Button = ({
  children,
  background,
  color,
  width,
  height,
  borderColor,
  onClick,
  hoverColor,
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
    >
      {children || "Save"}
    </ButtonStyle>
  );
};

export default Button;
