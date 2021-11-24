import { BrowserRouter as Router, Routes, Route,  Link, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import './App.css';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';




export default function App() {

    const [authed, setAuthed] = useState(false);

    return (
        <main>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">
                               Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/friends">
                                Friends
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/profile" element={
                        <CheckForAuth authed={authed}>
                            <Profile />
                            <h1>Hello!</h1>
                        </CheckForAuth>
                    } />
                    <Route path="/home" element={<Home />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/login" element={<Login authed={authed} setAuthed={setAuthed} />} />
                    <Route path="*" element={<Profile />} />
                </Routes>
            </Router>
        </main>
    )
}
function CheckForAuth({ authed, children }) {
    return authed ?
        children :
        <Navigate to="/login" replace />
}

