import { useState } from 'react'
import './App.css'
import BackgroundChanger from './components/BackgroundChanger'
import { useCallback } from 'react';
import Heading from './components/Heading';


// This is the App.jsx for Background Changer

function App() {
  const [bgColor, setBgColor] = useState('cadetblue');
  const [fontColor, setFontColor] = useState('white');

  const handleFontColorChange = useCallback((color) => {
    setFontColor(color);
  }, [fontColor]);

  const handleColorChange = useCallback((color) => {
    setBgColor(color);
  }, [bgColor]);

  return (
    <div className="main-div" style={{backgroundColor: bgColor}}>
      <Heading fontColor={fontColor}/>
      <BackgroundChanger onColorChange={handleColorChange} onFontColorChange={handleFontColorChange}/>
    </div>
  )
}



export default App
