import { useState } from 'react'
import displayPicture from '../assets/display.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <img src={displayPicture} className="logo react" alt="Display" />
      </div>
      <h1>TravelTrucks</h1>
    </>
  )
}

export default App
