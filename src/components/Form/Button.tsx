import { ButtonProps } from "../../interfaces"


export const Button = ({type, value, style, action}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={style}
      onClick={action}>
      {value}
    </button>
  )
}
