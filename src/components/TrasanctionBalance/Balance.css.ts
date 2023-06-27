import { style } from "@vanilla-extract/css";



export const container_balance = style({
  margin: "10px auto",
  width: "90%",
  maxWidth: "768px",
  border: "1px solid #c3c4c7",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  borderRadius: "8px",
});

export const balance_chart = style({
  width: "100%",
  margin: '10px auto'
});

export const balance_informacion = style({
  textAlign: "left",
  width: "100%",

  "@media": {
    "screen and (max-width: 768px)": {
      textAlign: "center",
    },
  },
});

export const balance_information_title = style({
  textAlign: "left"
});