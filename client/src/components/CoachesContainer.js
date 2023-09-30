import React from "react"
import Coach from "./Coach"

function coachesContainer({coaches}){
    const displayCoaches=coaches.map(coach=>{
        return <Coach passCoach={coach} key={coach.id}/>    
    })

    return (
        <div>
            <h1 class='headers'>Coaches in the League</h1>
            <div class='ui grid container cards'>{displayCoaches}</div>
        </div>
    )}

export default coachesContainer