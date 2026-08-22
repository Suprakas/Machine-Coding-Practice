import { useReducer, useState } from 'react'

import './App.css'

function App() {
 
  const initialState = {count : 0}

  const reducer = (state, action) => {
    switch(action.type) {
      case "Increment" : 
      return { count : state.count + 1 };
      case "Decrement" : 
      return {count : state.count - 1 };
      case "Increment by 100" : return {count : state.count + 1 };
      case "Set" :
        return {count : action.payload};
      case "Reset" : 
      return { count : 0 };
      default : 
      return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);
  

  return (
    <>
     <h1>useReducer Hook</h1>
     <p>Count is : {state.count}</p>
     <button onClick={() => dispatch({type : "Increment"})}>Increment</button>
     <button onClick={() => dispatch({type: "Decrement"})}>Decrement</button>
     <button onClick={() => dispatch({type: "Reset"})}>Reset</button>
     <button onClick={() => dispatch({type: "Set", payload:100})}>Set to 100</button>

     <p>Count is : {state2.count}</p>
     <button onClick={() => dispatch2({type : "Increment"})}>Increment</button>
     <button onClick={() => dispatch2({type: "Decrement"})}>Decrement</button>
     <button onClick={() => dispatch2({type: "Reset"})}>Reset</button>
     <button onClick={() => dispatch2({type: "Set", payload:100})}>Set to 100</button>
    </>
  )
}

export default App
