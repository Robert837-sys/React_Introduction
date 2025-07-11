import React from 'react'
import { useContext } from 'react'

const ThemeButton = () => {
  const theme=useContext('light')
  return (
    <div>
      <button style={{background: theme === 'dark' ? '#333' : '#FFF'}}>Themed Button</button>;
    </div>
  )
}

export default ThemeButton
