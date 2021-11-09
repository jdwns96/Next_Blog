const size = {
  xs: "223",
  sm: "400",
  md: "768",
  lg: "1024",
  xlg: "1920",
};

// default size mobile
const media = {
  deskTop: "@media screen and (min-width: 768px)",
};

const light = {
  darkgold: "#EEE",
  gold: "#615c59",
  lightgold: "#beb598",

  backgroundColor: "#FFF",
  fontColor: "#000",
};

const dark = {
  darkgold: "#222222",
  gold: "#615c59",
  lightgold: "#beb598",

  backgroundColor: "#000",
  fontColor: "#FFF",
};

export const lightTheme = { ...size, ...media, ...light };
export const darkTheme = { ...size, ...media, ...dark };
