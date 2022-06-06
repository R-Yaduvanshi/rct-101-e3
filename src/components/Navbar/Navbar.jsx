import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isAuth) {
      logout();
    } else {
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link">Logo</Link>
      <span data-cy="navbar-cart-items-count">8</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLogin}>
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
