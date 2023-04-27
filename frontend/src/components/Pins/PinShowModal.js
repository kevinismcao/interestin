import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';




const ModalContext = React.createContext();

export function PinModalProvider({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, [])

    return (
        <>
            <ModalContext.Provider value={value}>
                {children}
            </ModalContext.Provider>
            <div ref={modalRef} />
        </>
    );
}

export function PinModal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="pin-modal">
            <div id="pin-modal-background" onClick={onClose} />
            <div id="pin-modal-content">
                <div id="pin-modal-window">
                    
                    
                    <div id="pin-modal-children">{children}</div>
                </div>
            </div>
        </div>,
        modalNode
    );
}