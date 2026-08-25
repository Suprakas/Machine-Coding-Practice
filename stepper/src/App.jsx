import "./App.css";
import Stepper from "./components/Stepper";

function App() {
  const steps = ["Personal Info", "Address", "Review"];

  return <>
    <Stepper steps={steps} />
  </>;
}

export default App;
