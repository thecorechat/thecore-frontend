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
  nonactive,
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
      disabled={nonactive}
    >
      {children || "Save"}
    </ButtonStyle>
  );
};

export default Button;
