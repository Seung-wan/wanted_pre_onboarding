import React, { useState, useRef } from 'react';

const Input = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputEmailRef = useRef();

  const onChangeEmail = (evt) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(evt.target.value)) {
      setShowMessage(false);
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    setEmail(evt.target.value);
  };

  const onLeaveFocus = (evt) => {
    if (!inputEmailRef.current) return;
    if (
      !inputEmailRef.current.contains(evt.target) &&
      email.length > 0 &&
      !validEmail
    ) {
      setShowMessage(true);
    }
  };

  return (
    <div onClick={onLeaveFocus}>
      <div className="input">
        <label htmlFor="email">E-mail</label>
        <div className="inputIcon-container">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onChangeEmail}
            autoFocus
            placeholder="E-mail"
            ref={inputEmailRef}
          ></input>
          <i
            className={`fa-solid fa-circle-check ${
              validEmail ? 'checked' : ''
            }`}
          ></i>
        </div>
        <div className={showMessage ? 'email-errorMsg' : 'none'}>
          Invalid e-mail address.
        </div>
      </div>
      <div className="input">
        <label htmlFor="password">Password</label>
        <div className="inputIcon-container">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            placeholder="Password"
          />
          <i
            className={`fa-solid fa-eye-slash ${showPassword && 'checked'}`}
            onClick={() => setShowPassword((prev) => !prev)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Input;
