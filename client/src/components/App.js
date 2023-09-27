import React, { useEffect, useState } from "react";
import {BrowserRouter as Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  const [players, setPlayers]=useState([])
  const [coaches, setCoaches]=useState([])
  const [teams, setTeams]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5555/players')
    .then(res=>res.json())
    .then(data=>setPlayers(data),
  )},[])

  useEffect(()=>{
    fetch('http://localhost:5555/teams')
    .then(res=>res.json())
    .then(data=>setTeams(data),
  )},[])

  useEffect(()=>{
    fetch('http://localhost:5555/coaches')
    .then(res=>res.json())
    .then(data=>setCoaches(data),
  )},[])

  console.log('players:', players)
  console.log('teams:', teams)
  console.log('coaches:', coaches)

  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes> 
    </div>
  );
}

export default App;
