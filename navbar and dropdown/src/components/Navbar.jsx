import { useEffect, useRef, useState } from "react";
import Dropdown from "./DropDown";

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

export default function Navbar() {
  const [dropdown, setDropdown] = useState(null);

  const navbarRef = useRef(null);

  const handleDropdown = (menu) => {
    setDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleItemClick = () => {
    setDropdown(null);
  };

  // Click outside
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

  // Escape key
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
    <nav className="navbar" ref={navbarRef}>
      <ul className="navbar-items">
        <li className="logo">Logo</li>

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

        <li>
          <Dropdown
            label="Services"
            menuName="services"
            items={serviceItems}
            isOpen={dropdown === "services"}
            onToggle={handleDropdown}
            onItemClick={handleItemClick}
          />
        </li>

        <li>
          <Dropdown
            label="Products"
            menuName="products"
            items={productItems}
            isOpen={dropdown === "products"}
            onToggle={handleDropdown}
            onItemClick={handleItemClick}
          />
        </li>
      </ul>
    </nav>
  );
}