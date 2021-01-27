import React, { useState, useEffect } from 'react';
import Login from './components/LoginForm';
import LoginForm from './components/LoginForm';
import Register from './components/RegisterForm';
import RegisterForm from './components/RegisterForm';
import fire from './fire';

const App = () => {
  const [user, setUser] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
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
    </div>
  );

};

export default App;

