import "./App.css";
import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
  const fruits = ["Apple", "Orange", "Banana", "Lemon", "Mango"];
  const [selectedItem, setSelectedItem] = useState("Select a Fruit");

  return (
    <>
      <h4>Advance Dropdown</h4>
      <DropDown
        options={fruits}
        selectedItem={selectedItem}
        onSelect={setSelectedItem}
      />
      <p>You selected: {selectedItem}</p>
    </>
  );
}

export default App;
