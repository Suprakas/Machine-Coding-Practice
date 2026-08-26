import { useState } from "react";

import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  console.log("Modal toggle is : ", openModal);

  return (
    <>
      <h2>Basic Modal</h2>

      {openModal ? (
        <Modal handleCloseModal={handleCloseModal} />
      ) : (
        <button onClick={handleOpenModal}>Show Modal</button>
      )}
    </>
  );
}

export default App;
