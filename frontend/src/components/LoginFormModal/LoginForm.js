import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import { NavLink } from "react-router-dom";
import { IoIosWarning } from 'react-icons/io';


function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
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
    };

    return (
        <form onSubmit={handleSubmit}>
            
            <label className = "input-label" htmlFor="user-credential">Username or Email </label>
            <div className = "inputbox-container">
                <input className ="inputbox" id= "user-credential"
                type="text"
                value={credential}
                placeholder="Username or Email"
                onChange={(e) => setCredential(e.target.value)}
                required
                />
            </div>
            <ul >
                {errors.map(error => <li className="modal-error-text" key={error}><IoIosWarning id="io-warning"/>{error}</li>)}
            </ul>
            <label className="input-label" htmlFor="password">Password</label>
            <div className="inputbox-container">
                <input className="inputbox" id= "password"
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
        
            
            <button className="modal-button" id="modal-button-login" type="submit">Log in</button>
            <h2 id="modal-or">OR</h2>
            <button className="modal-button" id="modal-button-demo" onClick={()=>{setCredential("DemoUser");setPassword("password")}}>Continue as Demo User</button>
            <div className="warning-text">
                <p>This clone is for educational purposes only.</p>
                <p>Please do not put any sensitive information.</p>
            </div>
            <div className="divide-line"></div>
        </form>
    );
}

export default LoginForm;
