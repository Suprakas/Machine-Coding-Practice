import { useState, useRef, useEffect } from "react";
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io";

export default function DropDown({options, selectedItem, onSelect}) {
    
  const [openDropDown, setOpenDropDown] = useState(false);
 
  const dropdownRef = useRef(null);

  const handleOpen = () => {
    setOpenDropDown((prevState) => !prevState);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setOpenDropDown(false);
  };

  const handleClickOutside = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setOpenDropDown(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setOpenDropDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openDropDown]);
    return (
         <div ref={dropdownRef} className="dropdown">
        <button
          onClick={handleOpen}
          aria-expanded={openDropDown}
          className="dropdown-button"
        >
          {selectedItem}

          {openDropDown ? (
            <IoMdArrowDropupCircle />
          ) : (
            <IoMdArrowDropdownCircle />
          )}
        </button>
        {openDropDown && (
          <div className="dropdown-menu">
            {options.map((option) => {
              return (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="dropdown-item"
                >
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
    )
}