import { useState } from 'react'
import './App.css'
import BackgroundChanger from './components/BackgroundChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-div">
      <BackgroundChanger />
    </div>
  )
}

export default App
