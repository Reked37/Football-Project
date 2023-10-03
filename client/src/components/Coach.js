import React from "react"


function Coach({passCoach}){
    const {name, coaching_position, team_name}=passCoach
    return (
        <div class='ui four wide column'>
            <div class='ui-card'>
                <h3 class='name'>{name}</h3>
                <h3 class='meta'>Coaching Position: {coaching_position}</h3>
                <h3 class='description'> Team: {team_name}</h3>
            </div>
        </div>
    )}





export default Coach