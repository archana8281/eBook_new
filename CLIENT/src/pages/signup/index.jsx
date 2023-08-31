import React, { useState } from "react";
import Header from "../../components/Header/header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    fname: "",
    subject: "",
    email: "",
    password: "",
  });

  const getdata = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = async (e, data) => {
    e.preventDefault();
    const postData = await axios
      .post(`http://localhost/ebook/SERVER/user/register`, formData, data)
      .then(function (response) {
        navigate("/login");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
        alert(error.response.data);
      });
  };

  return (
    <div>
      <Header />
      <div className="login-form">
        <h3>Sign up and start learning</h3>
        <form action="" name="signupform" method="post">
          <label htmlFor="fname">Full name</label>
          <br />
          <input
            id="fname"
            type="text"
            name="fname"
            className="input1"
            autoComplete="username"
            onChange={getdata}
            required
          />
          <br />
          <label htmlFor="subject">Subject</label>
          <br />
          <input
            id="subject"
            type="text"
            name="subject"
            className="input1"
            autoComplete="subject"
            onChange={getdata}
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            name="email"
            className="input1"
            autoComplete="email"
            onChange={getdata}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            type="password"
            name="password"
            className="input1"
            onChange={getdata}
            required
          />
          <br />
          <button className="btn" onClick={submitData}>
            Sign up
          </button>
        </form>
        <hr style={{ width: "250px" }} />
        <span>
          Already have an account? <a href="/login">log in</a>
        </span>
      </div>
    </div>
  );
}

export default Signup;
