import { style } from "@vanilla-extract/css";

export const container_card = style({
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gap: "1rem",
  placeContent: "center",
  placeItems: "center"
});


export const card = style({
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid #c3c4c7",
  boxShadow: "0px 2px 12px 0px #a2a2a3",
  borderRadius: "15px",
  padding: "10px",
  width: "90%",
  maxWidth: "1200px",
  alignItems: "center",
});

export const card_description = style({
  width: "250px",
  textAlign: "left"
})

export const card_optional = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export const button_close = style({
  border: "none",
  outline: "none",
  cursor: "pointer",
  color: "#FF0000",
  margin: "0 5px",
  backgroundColor: "#FFF", 
  fontWeight: "700",
  fontSize: "0.9rem",
  position: 'relative',
  top: "-20px",
  right: "1px"
})