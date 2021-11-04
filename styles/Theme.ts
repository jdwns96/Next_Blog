const size = {};

const color = {
  gold: "brown",
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
