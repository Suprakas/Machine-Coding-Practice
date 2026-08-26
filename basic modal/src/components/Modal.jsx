export default function Modal({ handleCloseModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h4>My Modal component</h4>
        <p>This is my Modal content.</p>

        <button onClick={handleCloseModal}>Close Modal</button>
      </div>
    </div>
  );
}
