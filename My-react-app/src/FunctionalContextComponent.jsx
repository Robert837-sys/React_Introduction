import React, { useContext } from 'react'
import { ThemeContext } from './App'

const FunctionalContextComponent = () => {
  const darkTheme = useContext(ThemeContext)

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
    textAlign: 'center',
    borderRadius: '8px',
    fontSize: '1.5rem',
  }

  return (
    <div style={themeStyles}>
      Function Theme
    </div>
  )
}

export default FunctionalContextComponent
