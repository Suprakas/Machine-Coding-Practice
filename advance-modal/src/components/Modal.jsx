export default function Modal ({handleCloseModal}) {
    return (
         <div className="modal-overlay">
          <div className="modal">
            <button onClick={handleCloseModal}>Close Modal</button>
            <p>I am Modal conatainer</p>
          </div>
        </div>
    )
}