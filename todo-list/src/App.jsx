import { useEffect, useState } from "react";
import Todos from "./components/Todos";

import "./App.css";

function App() {
  const [todosData, setTodosData] = useState(null);

const apiCall = async () => {
  try {
    const data = await fetch("https://dummyjson.com/todos");
    const res =  await data.json();
    setTodosData(res);

  } catch (error) {
    console.log("api call failed", error);
  }
}

useEffect(() => {
  apiCall();
  console.log(todosData);
}, [])


  return <>
  {
    todosData?.todos?.map((todo) =>
    {
      return (
        <Todos key={todo.id} todos={todo}/>
      )
    })
  }
   
  </>;
}

export default App;
