
import { useState } from 'react'
import './App.css'

function App() {
 
const [count, setCount] = useState(0);

const increase = (step) => {
  if(count + step <= 10){

    setCount((prev) => prev + step);
  }
}
const decrease = () => {
  setCount((prev) => prev - 1);
}

const handleReset = () => {
  setCount(0);
}

  return (
  <>
    <h2>Count : {count}</h2>
    <button onClick={() => increase(1)} disabled={count === 10}>Increment</button>
    <button onClick={() => increase(5)} disabled={count === 10}>Increase By Value </button>
    <button onClick={decrease} disabled={count === 0}>Decrement</button>
    <button onClick={handleReset} disabled={count === 0}>Reset</button>
  </>
  )
}

export default App
