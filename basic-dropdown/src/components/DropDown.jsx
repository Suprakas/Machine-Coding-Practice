import { useState } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

export default function Dropdown({ fruits }) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select a Fruit");

  const handleDropDown = () => {
    setOpenDropDown((prevState) => !prevState);
  };

  const handleSelectedItem = (fruit) => {
    setSelectedItem(fruit);
    setOpenDropDown(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleDropDown}>
        {selectedItem}
        {openDropDown ? <HiChevronUp /> : <HiChevronDown />}
      </button>

      {openDropDown && (
        <div className="dropdown-menu">
          {fruits.map((fruit) => {
            return (
              <div
                key={fruit}
                className="dropdown-item"
                onClick={() => handleSelectedItem(fruit)}
              >
                {fruit}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}