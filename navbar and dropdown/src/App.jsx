import { useState } from "react";
import "./App.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <h3>Navbar and Dropdown</h3>
      <nav className="navbar">
        <ul className="navbar-items">
          <li>Logo</li>
          <li>Home</li>
          <li>About</li>
          <li>
            <div className="dropdown">
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
                  <a href="/web">Web Development</a>
                  <a href="/mobile">Mobile Development</a>
                  <a href="/cloud">Cloud Services</a>
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
