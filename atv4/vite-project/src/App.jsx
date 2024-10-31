import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Timer from './components/timer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Timer</h1>
      <div className="card">
        <Timer />
      </div>
    </>
  )
}

export default App
