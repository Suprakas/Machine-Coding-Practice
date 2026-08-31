import "./App.css";
import Dropdown from "./components/DropDown";

function App() {
  const fruits = ["Apple", "Orange", "Banana", "Lemon", "Mango"];

  return (
    <>
      <h4>Basic Dropdown</h4>
      <Dropdown fruits={fruits} />
    </>
  );
}

export default App;
