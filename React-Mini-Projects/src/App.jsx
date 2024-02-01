import { useState } from 'react'
import './App.css'
import BackgroundChanger from './components/BackgroundChanger'
import { useCallback } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('cadetblue');

  const handleColorChange = useCallback((color) => {
    setBgColor(color);
  }, [bgColor]);

  return (
    <div className="main-div" style={{backgroundColor: bgColor}}>
      <BackgroundChanger onColorChange = {handleColorChange}/>
    </div>
  )
}

export default App
