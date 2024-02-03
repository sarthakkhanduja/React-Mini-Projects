import { useState } from 'react'
import './App.css'
import { useCallback } from 'react';
import { InputBar } from "./components/InputBar";
import { Card } from './components/Card';

function App() {
  const [data, setData] = useState({})

  const fetchGithubData = (username) => {
    const URL = `https://api.github.com/users/${username}`;
    // console.log(URL);
    fetch(URL)
    .then(async (res) => {
      const json = await res.json();
      setData(json);
    })
    .catch((error) => {
      console.log("Error fetching Data!!")
      console.log(error);
    })
  }

  return (
    <div className="main-div">
        <InputBar data={data} setData={setData} fetchGithubData={fetchGithubData}/>
        <Card data={data} setData={setData} fetchGithubData={fetchGithubData}/>
    </div>
  )
}

export default App
