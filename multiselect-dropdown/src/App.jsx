import "./App.css";
import MultiSelectDropdown from "./components/MultiSelectDropDown";

function App() {
  const fruits = ["Apple", "Orange", "Mango", "Lemon", "Banana"];

  return (
    <>
      <h3>Multiselect Dropdown</h3>

      <MultiSelectDropdown options={fruits} />
    </>
  );
}

export default App;