import { style } from "@vanilla-extract/css";

export const container = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#202020',
    padding: '10px',
  },
);

export const container_img = style({
  width: "38px",
  ":hover": {
    cursor: 'pointer'
  }
});

export const container_text_name = style({
  color: '#FFF'
})