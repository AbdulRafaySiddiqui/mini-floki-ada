import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },

  palette: {
    primary: {
      main: "#632b0c",
      dark: "rgb(240,208,149)",
      light: "rgb(255,247,234)",
    },
    secondary: {
      main: "#f3722c",
    },
    text: {
      light: "rgb(134,134,134)",
      primary: "rgb(0,0,0)",
      secondary: "rgb(68,68,68)",
      textSecondary: "rgb(68,68,68)",
    },
  },
  typography: {
    fontFamily: "Mali, sans-serif",
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "bold", color: "secondary" },
          style: {
            color: "white",
            fontFamily: "Chewy, sans-serif",
            background: "#f3722c",
            borderRadius: 360,
            padding: "9px 32px 6px 28px",
            fontSize: 16,
            "&:hover": {
              background: "#f3722c",
            },
          },
        },
      ],

      styleOverrides: {
        root: {
          textTransform: "none",
        },
        containedSecondary: {
          color: "white",
          boxShadow: "none",
          borderRadius: 360,
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: {
          fontFamily: "Mali, sans-serif",
        },
      },
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "transparent" },
          style: {
            boxShadow: "none",
            padding: "30px 20px",
            borderStyle: "dotted",
            borderWidth: 4,
            borderColor: "#632b0c",
            borderRadius: 20,
            backgroundColor: "transparent",
            width: "fit-content",
          },
        },
        {
          props: { variant: "transparent", fullWidth: true },
          style: {
            boxShadow: "none",
            padding: "30px 20px",
            borderStyle: "dotted",
            borderWidth: 4,
            borderColor: "#632b0c",
            borderRadius: 20,
            backgroundColor: "transparent",
            width: "100%",
          },
        },
      ],
      styleOverrides: {
        root: {
          boxShadow: "none",
          padding: "30px 20px",
          borderStyle: "dotted",
          borderWidth: 4,
          borderColor: "#632b0c",
          borderRadius: 20,
          backgroundColor: "#f0d095",
          width: "100%",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          // boxShadow: "7px 7px 55px 0px #f2f3f6",
          background: "transparent",
          // border: "2px solid red"
        },
      },
    },
    MuiTableHead:{
      styleOverrides:{
        root:{
          background: "transparent",
          
        }
      }
    },
    MuiTableCell:{
      styleOverrides:{
        root:{
          background: "transparent",
          border: "none"  
        }
      }

    }
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        background: "white",
        borderRadius: 7,
        "& fieldset": {
          // borderWidth: "0px !important",
        },
      },
      notchedOutline: {
        // boxShadow: "0 0 10px rgb(0 0 0 / 10%)",
      },
    },

    MuiTab: {
      root: {
        borderBottom: "1px solid rgb(233,233,233)",
      },
    },
    MuiRadio: {
      root: {
        color: "grey",
      },
    },
    MuiFormControlLabel: {
      root: {
        color: "grey",
      },
    },
    MuiDialogTitle: {
      root: {
        "& h2": {
          fontWeight: 700,
          textAlign: "center",
          fontSize: 26,
        },
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 10,
        padding: 13,
        maxWidth: "500px !important",
      },
    },
    MuiDialogContent: {
      root: {
        color: "#777777",
        "& b": {
          color: "#515151",
        },
      },
    },
  },
  font: {
    link: "Chewy, sans-serif",
  },
});

export default theme;
