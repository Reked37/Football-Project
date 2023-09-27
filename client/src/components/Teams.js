import React, {useState, useEffect} from "react"


function Teams(){
    const [teams, setTeams]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5555/teams')
        .then(res=>res.json())
        .then(data=>setTeams(data),
      )},[])
    console.log(teams)
    return (
        <div>
            <h1>Teams</h1>
        </div>
    )}





export default Teams