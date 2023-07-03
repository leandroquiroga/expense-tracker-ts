import { style } from "@vanilla-extract/css";

export const container_card = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
  maxWidth: "768px",
  margin: '0 auto'
});


export const card = style({
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid #c3c4c7",
  boxShadow: "0px 1px 8px 0px #a2a2a3",
  borderRadius: "0px 5px 5px 0px",
  padding: "10px",
  width: "100%",
  maxWidth: "768px",
  alignItems: "center",
  margin: "5px auto",
  cursor: "pointer"
});

export const card_description = style({
  width: "250px",
  textAlign: "left"
});

export const logo_delete_card = style({
  width: '30px'
})

export const card_optional = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const card_amount_increment = style({
  color: "#38c425",
  fontWeight: "600",
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: "0.8rem",
  },
}
});

export const card_amount_decrement = style({
  color: "#FF0000",
  fontWeight: "600",
  
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },
});
