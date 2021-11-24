import { useNavigate } from "react-router";
import React from "react";
import './Login.css';

export default function Login({ authed,  setAuthed }) {
    const navigate = useNavigate();


    function onLogin() {
        setAuthed(true);
        navigate('/profile');
    }

    return (
        <div className="login-wrapper">
            <h1>
                Login page
            </h1>
            <form onSubmit>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password"/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

        </div>

    ) }

