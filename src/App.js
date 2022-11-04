// React
import { useState, useEffect } from "react";

// Import components
import SelectColorBox from "./components/select-color-box/SelectColorBox";
import UserSlider from "./components/user-slider/UserSlider";

import "./App.css";

const App = () => {
  // Selected card's background color value
  const [selectedColor, setSelectedColor] = useState(null);

  // Get the selected color value from local storage
  useEffect(() => {
    setSelectedColor(localStorage.getItem("selectedColor"));
  }, []);

  // Set the selected color value from local storage
  const handleColorChange = (event) => {
    localStorage.setItem("selectedColor", event.target.value);
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
