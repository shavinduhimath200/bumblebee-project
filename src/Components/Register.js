import backgroundImage from "../../src/Components/images/login.jpg";
import "./Register.css";
import axios from "axios";
import React, { useState } from "react";

function Register() {
  async function onSubmit(event) {
    try {
      event.preventDefault();

      // confirm password
      if (user.cPassword !== user.password) {
        alert("Passwords are not matched");
        return;
      }

      const data = user;
      const response = await axios.post("http://localhost:8081/api/user", data);
      console.log(response);
      if (response.status === 201 || response.status === 200) setUser(initUser);
    } catch (error) {
      console.error(error);
    }
  }

  const initUser = {
    fname: "",
    lname: "",
    password: "",
    cPassword: "",
    email: "",
    status: 1,
  };
  const [user, setUser] = useState(initUser);

  return (
    <>
      <div className="main-wrapper">
        <img src={backgroundImage} className="background-image" />
        <form
          onSubmit={onSubmit}
          className="container outer-wrapper"
          method="POST"
        >
          <h1>Sign Up to BUMBLEBEE</h1>
          <div className="mb-3">
            <label>Email Address</label>
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
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              name="cPassword"
              required
              value={user.cPassword}
              onChange={(e) => setUser({ ...user, cPassword: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              name="fname"
              required
              value={user.fname}
              onChange={(e) => setUser({ ...user, fname: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              name="lname"
              required
              value={user.lname}
              onChange={(e) => setUser({ ...user, lname: e.target.value })}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="Signup_btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Register;