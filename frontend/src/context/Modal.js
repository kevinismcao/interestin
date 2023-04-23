import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { MdClose } from 'react-icons/md'
import logo from '../assets/image/logo2.png';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
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

export function Modal({ onClose, children }) {
    const modalNode = useContext(ModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content">
                <div id="modal-window">
                    <div id="m-close-button" onClick={onClose}><MdClose id="close-icon"/></div>
                    <div className="logo-container">
                        <img className="mlogo" src={logo} />
                    </div>
                    <div className="header-container">
                        <h1 id="welcome-text">Welcome to interestIn</h1>
                    </div>
                    <div id="modal-children">{children}</div>
                </div>
            </div>
        </div>,
        modalNode
    );
}