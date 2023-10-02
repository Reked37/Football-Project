import React from 'react'
import {Formik, Form, Field} from 'formik'
import { useParams } from 'react-router-dom' 
import { useNavigate } from 'react-router-dom' 

function UpdatePlayer({players, onUpdatePlayer}){
    const {id}=useParams()
    const player = players.find(player=> player.id === parseInt(id))
    const navigate=useNavigate()

    const initialValues={
        name:player.name,
        jersey_number: player.jersey_number,
        team_name: player.team_name
    }
    const onSubmit=values=>{
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
 
    return(
        <div>
            <Formik
                intialValues={initialValues}
                onSubmit={onSubmit}
                class='ui form'>
                <Form class='field'>
                    <h1 class='headers'>Update Player Info</h1>
                    <label> Name: </label>
                    <Field type='text' id='name' name='name'></Field>
                    <lable> Jersey Number: </lable>
                    <Field type='number' id='jersey_number' name='jersey_number'/>
                    <label> Team: </label>
                    <Field type='text' id='team' name='team'/><br/>
                    <button type='submit' class='ui button'> Submit </button>
                </Form>
            </Formik>
        </div>
    )
}

export default UpdatePlayer