import { useEffect, useRef, useState } from "react";
import "./App.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

const navItems = [
  { id: 1, label: "Home", path: "/home" },
  { id: 2, label: "About", path: "/about" },
];

const serviceItems = [
  { id: 1, label: "Web Development", path: "/web" },
  { id: 2, label: "Mobile Development", path: "/mobile" },
  { id: 3, label: "Cloud Services", path: "/cloud" },
];

const productItems = [
  { id: 1, label: "Product A", path: "/product-a" },
  { id: 2, label: "Product B", path: "/product-b" },
  { id: 3, label: "Product C", path: "/product-c" },
];

function App() {
  const [dropdown, setDropdown] = useState(null);

  const navbarRef = useRef(null);

  const handleDropdown = (menu) => {
    setDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleItemClick = () => {
    setDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setDropdown(null);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Close dropdown when Escape is pressed
  useEffect(() => {
    if (!dropdown) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setDropdown(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [dropdown]);

  return (
    <>
      <h3>Navbar and Dropdown</h3>

      <nav className="navbar" ref={navbarRef}>
        <ul className="navbar-items">

          {/* Logo */}
          <li className="logo">Logo</li>

          {/* Normal Navbar Items */}
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="navbar-link"
              >
                {item.label}
              </a>
            </li>
          ))}

          {/* Services Dropdown */}
          <li>
            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={() => handleDropdown("services")}
                aria-expanded={dropdown === "services"}
                aria-haspopup="true"
              >
                Services

                {dropdown === "services" ? (
                  <IoIosArrowDropupCircle />
                ) : (
                  <IoIosArrowDropdownCircle />
                )}
              </button>

              {dropdown === "services" && (
                <div className="dropdown-items">
                  {serviceItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.path}
                      onClick={handleItemClick}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </li>

          {/* Products Dropdown */}
          <li>
            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={() => handleDropdown("products")}
                aria-expanded={dropdown === "products"}
                aria-haspopup="true"
              >
                Products

                {dropdown === "products" ? (
                  <IoIosArrowDropupCircle />
                ) : (
                  <IoIosArrowDropdownCircle />
                )}
              </button>

              {dropdown === "products" && (
                <div className="dropdown-items">
                  {productItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.path}
                      onClick={handleItemClick}
                    >
                      {item.label}
                    </a>
                  ))}
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