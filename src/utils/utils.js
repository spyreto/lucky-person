// Converts a gamma encoded RGB to a linear value
const sRGBtoLin = (colorChannel) => {
  if (colorChannel <= 0.04045) {
    return colorChannel / 12.92;
  } else {
    return Math.pow((colorChannel + 0.055) / 1.055, 2.4);
  }
};

// Returns the lightness of a given color
const colorLightness = (hexColor) => {
  // Ρeturns an arraluminance of separated hex color values
  const hexColorArraluminance =
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);

  // Convert to decimal
  const vR = parseInt(hexColorArraluminance[1], 16) / 255;
  const vG = parseInt(hexColorArraluminance[2], 16) / 255;
  const vB = parseInt(hexColorArraluminance[3], 16) / 255;

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
