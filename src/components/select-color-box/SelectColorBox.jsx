import { useState, useRef } from "react";

import { ReactComponent as ColorPickerIcon } from "../../assets/colorize-24.svg";
import { ReactComponent as DropIcon } from "../../assets/drop-24.svg";

import {
  Container,
  Input,
  Label,
  ColorInputContainer,
  ColorTextValue,
} from "./SelectColorBox.styles";

const SelectColorBox = () => {
  const [value, setValue] = useState("");
  const myColorInput = useRef(null);

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handlePickerIconClick = () => {
    myColorInput.current.click();
  };

  return (
    <Container>
      <Label>Card background color:</Label>
      <ColorInputContainer>
        <Input type={"color"} onChange={handleValueChange} ref={myColorInput} />
        <DropIcon fill={value} />
        <ColorTextValue>{value ? value : "Select color"}</ColorTextValue>
        <ColorPickerIcon onClick={handlePickerIconClick} />
      </ColorInputContainer>
    </Container>
  );
};

export default SelectColorBox;
