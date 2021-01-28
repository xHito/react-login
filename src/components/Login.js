import React from 'react';

const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleRegister, hasAccount, setHasAccount, emailErr, passwordErr } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label id="email">Email</label>
                <input type="text" id="emailInput" autoFocus required value={email} onChange={(e => setEmail(e.target.value))} />
                <p className="errorMsg">{emailErr}</p>
                <label id="password">Password</label>
                <input id="passwordInput" type="password" autoFocus required value={password} onChange={(e => setPassword(e.target.value))} />
                <p className="errorMsg">{passwordErr}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                            <>
                                <button onClick={handleRegister}>Register</button>
                                <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Log in</span></p>
                            </>

                        )}
                </div>
            </div>
        </section>
    )
}

export default Login;