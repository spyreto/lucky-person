export const isValidColor = (color) => {
  // Create an HTMLStyleElement
  const htmlStyleElement = new Option().style;
  htmlStyleElement.color = color;
  // If the color is invalid the func will return an empty string
  return htmlStyleElement.color !== "";
};
