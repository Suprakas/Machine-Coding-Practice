import { useEffect, useRef, useState } from "react";
import {
  IoMdArrowDropdownCircle,
  IoMdArrowDropupCircle,
} from "react-icons/io";
import { TiTick } from "react-icons/ti";

export default function MultiSelectDropdown({ options }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [openDropDown, setOpenDropDown] = useState(false);

  const dropdownRef = useRef(null);

  const handleDropDown = () => {
    setOpenDropDown((prev) => !prev);
  };

  const handleSelectDropDown = (item) => {
    setSelectedItems((prev) => {
      if (prev.includes(item)) {
        return prev.filter((selectedItem) => selectedItem !== item);
      }

      return [...prev, item];
    });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
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
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown">
      <button
        className="dropdown-button"
        onClick={handleDropDown}
      >
        {selectedItems.length > 0
          ? selectedItems.join(", ")
          : "Select a fruit"}

        {openDropDown ? (
          <IoMdArrowDropupCircle />
        ) : (
          <IoMdArrowDropdownCircle />
        )}
      </button>

      {openDropDown && (
        <div className="dropdown-menu">
          {options.map((item) => {
            const isSelected = selectedItems.includes(item);

            return (
              <div
                key={item}
                className="dropdown-item"
                onClick={() => handleSelectDropDown(item)}
              >
                {item}
                {isSelected && <TiTick />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}