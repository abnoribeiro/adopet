import React from "react";
import { ButtonInput } from './Button.styles'
interface Props {
  size?: "defalt" | "small"
  onClick?: ()=>void;
  children: string | React.ReactNode,
}

const Button: React.FC<Props> = (
  {
    size="defalt",
    onClick,
    children
  }
)=>{
  return(
    <div>
      <ButtonInput sizeButton={size}
        onClick={onClick}
      >
        {children}
      </ButtonInput>
    </div>
  )
}

export default Button
