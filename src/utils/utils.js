// Converts a gamma encoded RGB to a linear value
const sRGBtoLin = (colorChannel) => {
  if (colorChannel <= 0.04045) {
    return colorChannel / 12.92;
  } else {
    return Math.pow((colorChannel + 0.055) / 1.055, 2.4);
  }
};

// Ρeturns an array of separated decimal color values
const hexColorToDec = (hexColor) => {
  const hexColorArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hexColor
  );
  return [
    parseInt(hexColorArray[1], 16),
    parseInt(hexColorArray[2], 16),
    parseInt(hexColorArray[3], 16),
  ];
};

// Returns the lightness of a given color
const colorLightness = (hexColor) => {
  const colorArray = hexColorToDec(hexColor);

  // Convert to linear
  const vR = colorArray[0] / 255;
  const vG = colorArray[1] / 255;
  const vB = colorArray[2] / 255;

  // Color luminance
  const luminance =
    0.2126 * sRGBtoLin(vR) + 0.7152 * sRGBtoLin(vG) + 0.0722 * sRGBtoLin(vB);

  let lightness;

  if (luminance <= 216 / 24389) {
    // The CIE standard states 0.008856 but 216/24389 is the intent for 0.008856451679036
    lightness = luminance * (24389 / 27); // The CIE standard states 903.3, but 24389/27 is the intent, making 903.296296296296296
  } else {
    lightness = Math.pow(luminance, 1 / 3) * 116 - 16;
  }

  // return Math.trunc(100 - lightness);
  return lightness;
};

// Returns the appropriate contrast color based on given bg color
export const properFontColor = (color) => {
  const lightness = colorLightness(color);
  return lightness > 50.0 ? "#000000" : "#FFFFFF";
};

// Returns given shade
export const colorShade = (hexColor) => {
  const shadeFactor = 0.1;
  const colorArray = hexColorToDec(hexColor);

  const shadeColorArray = colorArray.map((i) =>
    Math.trunc(i * (1 - shadeFactor))
  );
  return `rgb(${shadeColorArray[0]}, ${shadeColorArray[1]}, ${shadeColorArray[2]})`;
};

// Returns given color color tint
export const colorTint = (hexColor) => {
  const tintFactor = 0.1;
  const colorArray = hexColorToDec(hexColor);

  const tintColorArray = colorArray.map((i) =>
    Math.trunc(i + (255 - i) * tintFactor)
  );

  return `rgb(${tintColorArray[0]}, ${tintColorArray[1]}, ${tintColorArray[2]})`;
};
