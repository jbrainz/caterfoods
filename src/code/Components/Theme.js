import { createMuiTheme } from "@material-ui/core/styles"

const white = "#ffffff"
const black = "#000000"
const orange = "#F25041"
const green = "#4FBB5A"
const darkOrange = "#D96262"
const purple = "#8756B5"

export default createMuiTheme({
  palette: {
    common: {
      white: white,
      orange: orange,
      black: black,
      green: green,
      purple: purple,
    },
    primary: {
      main: white,
      sub: orange,
    },
    secondary: {
      main: orange,
      sub: darkOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
    book: {
      fontSize: "1rem",
      textTransform: "none",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${orange}`,
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      color: `${black}`,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: `${orange}`,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: `${black}`,
      fontWeight: "700",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: "300",
      color: `${black}`,
    },
    learnButton: {
      borderColor: black,
      color: orange,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    body2: {
      fontSize: "16px",
      fontWeight: "300",
      fontFamily: "Gentona",
      color: "#00000099",
      lineHeight: "24px",
      minHeight: "150px",
    },
    body1: {
      fontSize: "1.2rem",
      color: black,
      fontWeight: "300",
    },
    subtitle2: {
      color: "#fff",
      fontSize: "1.25rem",
      fontWeight: "300",
    },
  },
})
