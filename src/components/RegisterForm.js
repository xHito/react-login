import React, { useState } from 'react';
import welcomeImg from "../welcome.gif";

function RegisterForm({ Register, error }) {
    const [details, setDetails] = useState({username: "", email: "", password: "", passwordConfirm: ""});

    const submitHandler = e => {
        e.preventDefault();

        Register(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="header">Register
                    <div className="content">
                        <div className="container">
                            <img src={welcomeImg} alt="welcomeImg" />
                        </div>
                    </div>
                </div>
                {/* ERROR! */}
                {(error !== "") ? ( <div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="username" id="name" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password_confirm" id="password_confirm" onChange={e => setDetails({...details, passwordConfirm: e.target.value})} value={details.passwordConfirm}/>
                </div>
                <input type="submit" value="SUBMIT" />
            </div>
        </form>
    )
}

export default RegisterForm;