import { createContext, useContext } from "react";
import { Input, Select } from "./RadioSelect.styled";

const RadioContext = createContext();

export default function Radio({ children, ...props }) {
  const { value, onChange } = useContext(RadioContext);

  const isActive = value === props.value;

  return (
    <Select $isActive={isActive}>
      <Input type="radio" checked={isActive} onChange={onChange} {...props} />
      {children}
    </Select>
  );
}

export function RadioGroup({ value, onChange, children }) {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      {children}
    </RadioContext.Provider>
  );
}
