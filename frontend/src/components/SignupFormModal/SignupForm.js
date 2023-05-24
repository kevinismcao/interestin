import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./SignupForm.css";
import { IoIosWarning } from 'react-icons/io';

function SignupForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    let data;
                    try {
                        // .clone() essentially allows you to read the response body twice
                        data = await res.clone().json();
                    } catch {
                        data = await res.text(); // Will hit this case if the server is down
                    }
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="input-label" htmlFor="email-input">Email</label>
            <div className = "inputbox-container">
                <input className="inputbox"
                    type="text"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <label className="input-label" htmlFor="username-input">Username</label>
            <div className="inputbox-container">
                <input className="inputbox"
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <ul >
                {errors.map(error => <li className="modal-error-text" key={error}><IoIosWarning id="io-warning" />{error}</li>)}
            </ul>
            <label className="input-label" htmlFor="password">Password</label>
            <div className="inputbox-container">
                <input className="inputbox" id="password"
                    type="password"
                    value={password}
                    placeholder="Create a password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <label className="input-label" htmlFor="confirm-password">Confirm Password</label>
            <div className="inputbox-container">
                <input className="inputbox" id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
        
            <button className="modal-button" id="modal-button-login" type="submit">Sign up</button>
            <div className="warning-text">
                <p>This clone is for educational purposes only.</p>
                <p>Please do not put any sensitive information.</p>
            </div>
            <div className="divide-line"></div>
        </form>
    );
}

export default SignupForm;


// function LoginForm() {
//     const dispatch = useDispatch();
//     const [credential, setCredential] = useState("");
//     const [password, setPassword] = useState("");
//     const [errors, setErrors] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setErrors([]);
//         return dispatch(sessionActions.login({ credential, password }))
//             .catch(async (res) => {
//                 let data;
//                 try {
//                     // .clone() essentially allows you to read the response body twice
//                     data = await res.clone().json();
//                 } catch {
//                     data = await res.text(); // Will hit this case if the server is down
//                 }
//                 if (data?.errors) setErrors(data.errors);
//                 else if (data) setErrors([data]);
//                 else setErrors([res.statusText]);
//             });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <ul>
//                 {errors.map(error => <li key={error}>{error}</li>)}
//             </ul>
//             <label>
//                 Username or Email
//                 <input
//                     type="text"
//                     value={credential}
//                     onChange={(e) => setCredential(e.target.value)}
//                     required
//                 />
//             </label>
//             <label>
//                 Password
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//             </label>
//             <button type="submit">Log In</button>
//         </form>
//     );
// }

// export default LoginForm;