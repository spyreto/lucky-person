// React
import { useRef } from "react";

// Import components
import { ReactComponent as ColorPickerIcon } from "../../assets/colorize-24.svg";
import { ReactComponent as DropIcon } from "../../assets/drop-24.svg";

// Import styles
// React
import { useContext } from "react";
// Import context
import { ColorContext } from "../../context/color-context";
// Import styles
import { Container, ColorTextValue } from "./SelectColorBox.styles";
// Import default color value (if local storage is empty)
import { defaultCardColor } from "../../utils/styleVariables";

const SelectColorBox = ({ color, onChangeHandler }) => {
  const { selectedColor, updateSelectedColor } = useContext(ColorContext);
  const myColorInput = useRef(null);

  const handlePickerIconClick = () => {
    myColorInput.current.click();
  };

  return (
    <Container>
      <input
        id="color-input"
        type={"color"}
        value={selectedColor ? selectedColor : defaultCardColor}
        onChange={updateSelectedColor}
        ref={myColorInput}
      />
      <label htmlFor="color-input">Card background color:</label>
      <DropIcon fill={selectedColor ? selectedColor : defaultCardColor} />
      <ColorTextValue>
        {selectedColor ? selectedColor : "Select color"}
      </ColorTextValue>
      <ColorPickerIcon onClick={handlePickerIconClick} />
    </Container>
  );
};

export default SelectColorBox;
