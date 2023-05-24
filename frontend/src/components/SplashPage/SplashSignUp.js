import SignupForm from "../SignupFormModal/SignupForm"
import logo from "../../assets/image/logo3.png"

const SplashSignUp = (props)=> {


    return (
        <div className="sign-up-content">
            <div className="sign-up-window">
                <div className="logo-container">
                <img className="mlogo" src={logo} />
                </div>
                <div className="header-container">
                    <h1 id="welcome-text">Welcome to interestIn</h1>
                </div>
                <div id="modal-children">
                    <h2 id='signup-text'>Find new ideas to try</h2>
                    <SignupForm />
                </div>
           
            </div>
           
        </div>
       
    )
}

export default SplashSignUp