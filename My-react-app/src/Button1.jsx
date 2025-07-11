import React from 'react'

const Button1 = () => {
  const handleClick=(e)=>e.target.textContent=("OUCH!");
  return (<button onClick={(e)=>handleClick(e)}>Click Me!</button>)
}

export default Button1
