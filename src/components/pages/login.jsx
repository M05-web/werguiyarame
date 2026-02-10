import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import '../styles/login.css';

const Login = () => {

    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [error, setError] =useState("");

    const navigate =useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Connexion réussie");
            navigate("/dashboard");
        } catch(error) {
            setError("Email ou mot de passe incorrect");
        }
    }

    return (
        <div className="login-container">
            <form className="login-card" onSubmit={handleSubmit}>
                <h2>Connexion</h2>

                {error && <p className="error">{error}</p>}

                <input
                    type="email"
                    placeholder="Adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Se connecter</button>

                <p className="footer-text">
                    Pas de compte ? <span>Inscription</span>
                </p>
            </form>
        </div> 
    );
}

export default Login;