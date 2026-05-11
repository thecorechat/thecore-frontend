import { LoaderStyle } from './Loader.styled';

const Loader = ({ background, color, width, borderColor, nonactive }) => {
  return <LoaderStyle $background={background} $color={color} $width={width} $borderColor={borderColor} disabled={nonactive} />;
};

export default Loader;
