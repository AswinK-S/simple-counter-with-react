import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCounter] = useState(0)
  let increment = () => {
    setCounter(count + 1)
  }

  let decrement = () => {
    setCounter(count - 1)
  }

  let textColor = count % 5 === 0 ? 'red' : 'white';

  return (
    <div className='container'>
      <button className='button' onClick={decrement}>-</button>
      <span style={{color:textColor}}>counter : {count} </span>
      <button className='button' onClick={increment}>+</button>

    </div>
  )
}

export default App
