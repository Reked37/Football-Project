import React from "react"
import Coach from "./Coach"

function CoachesContainer({coaches}){
    console.log(coaches)
    const displayCoaches=coaches.map(coach=>{
        return <Coach passCoach={coach} key={coach.id}/>    
    })

    return (
        <div>
            <h1>Coaches in the League</h1>
            {displayCoaches}
        </div>
    )}

export default CoachesContainer