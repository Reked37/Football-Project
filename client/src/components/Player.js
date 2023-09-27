import React from 'react'

function Player({passPlayer}){
    const {name, jersey_number, team }=passPlayer
    return(
        <div>
            <h3>Name: {name}</h3>
            <h3>#{jersey_number}</h3>
            {/* <h3>Team: {team}</h3> */}
        </div>
    )
}
export default Player