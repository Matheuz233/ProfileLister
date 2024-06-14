import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
