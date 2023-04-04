import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import GamerData from "./components/GamerData/GamerData";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="container"></div>
      <Home exact path="/" element={Home} />
      <GamerData />
    </div>
  );
};

export default App;
