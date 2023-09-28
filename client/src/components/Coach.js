import React from "react"


function Coach({passCoach}){
    const {name, coaching_position, team_name}=passCoach
    return (
        <div>
            <h3>Coach's Name: {name}</h3>
            <h3>Coaching Position: {coaching_position}</h3>
            <h3> Team: {team_name}</h3>
        </div>
    )}





export default Coach