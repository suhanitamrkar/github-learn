import React from 'react'

interface ButtonProps {
    label: string;
    onClick:() => void;
    color?: string;
}
interface InputProps {
  value : string;
  onChange:(newValue:string)=> void
}

 const Button: React.FC<ButtonProps> = ({label , onClick}) => {
  return <button onClick={onClick}>{label} </button>
}
export default Button
