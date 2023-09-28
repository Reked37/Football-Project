import React from "react"
import Player from "./Player"

function PlayersContainer({players, onDeletePlayer}){
    console.log(players)
    const displayPlayers=players.map(player=>{
        return <Player passPlayer={player} key={player.id} passDeletePlayer={onDeletePlayer}/>    
    })

    return (
        <div>
            <h1>Players in the League</h1>
            {displayPlayers}
        </div>
    )}

export default PlayersContainer