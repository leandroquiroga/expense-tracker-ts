import { style } from "@vanilla-extract/css";

export const container_login = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  margin: "0 auto",
  maxWidth: "660px",
  padding: "10px",
  width: "90%",
});

export const button_login = style({
  border: "none",
  borderRadius: "10px",
  backgroundColor: "#202020",
  padding: "8px",
  cursor: "pointer",
  width: "125px",
  color: "#FFF",

  '@media': {
    'screen and (max-width: 768px)': {
      width: "90%",
    },
  }
});