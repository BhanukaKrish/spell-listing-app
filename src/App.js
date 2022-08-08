import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Progress from "react-progress-2";
import "react-progress-2/main.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Favourite from "./pages/Favourite";
import NotFount from "./errorPage/404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      {/* Top header progress bar */}
      <Progress.Component />

      {/* Header component */}
      <Header />
      <Routes>
        {/* * Home page  */}
        <Route exact path="/" element={<Home />} />

        {/* * Favourite page  */}
        <Route exact path="/favourites" element={<Favourite />} />

        {/* Page not found */}
        <Route path="*" element={<NotFount />} />
      </Routes>

      {/* Toast message verification */}
      <ToastContainer />
    </div>
  );
}

export default App;
