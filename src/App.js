import { useState } from "react";

import SelectColorBox from "./components/select-color-box/SelectColorBox";
import UserSlider from "./components/user-slider/UserSlider";

import "./App.css";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("#9775fa");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="App">
      <h1>My Clerks</h1>
      <SelectColorBox
        color={selectedColor}
        onChangeHandler={handleColorChange}
      />
      <UserSlider color={selectedColor} />
    </div>
  );
};

export default App;
