import React, { useState } from 'react'
 


const lightTheme = {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '20px',
    textAlign: 'center',
    height: '100vh',
    transition: 'all 0.3s ease'
  };
  const darkTheme = {
    backgroundColor: '#333333',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
    height: '100vh',
    transition: 'all 0.3s ease'
  };

const ThemeChange = () => {
    const [isDarkMode,setIsDarkMode]=useState(false)

    const toggleTheme= ()=>{
        setIsDarkMode((prev)=>!prev);
    }

    const currentTheme=isDarkMode? darkTheme: lightTheme;
  return (
    <div style={currentTheme}>
  <h1>Theme Change</h1>
    <button onClick={toggleTheme}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</button>
      
    </div>
  )
}

export default ThemeChange
