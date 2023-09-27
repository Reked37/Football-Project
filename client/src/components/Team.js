import React from "react"


function Team({passTeam}){
    console.log(passTeam)
    const {name, mascot}=passTeam
    return (
        <div>
            <h3>Team Name: {name}</h3>
            <h3>Mascot: {mascot}</h3>
        </div>
    )}





export default Team