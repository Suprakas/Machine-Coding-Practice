import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function Dropdown({
  label,
  menuName,
  items,
  isOpen,
  onToggle,
  onItemClick,
}) {
  return (
    <div className="dropdown">
      <button
        className="dropdown-button"
        onClick={() => onToggle(menuName)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}

        {isOpen ? (
          <IoIosArrowDropupCircle />
        ) : (
          <IoIosArrowDropdownCircle />
        )}
      </button>

      {isOpen && (
        <div className="dropdown-items">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.path}
              onClick={onItemClick}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}