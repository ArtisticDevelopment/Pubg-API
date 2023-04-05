import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar className="app_nav" />
      <div className="container"></div>
      <Home exact path="/" element={Home} />
    </div>
  );
};

export default App;
