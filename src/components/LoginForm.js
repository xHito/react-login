import React, { useState } from 'react';
import welcomeImg from "../welcome.gif";

function LoginForm({ Login, error, setHasAccount, hasAccount }) {
    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="header">Log In
                    <div className="content">
                        <div className="container">
                            <img src={welcomeImg} alt="welcomeImg" />
                        </div>
                    </div>
                </div>
                {/* ERROR! */}
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <input type="submit" value="Sign in" />
            </div>
        </form>
    )
}

export default LoginForm;