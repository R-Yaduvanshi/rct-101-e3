import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import RequiredAuth from "./hoc/RequiredAuth";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
