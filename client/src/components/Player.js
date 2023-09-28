import React from 'react'
import UpdatePlayer from './UpdatePlayer'
import { Navigate } from 'react-router-dom'

function Player({passPlayer, passDeletePlayer}){
    const {name, jersey_number, team}=passPlayer

    function deletePlayer(){
        fetch(`http://127.0.0.1:5555/player/${passPlayer.id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(()=>passDeletePlayer(passPlayer))
    }

    function updatePlayer(passPlayer){
        Navigate(`/players/${passPlayer.id}`)
    }

    return(
        <div>
            <h3>Name: {name}</h3>
            <h3>#{jersey_number}</h3>
            <h3>Team: {team.name}</h3>
            <button type='submit' onClick={updatePlayer}>Update Player</button>
            <button type='submit' onClick={deletePlayer}> Delete Player </button>
        </div>
    )
}
export default Player