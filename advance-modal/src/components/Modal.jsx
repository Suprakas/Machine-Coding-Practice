import { useEffect } from "react"

export default function Modal ({handleCloseModal}) {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if(e.key === "Escape"){
                handleCloseModal()
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [handleCloseModal])

    return (
         <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleCloseModal}>Close Modal</button>
            <p>I am Modal conatainer</p>
          </div>
        </div>
    )
}