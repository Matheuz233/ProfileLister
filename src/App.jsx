import { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Page404 from "./pages/Page404/Page404";

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
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
