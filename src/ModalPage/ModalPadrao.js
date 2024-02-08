import React, { Children } from "react";
import "./ModalPadrao.css";

function ModalPadrao({ isOpen, setModalOpen, children }) {
    const handleBackgroundClick = (event) => {
        // Verifica se o clique ocorreu na própria div de fundo (background-modal)
        if (event.target.classList.contains("background-modal")) {
            setModalOpen(false); // Fecha o modal
        }
    };

    if (isOpen) {
        return (
            <div className="background-modal" onClick={handleBackgroundClick}>
                <div className="modal-container">{children}</div>
            </div>
        );
    }

    return null;
}

export default ModalPadrao;
