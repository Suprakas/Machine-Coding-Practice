import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <h4>Advance modal</h4>

      {showModal ? (
       <Modal handleCloseModal={handleCloseModal}/>

      ) : (
        <button onClick={handleShowModal}>Show Modal</button>
      )}
    </>
  );
}

export default App;
