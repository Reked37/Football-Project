import React, {useState, useEffect} from "react"


function Players(){
    const [players, setPlayers]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5555/players')
        .then(res=>res.json())
        .then(data=>setPlayers(data),
    )},[])
    console.log(players)
    return (
        <div>
            <h1>Players</h1>
        </div>
    )}





export default Players