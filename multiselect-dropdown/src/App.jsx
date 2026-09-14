import { useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

import "./App.css";

function App() {
  const [selectDropdown, setSelectDropdown] = useState([]);
  const [openDropDown, setOpenDropDown] = useState(false);

  const Fruits = ["Apple", "Orange", "Mango", "Lemon", "Banana"];

  const handleDropDown = () => {
    setOpenDropDown((prev) => !prev);
   
  }

  const handleSelectDropDown = (fruit) => {
    setSelectDropdown(prev => {
      if(prev.includes(fruit)){
        return prev.filter(item => item !== fruit)
      }
      return [...prev, fruit];
    })
  }

  return (
    <>
      <p> Multiselect Dropdown</p>
      <button onClick={handleDropDown}>
     {
      selectDropdown.length > 0 ? selectDropdown.join(", ") : "Select a fruit" 
     }
        {openDropDown ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle /> }
      </button>
      {openDropDown && Fruits.map((fruit) => {
        return <div
        onClick={() => handleSelectDropDown(fruit)}
        >{fruit}</div>;
      })}
    </>
  );
}

export default App;
