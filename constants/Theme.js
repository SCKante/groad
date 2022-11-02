const { StyleSheet, Dimensions } = require("react-native");

const styles = StyleSheet.create({
  h1: {
    fontSize: 48,
    lineHeight: 60,
    fontFamily: "SF_Semibold",
  },
  h2: {
    fontSize: 39,
    lineHeight: 48.75,
    fontFamily: "SF_Semibold",
  },
  h3: {
    fontSize: 31,
    lineHeight: 38.75,
    fontFamily: "SF_Regular",
  },
  h4: {
    fontSize: 25,
    lineHeight: 31.25,
    fontFamily: "SF_Semibold",
  },
  h5: {
    fontSize: 20,
    lineHeight: 25,
    fontFamily: "SF_Semibold",
  },
  h6: {
    fontSize: 12,
    lineHeight: 15,
    fontFamily: "SF_Semibold",
  },
});

const { height, width } = Dimensions.get("screen");

//Colors Palette
const THEMES = {
  colors: {
    //principal color
    primary: "#fc6a57",
    secondary: "#007eff",
    tertiary: "#ffe9e4",

    //accent colors
    danger: "#fb4e4e",
    warning: "#f6a609",
    succes: "#2ac769",

    //dark colors
    black: "#25282b",
    grey100: "#52575c",
    grey75: "#a0a4a8",
    grey50: "#cacccf",
    grey10: "#e8e8e8",
  },
  fonts: {
    //heading fonts
    H1: styles.h1,
    H2: styles.h2,
    H3: styles.h3,
    H4: styles.h4,
    H5: styles.h5,
    H6: styles.h6,
  },

  //spacing
  spacing: {
    padding16: 16,
    padding20: 20,
    margin8: 8,
    marging12: 12,
    margin16: 16,
    margin20: 20,
    marging40: 40,
    radius_s: 10,
    radius_m: 20,
    radius_l: 40,
    radiu_xl: 75,
  },

  //screen dimensions
  HEIGHT: height,
  WIDTH: width,
};

export default THEMES;
