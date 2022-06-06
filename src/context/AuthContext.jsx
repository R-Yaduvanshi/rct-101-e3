import React, { createContext } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const state = useLocation();

  const login = () => {
    setIsAuth(true);
    if (!state.from) {
      navigate("/");
    } else {
      navigate(state.from, { replace: true });
    }
  };

  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
