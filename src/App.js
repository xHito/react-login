import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


function App() {
  const adminUser = {
    email: "",
    password: ""
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    if(details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        name: details.name,
        email: details.email
      });
      console.log("Logged in successfully!")
    }else{
      setError("Login Failed")
    }
  }

  const Logout = () => {
    setUser({
      name: "",
      email: ""
    });
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;

