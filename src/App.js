import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Hero from './components/Hero';
import fire from './fire';

const App = () => {
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const handleLogin = () => {
    fire.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        // eslint-disable-next-line default-case
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

  const handleRegister = e => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
    // const entryRef = fire.database().ref("Todo")
    // entryRef.on("value", (snapshot) => {
    // console.log(snapshot.val());
    // const entries = snapshot.val();
    // const entryList = []
    // for (let id in entries) {
    //   entryList.push(entries[id]);
    // }
    // console.log(entryList);
    // setEntryList(entryList);
  });

  //working
  // return (
  //   <div className="App">
  //     <div className="linkContainer">
  //       {hasAccount ? (
  //         <>
  //           <LoginForm Login={Login} hasAccount={hasAccount}
  //             setHasAccount={setHasAccount}
  //           />
  //           <p>Don't have an account?
  //           <span onClick={() => setHasAccount(!hasAccount)}> Register</span>
  //           </p>
  //         </>
  //       ) : (
  //           <>
  //             <RegisterForm Register={Register} hasAccount={hasAccount}
  //               setHasAccount={setHasAccount}
  //             />
  //             <p>Have an account?
  //             <span onClick={() => setHasAccount(!hasAccount)}> Log in</span>
  //             </p>
  //           </>
  //         )}
  //     </div>
  //   </div>
  // );

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout} user={user} />
      ) : (
          <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleRegister={handleRegister} hasAccount={hasAccount} setHasAccount={setHasAccount} emailErr={emailErr} passwordErr={passwordErr}
          />
        )}





    </div>

  );

};

export default App;

