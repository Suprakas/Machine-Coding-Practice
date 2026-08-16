import { useState } from "react";

export default function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveTab = (index) => {
    if (index >= 0 && index < tabs.length) {
      setActiveIndex(index);
    }
  };

  return (
    <>
      {tabs.map((tab, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            className={isActive ? "active-tab" : ""}
            key={tab.id}
            onClick={() => handleActiveTab(index)}
          >
            {tab.name}
          </button>
        );
      })}
      <p>{tabs[activeIndex]?.info}</p>
    </>
  );
}
