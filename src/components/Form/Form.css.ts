import { style } from '@vanilla-extract/css';

export const container_form = style({
  alignContent: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "0 auto",
  maxWidth: "660px",
  padding: "10px",
  width: "90%",
});


export const container_button = style({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '3px 30px',
  padding: '5px',
});

export const button_styles = style({
  border: 'none',
  borderRadius: '10px',
  backgroundColor: '#202020',
  padding: '8px',
  cursor: 'pointer',
  width: '125px',
  color: '#FFF',
});

export const container_input = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '10px auto',
  width: '90%'
});

export const input_styles = style({
  border: "0px",
  borderBottom: "1px solid #202020",
  margin: "5px auto",
  width: "100%",

  ":focus": {
    outline: "none",
  },
  ":out-of-range": {
    borderBottom: "1px solid #FF0000",
  },
  ":invalid": {
    borderBottom: "1px solid #FF0000",
  },
});

export const label_styles = style({
  textAlign: 'left'
});

export const container_select = style({
  display: "flex",
  flexDirection: "column",
  margin: "10px auto",
  width: "90%",
});

export const select_styles = style({
  backgroundColor: "#FFF",
  border: "0px",
  borderBottom: "1px solid #202020",
  margin: "0 auto",
  maxWidth: "660px",
  padding: "4px",
  width: "100%",

  ":focus": {
    outline: "none",
  },
  ":invalid": {
    borderBottom: "1px solid #FF0000",
  },
});

export const error_message = style({
  color: '#FF0000',
  fontWeight: '400',
})