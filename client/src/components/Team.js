import React from "react"


function Team({passTeam}){
    console.log(passTeam)
    const {name, mascot}=passTeam
    return (
        <div class='ui five wide column'>
            <div class='ui-card'>
                <div class='content'>
                    <h3 class='name'>Team Name: {name}</h3>
                    <h3 class='description'>Mascot: {mascot}</h3>
                </div>
                
            </div>
        </div>
    )}





export default Team