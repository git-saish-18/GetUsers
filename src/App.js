import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import User from "./component/User";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./component/About"
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route
            exact
            path="/"
            element={<User/>}
          />
          <Route
            exact
            path="/home"
            element={<User/>}
          />
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
