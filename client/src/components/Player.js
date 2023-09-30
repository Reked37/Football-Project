import React from 'react'
import { useNavigate } from 'react-router-dom'

function Player({passPlayer, passDeletePlayer}){
    const {name, jersey_number, team_name}=passPlayer
    const navigate= useNavigate()
    function deletePlayer(){
        fetch(`/players/${passPlayer.id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(()=>passDeletePlayer(passPlayer))
    }

    function updatePlayer(){
        navigate(`/players/${passPlayer.id}`)
    }

    return(
        <div class="ui five wide column">
            <div class='ui-card'>
                <h3 class="header">{name}</h3>
                <h3 class='meta'>#{jersey_number}</h3>
                <h3 class='description'>Team: {team_name}</h3>
                <div>
                    <button type='submit' onClick={updatePlayer} class='ui  blue button'>Update Player</button>
                    <button type='submit' onClick={deletePlayer} class='ui red button'>Delete Player </button>
                </div>
                
            </div>
            
        </div>
    )
}
export default Player