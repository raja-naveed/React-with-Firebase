import { useState } from 'react'
import './App.css'
import ReactContact from './components/ReactContact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-white bg-black">
        <ReactContact />
        </div>
    </>
  )
}

export default App
