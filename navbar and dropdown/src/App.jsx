import { useState, useRef, useEffect } from "react";
import "./App.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {

    if(!isOpen) return;
    
    const handleKeyEscape = (e) => {
      if (e.key === "Escape"){
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyEscape);
    return () => {
      window.removeEventListener("keydown", handleKeyEscape);
    }
  }, [isOpen]);

  return (
    <>
      <h3>Navbar and Dropdown</h3>
      <nav className="navbar">
        <ul className="navbar-items">
          <li>Logo</li>
          <li>Home</li>
          <li>About</li>
          <li>
            <div className="dropdown" ref={dropdownRef}>
              <button
                className="dropdown-button"
                onClick={handleOpen}
                aria-expanded={isOpen}
              >
                Services
                {isOpen ? (
                  <IoIosArrowDropupCircle />
                ) : (
                  <IoIosArrowDropdownCircle />
                )}
              </button>
              {isOpen && (
                <div className="dropdown-items">
                  <a href="/web" onClick={handleItemClick}>Web Development</a>
                  <a href="/mobile" onClick={handleItemClick}>Mobile Development</a>
                  <a href="/cloud" onClick={handleItemClick}>Cloud Services</a>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
