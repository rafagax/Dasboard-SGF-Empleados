import React, { useContext } from 'react';
import "./LogingForm.css";
import { PasswordContext } from '../PasswordContext/PasswordContext';

function LogingForm() {
  const{setEmail, setPassword, email, password, handleLoginClick} = useContext(PasswordContext)
  return (
    <div>
      <main className="login-form">
        <form>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <button className="login-button" type="submit" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default LogingForm;

