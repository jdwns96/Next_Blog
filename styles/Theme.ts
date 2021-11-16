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
  fontColor: "#000",
  backgroundColor: "#e9ecef",

  border: "#000",
  borderBox: "#e9ecef",

  icon: "#000",

  btn: "#615c59",

  darkgold: "#EEE",
  gold: "#615c59",
  lightgold: "#beb598",
};

const dark = {
  fontColor: "#beb598",
  backgroundColor: "#000",

  border: "#615c59",
  borderBox: "#222222",

  icon: "#beb598",

  btn: "#beb598",

  darkgold: "#222222",
  gold: "#615c59",
  lightgold: "#beb598",
};

export const lightTheme = { ...size, ...media, ...light };
export const darkTheme = { ...size, ...media, ...dark };
