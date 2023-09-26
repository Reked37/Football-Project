import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [players, setPlayer]=[]

  useEffect(()=>{
    fetch('http://localhost:5555/players')
  })


  return <h1>Project Client</h1>;
}

export default App;
