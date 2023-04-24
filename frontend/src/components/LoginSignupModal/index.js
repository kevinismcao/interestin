import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
import SignupForm from '../SignupFormModal/SignupForm';
import './index.css'
function LoginSignupModal() {
    const [showModal, setShowModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false)
    return (
        <>
            <button className="login-button" onClick={() => {setShowModal(true);setShowLoginModal(true)}}>Log in</button>
            <button className="signup-button" onClick={() => { setShowModal(true); setShowLoginModal(false) }}>Sign up</button>
            {showModal && showLoginModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                    <button
                        className="switch-form-button"
                        onClick={() => setShowLoginModal(false)}>
                        Not on interestIn yet? Sign up
                    </button>
                </Modal>
            )}

            {showModal && !showLoginModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h2 id='signup-text'>Find new ideas to try</h2>
                    <SignupForm />
                    <button
                        className="switch-form-button"
                        onClick={() => setShowLoginModal(true)}>
                        Already a memeber? Log in
                    </button>
                </Modal>
            )}
        </>
    );
}

export default LoginSignupModal;