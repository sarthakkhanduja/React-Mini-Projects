import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { InputBar } from "./components/InputBar";
import { Card } from './components/Card';

function App() {

  return (
    <div className="main-div">
        <InputBar />
        <Card />
    </div>
  )
}

export default App
