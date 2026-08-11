import { useState } from "react";

export default function Accordian({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordianClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={faq.id}>
            <button
              className="accordion-button"
              onClick={() => handleAccordianClick(index)}
              aria-expanded={isOpen}
            >
              {faq.question}
              <span>{isOpen ? "-" : "+"}</span>
            </button>

            {isOpen && <p>{faq.answer}</p>}
          </div>
        );
      })}
    </>
  );
}
