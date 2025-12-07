import { useState } from "react";
import {
  ToggleSwitchStyle,
  ToggleSwitchStyleButton,
  ToggleSwitchStyleThumb,
} from "./ToggleSwitch.styled";

const ToggleSwitch = ({ onClick }) => {
  const [toggled, setToggled] = useState(false);

  const handleClick = () => {
    const newState = !toggled;
    setToggled(newState);

    if (onClick) {
      onClick(newState);
    }
  };
  return (
    <ToggleSwitchStyle>
      <ToggleSwitchStyleButton onClick={handleClick} $toggled={toggled}>
        <ToggleSwitchStyleThumb $toggled={toggled}></ToggleSwitchStyleThumb>
      </ToggleSwitchStyleButton>
    </ToggleSwitchStyle>
  );
};

export default ToggleSwitch;
