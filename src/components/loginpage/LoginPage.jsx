import React, { useState } from "react";
import "./LoginPage.css";
import handcar_logo from "../../assets/handcar_logo.svg";

const LoginPage = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [getUpdates, setGetUpdates] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loginPhone, setLoginPhone] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (user) => user.phone === loginPhone && user.password === loginPassword
    );

    if (user) {
      alert("Login successful!");
      onLoginSuccess(user);
      setLoginPhone("");
      setLoginPassword("");
    } else {
      alert("Invalid phone number or password!");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = existingUsers.some(
      (user) => user.email === email || user.phone === phone
    );

    if (userExists) {
      alert("User with this email or phone already exists!");
      return;
    }

    const newUser = {
      name,
      email,
      phone,
      password,
    };

    existingUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(existingUsers));

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");

    alert("User registered successfully!");
  };

  return (
    <div className="login-container">
      <div className="loginpage_logo">
        <img src={handcar_logo} alt="" srcSet="" />
      </div>
      <div className="tab-container">
        <button
          className={`tab ${isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          LOGIN
        </button>
        <button
          className={`tab ${!isLogin ? "active" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          SIGN UP
        </button>
      </div>

      {isLogin ? (
        <form className="login-form" onSubmit={handleLogin}>
          <div className="phone-input">
            <select name="" id="">
              <option value="">+971</option>
              <option value="">+968</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              value={loginPhone}
              onChange={(e) => setLoginPhone(e.target.value)}
              required
            />
          </div>

          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />

          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={rememberPassword}
              onChange={() => setRememberPassword(!rememberPassword)}
            />
            <p>Remember password?</p>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-button">
            Login with Password
          </button>

          <div className="or-divider">OR</div>

          <button type="button" className="otp-button">
            Login with OTP
          </button>

          <p className="terms-text">
            By clicking through, I agree with the
            <br />
            Terms & Conditions and Privacy Policy
          </p>
        </form>
      ) : (
        <form className="signup-form" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p>Phone</p>
          <div className="phone-input">
            <select name="" id="">
              <option value="">+971</option>
              <option value="">+968</option>
            </select>
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <input
            type="password"
            placeholder="Set a Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={getUpdates}
              onChange={() => setGetUpdates(!getUpdates)}
            />
            Get updates on Whatsapp
          </label>

          <button type="submit" className="signup-button">
            Sign Up
          </button>

          <p className="terms-text">
            By clicking through, I agree with the
            <br />
            Terms & Conditions and Privacy Policy
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginPage;