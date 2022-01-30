import React, { useState, useEffect } from "react";
import { user } from './user'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        user.auth(username, password, ({ err }) => err && alert(err));
console.log(username)
        
    }

    function signup() {
        user.create(username, password, ({err}) => {
            if (err){
                alert(err);
            } else {
                login();
            }
        })
    }

        return (
            <div>
                <label for="username">Username</label>
                <input id="component-simple" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label for="password">Password</label>
                <input id="component-simple" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button class="login" onClick={login}>Login</button>
                <button class="signup" onClick={signup}>Signup</button>

            </div>
        );
}

export default Login;