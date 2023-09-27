import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import Players from "./Players";
import NavBar from "./NavBar";
import Teams from "./Teams";
import Coaches from "./Coaches";

function App() {

  return(
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/players" element={<Players />}></Route>
        <Route path="/coaches" element={<Coaches />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
      </Routes> 
    </div>
  );
}

export default App;
