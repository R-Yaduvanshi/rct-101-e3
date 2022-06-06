import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [logincreds, setLoginCreds] = useState({});
  const { login } = useContext(AuthContext);
  const { pathname } = useLocation();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...logincreds,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    login();
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={handleOnChange}
          data-cy="login-email"
          placeholder="Enter Your Mail"
        />
        <input
          onChange={handleOnChange}
          data-cy="login-password"
          placeholder="enter your password"
        />
        <button data-cy="login-submit">login</button>
      </form>
    </div>
  );
};

export default Login;
