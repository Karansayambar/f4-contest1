
import React, { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPass, setIsValidPass] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    const isValid = /\S+@\S+\.\S+/.test(value);
    setIsValidEmail(isValid);
  };

  const handleChangePass = (e) => {
    const value = e.target.value;
    setPass(value);
    setIsValidPass(value.length >= 8);
  };

  const handleChangeConfirmPass = (e) => {
    const value = e.target.value;
    setConfirmPass(value);
    setIsValidPass(value === pass && value.length >= 8);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isValidEmail && isValidPass && pass === confirmPass){
      alert("Form submitted successfully!");
    }else{
      alert("Password does not match or invalid email!");
    }

  }

  return (
    <div className="App">
      <form className="container" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            className="input-focus"
            type="email"
            placeholder="Enter Email"
            onClick={handleClick}
            onChange={handleChangeEmail}
            style={{ borderColor: isValidEmail && isClicked ? 'green' : 'red' }}
            required
          />
          {
          !isValidEmail && isClicked && <p style={{ color: 'red' }}>Invalid Email Format</p>
          }
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onClick={handleClick}
            onChange={handleChangePass}
            style={{ borderColor: isValidPass && isClicked ? 'green' : 'red' }}
            required
          />
          {!isValidPass && <p style={{ color: 'red' }}>Password must be at least 8 characters</p>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={handleChangeConfirmPass}
            style={{ borderColor: isValidPass && isClicked && confirmPass === pass ? 'green' : 'red' }}
            required
          />
          {!isValidPass && <p style={{ color: 'red' }}>Password must be at least 8 characters</p>}
          {isValidPass && confirmPass !== pass && <p style={{ color: 'red' }}>Passwords do not match</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default App;
