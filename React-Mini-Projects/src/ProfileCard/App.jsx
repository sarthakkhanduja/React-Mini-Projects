import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { ProfileCard } from './components/ProfileCard';


function App() {

  return (
    <div className="main-div">
        <ProfileCard />
    </div>
  )
}

export default App
