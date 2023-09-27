import React from "react"


function Coaches({passCoach}){
    console.log(passCoach)
    const {name, coaching_position}=passCoach
    return (
        <div>
            <h3>Coach's Name: {name}</h3>
            <h3>Coaching Position: {coaching_position}</h3>
        </div>
    )}





export default Coaches