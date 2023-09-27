import React from "react"
import Team from "./Team"

function TeamsContainer({teams}){
    console.log(teams)
    const displayTeams=teams.map(team=>{
        return <Team passTeam={team} key={team.id}/>    
    })

    return (
        <div>
            <h1>Teams in the League</h1>
            {displayTeams}
        </div>
    )}

export default TeamsContainer