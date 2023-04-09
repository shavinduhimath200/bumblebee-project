import React, { useState } from "react";
import backgroundImage from "../../src/Components/images/login.jpg";
import "./Login.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const initUser = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initUser);

  async function onSubmit(event) {
    try {
      event.preventDefault();
      const response = await axios.post(
        "http://localhost:8081/api/login",
        user
      );
      if (response.status === 200) {
        Cookies.set("auth-user", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      if (error.response.status === 403) {
        alert("Wrong email or password, Please try again");
        setUser({ ...user, password: "" });
      }
    }
  }

  return (
    <>
      <div className="main-wrapper">
        <img src={backgroundImage} className="background-image" />
        <form
          className="container outer-wrapper"
          method="POST"
          onSubmit={onSubmit}
        >
          <h1>Sign In to BUMBLEBEE</h1>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              name="email"
              required
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              name="password"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                name="rememberMe"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;