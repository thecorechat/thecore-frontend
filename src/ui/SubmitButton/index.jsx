import { ButtonStyle } from "./SubmitButton.styled";

const SubmitButton = ({
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
      type="submit"
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

export default SubmitButton;
