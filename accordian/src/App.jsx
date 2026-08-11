
import "./App.css";
import Accordian from "./components/Accordian";

function App() {
  const faqs = [
    {
      id: 1,
      question: "What is React ?",
      answer:
        "React is a Javascript library to build single page UI applications.",
    },
    {
      id: 2,
      question: "What is Javascript ?",
      answer: "It is a programming language.",
    },
    {
      id: 3,
      question: "What is Typescript ?",
      answer: "It's another programming language.",
    },
  ];
 
  return (
    <>
     <Accordian faqs={faqs}/>
    </>
  );
}

export default App;
