import { useState } from "react";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";

import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [selectDropdown, setSelectDropdown] = useState([]);
  const [openDropDown, setOpenDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const Fruits = ["Apple", "Orange", "Mango", "Lemon", "Banana"];

  const handleDropDown = () => {
    setOpenDropDown((prev) => !prev);
  };

  const handleSelectDropDown = (fruit) => {
    setSelectDropdown((prev) => {
      if (prev.includes(fruit)) {
        return prev.filter((item) => item !== fruit);
      }
      return [...prev, fruit];
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropDown(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenDropDown(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("Keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown">
      <p> Multiselect Dropdown</p>

      <button className="dropdown-button" onClick={handleDropDown}>
        {selectDropdown.length > 0
          ? selectDropdown.join(", ")
          : "Select a fruit"}
        {openDropDown ? <IoMdArrowDropupCircle /> : <IoMdArrowDropdownCircle />}
      </button>

      {openDropDown && (
        <div className="dropdown-menu">
          {Fruits.map((fruit) => {
            const isSelected = selectDropdown.includes(fruit);

            return (
              <div
                key={fruit}
                className="dropdown-item"
                onClick={() => handleSelectDropDown(fruit)}
              >
                {fruit}
                {isSelected ? <TiTick /> : " "}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
