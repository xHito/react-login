import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const testUser = {
    email: "test@test.com"
  }

  const [user, setUser] = useState({username: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    if(details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        username: details.username,
        email: details.email
      });
      console.log("Logged in successfully!")
    }else{
      setError("Login Failed")
    }
  }

  const Register = details => {
    if(details.email === testUser.email || details.email === adminUser.email) {
      setError("Registration failed, account already exists!")
      console.log("Register Failed, Account already exists!")
    }else if(details.password !== details.passwordConfirm) {
      setError("Registration failed, passwords do not match!")
    }else{
      setUser({
        username: details.username
      });
    }
  }

  const Logout = () => {
    setUser({
      username: "",
    });
  }


  return (
    <div className="App">
      {(user.username !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        /*<LoginForm Login={Login} error={error} /> */
        <RegisterForm Register={Register} error={error} /> 
      )}
    </div>
  );
}

export default App;

