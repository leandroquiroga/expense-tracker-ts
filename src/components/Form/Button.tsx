import { ButtonProps } from "../../interfaces"


export const Button = ({type, value}: ButtonProps): JSX.Element => {
  return (
    <button type={type}>
      {value}
    </button>
  )
}
