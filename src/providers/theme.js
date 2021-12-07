import { createTheme as createMuiTheme } from "@mui/material/styles"

const headersStyle = {
  fontFamily: "'Dosis', 'Helvetica', 'Arial', 'sans-serif'",
  letterSpacing: 1,
}

export default createMuiTheme({
  typography: {
    h1: headersStyle,
    h2: headersStyle,
    h3: {
      fontFamily: "'Raleway', 'Helvetica', 'Arial', 'sans-serif'",
      letterSpacing: "0.5rem",
      fontWeight: "bold",
    },
    h4: {
      fontFamily: "'Raleway', 'Helvetica', 'Arial', 'sans-serif'",
      letterSpacing: "0.5rem",
      fontWeight: "bold",
    },
    h5: {
      fontFamily: "'Raleway', 'Helvetica', 'Arial', 'sans-serif'",
      fontWeight: "bold",
    },
    h6: headersStyle,
    p: {
      fontFamily: "'Dosis', 'Helvetica', 'Arial', 'sans-serif'",
      color: "rgb(136, 136, 136)",
    },
    body1: { fontFamily: "'Dosis', 'Helvetica', 'Arial', 'sans-serif'" },
    body2: {
      fontFamily: "'Dosis', 'Helvetica', 'Arial', 'sans-serif'",
      color: "rgb(136, 136, 136)",
      fontSize: "1rem",
      lineHeight: "2rem",
    },
    span: { fontFamily: "'Dosis', 'Helvetica', 'Arial', 'sans-serif'" },
    button: headersStyle,
  },
  palette: {
    gold: "#BF8C5A",
    whiteGrey: "rgb(200, 192, 184)",
  },
})
