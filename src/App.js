import React, { useState, useEffect } from 'react';
import Login from './components/LoginForm';
import LoginForm from './components/LoginForm';
import Register from './components/RegisterForm';
import RegisterForm from './components/RegisterForm';
import Hero from './components/Hero';
import fire from './fire';

const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  }

  const clearErrors = () => {
    setEmailErr("");
    setPasswordErr("");
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailErr(err.message);
            break;
          case "auth/wrong-password":
            setPasswordErr(err.message);
            break;
        }
      });
  };

  const handleRegister = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
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

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, [])

  return (
    <div className="App">
      <div className="linkContainer">
        {hasAccount ? (
          <>
            <LoginForm Login={Login} hasAccount={hasAccount}
              setHasAccount={setHasAccount}
            />
            <p>Don't have an account?
            <span onClick={() => setHasAccount(!hasAccount)}> Register</span>
            </p>
          </>
        ) : (
            <>
              <RegisterForm Register={Register} hasAccount={hasAccount}
                setHasAccount={setHasAccount}
              />
              <p>Have an account?
              <span onClick={() => setHasAccount(!hasAccount)}> Log in</span>
              </p>
            </>
          )}
      </div>
      <Hero handleLogout={handleLogout} />
    </div>
  );

};

export default App;

