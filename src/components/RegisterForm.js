import React, { useState } from 'react';
import welcomeImg from "../welcome.gif";
import fire from '../fire';

function RegisterForm({ Register, error, hasAccount, setHasAccount }) {
    const [details, setDetails] = useState({ email: "", password: "" });
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const handleRegister = e => {
        fire
            .auth()
            .createUserWithEmailAndPassword(details.email, details.password)
            .catch(err => {
                // eslint-disable-next-line default-case
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailErr(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordErr(err.message);
                        break;
                }
            });
    };

    return (
        <form onSubmit={handleRegister}>
            <div className="form-inner">
                <div className="header">Register
                    <div className="content">
                        <div className="container">
                            <img src={welcomeImg} alt="welcomeImg" />
                        </div>
                    </div>
                </div>
                {/* ERROR! */}
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Username:</label>
                    <input type="text" name="username" id="username" onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} pattern=".{4,}" required title="4 character minimum" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} pattern=".{8,}" required title="8 character minimum" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" name="password_confirm" id="password_confirm" onChange={e => setDetails({ ...details, passwordConfirm: e.target.value })} value={details.passwordConfirm} pattern=".{8,}" required title="8 character minimum" />
                </div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default RegisterForm;