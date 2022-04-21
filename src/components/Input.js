import React, { useState, useRef } from 'react';

const Input = () => {
  //TODO: Email input 밑에 vaildEmail이 false일 경우 에러 메세지

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputEmailRef = useRef();

  const onChangeEmail = (evt) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(evt.target.value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    setEmail(evt.target.value);
  };

  return (
    <div>
      <div className="input-container">
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
        <div className="email-errorMsg  ">Invalid e-mail address.</div>
      </div>
      <div className="input-container">
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
