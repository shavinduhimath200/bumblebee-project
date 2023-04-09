import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  
  const loadSignIn = () => {
    navigate("/login");
  };

  const loadSignup = () => {
    navigate("/register");
  };

  const { bagCount } = props;
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/all">
          <div>SHOPNOW</div>
        </Link>
      </div>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <div className="header-right">
        <Link to="/bag">
          <div>
            <BsBag />
          </div>
        </Link>
        <div>{bagCount !== 0 ? bagCount : null}</div>
        <div className="header-text">
          <div className="login_text" onClick={loadSignIn}>Login</div>
          <div className="Signup_text"  onClick={loadSignup}>SignUp</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
