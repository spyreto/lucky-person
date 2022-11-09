// React
import { createContext, useEffect, useState } from "react";

// Selected by user card baground color context
export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  // Selected card's background color value
  const [selectedColor, setSelectedColor] = useState(null);

  // Get the selected color value from local storage
  useEffect(() => {
    setSelectedColor(localStorage.getItem("selectedColor"));
  }, []);

  // updates the selected color value from local storage
  const updateSelectedColor = (event) => {
    localStorage.setItem("selectedColor", event.target.value);
    setSelectedColor(event.target.value);
  };

  const value = { selectedColor, updateSelectedColor };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
