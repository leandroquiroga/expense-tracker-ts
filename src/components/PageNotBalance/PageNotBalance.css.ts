import { style } from '@vanilla-extract/css';

export const container_page = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  flexDirection: 'column',
  height: '50vh'
});

export const title_page = style({
  fontSize: '1.5rem',
  fontWeight: '400',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center'
});

export const logo_page = style({
  width: '100px',
  margin: '10px'
})

export const button_page = style({
  width: '250px',
  padding: '8px',
  borderRadius: '25px',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  backgroundColor: '#202020',
  color: '#FFF'
});