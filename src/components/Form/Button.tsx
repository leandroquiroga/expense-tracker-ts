import { ButtonProps } from "../../interfaces"


export const Button = ({type, value, style}: ButtonProps): JSX.Element => {
  return (
    <button type={type} className={style}>
      {value}
    </button>
  )
}
