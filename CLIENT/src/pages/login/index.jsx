import React, { useState } from "react";
import Header from "../../components/Header/header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const getdata = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const postData = await axios
      .post(`http://localhost/ebook/SERVER/user/login`, formData)
      .then(function (response) {
        localStorage.setItem("access_token", response.data.jwt);
        localStorage.setItem("expire_at", response.data.expireAt);
        const user = formData.email;
        navigate(`/view/${user}`);
        console.log(response.data.message);
      })
      .catch(function (error) {
        console.log(error.response.data);
        alert(error.response.data);
      });
  };

  return (
    <>
      <Header />
      <div className="login-form">
        <h3>Log in to your eBook account</h3>
        <form name="loginform" method="post">
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
          <button className="btn" onClick={handleClick}>
            log in
          </button>
        </form>
        <hr style={{ width: "250px" }} />
        <span>
          Don't have an account? <a href="/signup">Sign up</a>
        </span>
      </div>
    </>
  );
}

export default Login;
