import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [Value, setValue] = useState("Log In");
  var currentLocation = location.pathname;

  useEffect(() => {
    if (currentLocation.includes(`/view`)) {
      setValue("Log Out");
    } else {
      setValue("Log In");
    }
  }, [currentLocation]);

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expire_at");
  };

  const handleClick = () => {
    if (Value === "Log In") {
      navigate("/login");
    } else {
      logout();
      navigate("/");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <a href="/" style={{ textDecoration: "none" }}>
            <img
              src="/images/logo.png"
              alt="loading"
              style={{ height: "50px" }}
            />
            <span className="icon-head">eBook</span>
          </a>
          <input
            type="search"
            name="search"
            id=""
            placeholder=" &#128269;  Search for anything"
          />
          <button onClick={handleClick}>{Value}</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
