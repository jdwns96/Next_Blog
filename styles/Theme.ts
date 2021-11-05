const size = {};

const color = {
  darkgold: "#222222",
  gold: "#615c59",
  lightgold: "#beb598",
};

const light = {
  backgroundColor: "#FFF",
  fontColor: "#000",
};

const dark = {
  backgroundColor: "#000",
  fontColor: "#FFF",
};

export const lightTheme = { ...size, ...color, ...light };
export const darkTheme = { ...size, ...color, ...dark };
