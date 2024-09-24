import React, { useState } from "react";
import "../loginpage/LoginPage.css";
import handcar_logo from "../../assets/handcar_logo.svg";
import captcha_img from "../../assets/captcha_img.png";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [rememberPassword, setRememberPassword] = useState(false);
  const [getUpdates, setGetUpdates] = useState(true);

  return (
    <div className="login-container">
      {/* <div className="loginpage_logo">
        <img src={handcar_logo} alt="" srcSet="" />
      </div> */}
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
        <form className="login-form">
          <div className="phone-input">
            <select name="" id="">
              <option value="">+971</option>
              <option value="">+968</option>
            </select>
            <input type="tel" placeholder="Phone" />
          </div>

          <input type="password" placeholder="Password" />

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
              />
              Remember password?
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={getUpdates}
              onChange={() => setGetUpdates(!getUpdates)}
            />
            Get updates on Calls/Whatsapp
          </label>

          <div className="human_verification">

            <div className="verification_box">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">i'm not a robot</label>
            </div>

            <div className="captcha_img">
              <img src={captcha_img} alt="" srcset="" />
            </div>

          </div>

          <button className="login-button">Login with Password</button>

          <div className="or-divider">OR</div>

          <button className="otp-button">Login with OTP</button>

          <p className="terms-text">
            By clicking through, I agree with the
            <br />
            Terms & Conditions and Privacy Policy
          </p>
        </form>
      ) : (
        <form className="signup-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Set a Password" />

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={getUpdates}
              onChange={() => setGetUpdates(!getUpdates)}
            />
            Get updates on Whatsapp
          </label>

          <div className="human_verification">

            <div className="verification_box">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">i'm not a robot</label>
            </div>

            <div className="captcha_img">
              <img src={captcha_img} alt="" srcset="" />
            </div>

          </div>


          <button className="signup-button">Sign Up</button>

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
