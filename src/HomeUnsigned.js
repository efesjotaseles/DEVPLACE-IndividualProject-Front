import React, { useState } from "react";

export default function HomeUnsigned() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleLogin() {
    //TODO proper login
    alert(`User: ${email} \nPassword: ${password}`);
  }
  
  return (
    <>
      <div className="grid">
        <div></div>
        <div>
          <div>
          </div>
          <div>
            <form name="loginForm">
              <h3>Login</h3>
              <input
                type="email"
                placeholder="email"
                onChange={handleEmailChange}
              ></input>
              <input
                type="password"
                placeholder="password"
                onChange={handlePasswordChange}
              ></input>
              <button type="button" onClick={handleLogin}>
                Sign in
              </button>
            </form>
            <div>
              <button type="button" className="secondary">Sign up</button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
