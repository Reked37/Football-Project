import React, {useState, useEffect} from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import PlayersContainer from "./PlayersContainer";
import NavBar from "./NavBar";
import TeamsContainer from "./TeamsContainer";
import CoachesContainer from "./CoachesContainer";
import Add from "./Add"
import UpdatePlayer from "./UpdatePlayer";

function App() {
  const [players, setPlayers]=useState([])
  const [teams, setTeams]=useState([])
  const [coaches, setCoaches]=useState([])
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
  
  function handlePostPlayer(newPlayer){
    console.log(newPlayer)
    setPlayers([...players,newPlayer])
  }

  function handlePostCoach(newCoach){
    console.log(newCoach)
    setCoaches([...coaches, newCoach])
  }

  function handlePostTeam(newTeam){
    console.log(newTeam)
    setTeams([...teams, newTeam])
  }

  function handleDeletePlayer(deletePlayer){
    console.log(deletePlayer)
    const deletedPlayer=players.filter(player=>player.id !== deletePlayer.id)
    console.log(deletedPlayer)
    setPlayers(deletedPlayer)
  }

  function updatePlayer(playersId){
    console.log(playersId)
  }

  return(
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/players" element={<PlayersContainer players={players} />}></Route>
        <Route path="/coaches" element={<CoachesContainer coaches={coaches}/>}></Route>
        <Route path="/teams" element={<TeamsContainer teams={teams}/>}></Route>
        <Route path="/add" element={<Add 
        onPostPlayer={handlePostPlayer} 
        onPostTeam={handlePostTeam}
        onPostCoach={handlePostCoach}
        onDeletePlayer={handleDeletePlayer}/>}></Route>
        <Route path='/update' element={<UpdatePlayer navigatePlayer={updatePlayer} />}></Route>
      </Routes> 
    </div>
  );
}

export default App;
