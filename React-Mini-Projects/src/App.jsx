import { useState } from 'react'
import './App.css'
import BackgroundChanger from './components/BackgroundChanger'
import { useCallback } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('cadetblue');

  const handleColorChange = useCallback((color) => {
    setBgColor(color);
  }, [bgColor]);

  const buttons = [{
      label: "Red",
      backgroundColor: "Red",
      color: "White"
  }, {
      label: "Green",
      backgroundColor: "Green",
      color: "White"
  }, {
      label: "Yellow",
      backgroundColor: "Yellow",
      color: "Black"
  }, {
      label: "Black",
      backgroundColor: "Black",
      color: "White"
  }, {
      label: "Purple",
      backgroundColor: "Purple",
      color: "White"
  }, {
      label: "Blue",
      backgroundColor: "Blue",
      color: "white"
  }, {
      label: "Default",
      backgroundColor: "Beige",
      color: "Black"
  }]

  return (
    <div className="main-div" style={{backgroundColor: bgColor}}>
      {buttons.map((button) => {
        return(<Button label={button.label} backgroundColor={button.backgroundColor} color={button.color} onColorChange={() => {
          handleColorChange(button.backgroundColor);
        }}/>)                
      })}
    </div>
  )
}

function Button({label, backgroundColor, color, onColorChange}) {
  return(
      <button className="btn" style={{backgroundColor: backgroundColor, color: color}} onClick={onColorChange}>{label}</button>
  )
}

export default App
