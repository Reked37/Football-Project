import React from 'react'
import {useFormik} from 'formik'
import { useParams } from 'react-router-dom' 
import { useNavigate } from 'react-router-dom' 

function UpdatePlayer({players, onUpdatePlayer}){
    const {id}=useParams()
    const player = players.find(player=> player.id === parseInt(id))
    console.log(player)
    const navigate=useNavigate()

    const formik =useFormik({
        initialValues:{
            name:player.name,
            jersey_number: player.jersey_number,
            team_name: player.team_name
        },
        onSubmit:values=>{
            fetch(`/players/${player.id}`,{
                method: 'PATCH',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then(res=>res.json())
            .then(data=>onUpdatePlayer(data))
            console.log('Updated!')
            navigate('/players')

        }
    })

    return(
        <div>
            <h1>Update Player Info</h1>
            <form onSubmit={formik.handleSubmit}>
                <label> Name: </label>
                <input type='text' value={formik.values.name} id='name' onChange={formik.handleChange}></input>
                <label> Jersey Number: </label>
                <input value={formik.values.jersey_number} type='number' id='jersey_number' onChange={formik.handleChange}></input>
                <label> Team: </label>
                <input type='text' value={formik.values.team_name} id='team_name' onChange={formik.handleChange}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default UpdatePlayer