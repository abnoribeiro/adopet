import React from "react";
import { ButtonInput } from './Button.styles'
interface Props {
  size?: "defalt" | "small"
  children: string | React.ReactNode,
}

const Button: React.FC<Props> = (
  {
    size="defalt",
    children
  }
)=>{
  return(
    <div>
      <ButtonInput sizeButton={size}>
        {children}
      </ButtonInput>
    </div>
  )
}

export default Button
