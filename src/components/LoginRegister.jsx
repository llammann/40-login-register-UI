import React from "react";
import "../assets/style/LoginRegister.scss";
import { Button, Flex } from "antd";
import phone from "../assets/images/phone.png";
import circle from "../assets/images/circle.png";
import moon from "../assets/images/moon.png";

function LoginRegister() {
  return (
   <>
    <div className="blueSection">
      <div className="mainContainer">
        <div className="leftContainer">
          <p className="header">
            Social media shared today, tomorrow or by location
          </p>
          <div className="ellipsis">
            <div className="phones">
              <div className="twice">
                <img src={phone} alt="" />
                <img src={phone} alt="" />
              </div>
              <img src={phone} alt="" className="main" />
            </div>
          </div>
          <div className="buttons">
            <img src={circle} alt="" />
            <img src={moon} alt="" />
            <img src={circle} alt="" />
          </div>
        </div>
        <div className="rightContainer">
          <div className="header">
            <div className="logo"></div>
            <span>Capzul</span>
          </div>

          <h1>Create Account</h1>
          <p>For business, band or celebrity.</p>

          <div className="form">
            <div className="firstNameInp inp">
              <span>First Name</span>
              <input type="text" />
            </div>
            <div className="lastNameInp inp">
              <span>Last Name</span>
              <input type="text" />
            </div>
            <div className="emailPhoneInp inp">
              <span>Email or phone number</span>
              <input type="text" />
            </div>
            <div className="birthDayInp inp">
              <span>Date of birth (MM/DD/YY)</span>
              <input type="text" />
            </div>
            <div className="PasswordInp inp">
              <span>Password</span>
              <input type="text" />
            </div>
            <div className="confirmPasswordInp inp">
              <span>Confrim password</span>
              <input type="text" />
            </div>
          </div>

          <div className="rememberForgot">
            <div className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <a href="#">Forgot password?</a>
          </div>

          <div className="termsPrivacy">
            <input type="checkbox" />
            <p className="terms">
              I agree to all the <a href="#">Terms</a> and{" "}
              <a href="#">Privacy policy</a>{" "}
            </p>
          </div>

          <div className="createSign">
            <Button className="createAccount">Create account</Button>
            <Button className="signInGoogle">
              <div className="google"></div>
              <span>Sign-in with google</span>
            </Button>
          </div>

          <p className="donthaveAccount">
            Don’t have an account? <a href="#">Log In</a>
          </p>
          <div className="footer">
            <button className="googlePlay"></button>
            <button className="appStore"></button>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default LoginRegister;
