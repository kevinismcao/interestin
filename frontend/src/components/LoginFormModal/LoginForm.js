import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

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
            
            <label className = "input-label" for="user-credential">Username or Email </label>
            <div className = "inputbox-container"><input id= "user-credential"
                type="text"
                value={credential}
                placeholder="Username or Email"
                onChange={(e) => setCredential(e.target.value)}
                required
            /></div>
            
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label className="input-label" for="password">Password</label>
            <div className="inputbox-container">
            <input id= "password"
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
            /></div>
        
            
            <button className="modal-button" type="submit">Log in</button>
            <h2 id="modal-or">OR</h2>
            <button className="modal-demo-button" onClick={()=>{setCredential("Demouser");setPassword("password")}}>Continue as Demo User</button>
        </form>
    );
}

export default LoginForm;