import { useRef } from "react";

import { ReactComponent as ColorPickerIcon } from "../../assets/colorize-24.svg";
import { ReactComponent as DropIcon } from "../../assets/drop-24.svg";

import {
  Container,
  Input,
  Label,
  ColorInputContainer,
  ColorTextValue,
} from "./SelectColorBox.styles";

const SelectColorBox = ({ color, onChangeHandler }) => {
  const myColorInput = useRef(null);

  const handlePickerIconClick = () => {
    myColorInput.current.click();
  };

  return (
    <Container>
      <Label>Card background color:</Label>
      <ColorInputContainer>
        <Input type={"color"} onChange={onChangeHandler} ref={myColorInput} />
        <DropIcon fill={color} />
        <ColorTextValue>{color ? color : "Select color"}</ColorTextValue>
        <ColorPickerIcon onClick={handlePickerIconClick} />
      </ColorInputContainer>
    </Container>
  );
};

export default SelectColorBox;
