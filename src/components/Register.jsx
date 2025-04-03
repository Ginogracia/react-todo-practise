import '../Css/Register.css';
import React, { useState } from "react";

function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState(""); // State för felmeddelande

	const handleRegister = () => {
		if (!username || !password) {
			setErrorMessage("Användarnamn och lösenord är obligatoriska."); // Visa felmeddelande
		} else if (password.length < 1) {
			setErrorMessage("Lösenordet måste vara minst 6 tecken långt."); // Validera lösenord
		} else {
			// Skicka data till servern för att registrera användaren
			console.log(`Registrerad som: ${username}`);
			setErrorMessage(""); // Rensa eventuellt tidigare felmeddelande
		}
	};

	return (
		<div className="register-form">
			<h1>Registrering</h1>
			{/* Visa felmeddelanden */}
			{errorMessage && <p className="error-message">{errorMessage}</p>}
			<input
				className="anv"
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
			<button onClick={handleRegister}>Registrera</button>
		</div>
	);
}

export default Register;