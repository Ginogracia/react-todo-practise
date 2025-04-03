import '../CSS/Login.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username && password) {
            console.log(`Inloggad som: ${username}`);
            // Lägg till autentisering här om det behövs
            navigate("/Todo"); // Navigera till Todo-sidan
        } else {
            console.log("Vänligen fyll i användarnamn och lösenord.");
        }
    };


  

    return (
        <div className="inlogg" >
            <h1>Inloggning</h1>
            <input className="input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Användarnamn"
                
            />
            <input className="passw"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Lösenord"
            />
            <button onClick={handleLogin}>Logga in</button>
            
            <p className="register-text">
                Har du inget konto?{" "}
                <span
                    className="register-link"
                    onClick={() => navigate("/Register")} // Navigerar till Register.jsx
                >
                    Registrera dig här
                </span>
            </p>
        </div>
    );
}



export default Login