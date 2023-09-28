import React from 'react'
import {useFormik} from 'formik'

function Add({onPostPlayer, onPostCoach, onPostTeam}){
    const formikPlayer= useFormik({
        initialValues:{
            name: "",
            jersey_number: '',
            team_name:''
        },
        onSubmit: values =>{
            fetch('/players',{
                method:"POST",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(values)
            })
            .then(res =>res.json())
            .then(data=>{onPostPlayer(data)
            console.log('Submitted')
            formikPlayer.resetForm()})
        }
    })

    const formikTeam= useFormik({
        initialValues:{
            name: "",
            mascot: ''
        },
        onSubmit: values =>{
            fetch('/teams',{
                method:"POST",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(values)
            })
            .then(res =>res.json())
            .then(data=>{onPostTeam(data)
            console.log('Submitted')
            formikTeam.resetForm()})
        }
    })

    const formikCoach= useFormik({
        initialValues:{
            name: "",
            coaching_position: "",
            team_name:""
        },
        onSubmit: values =>{
            fetch('/coaches',{
                method:"POST",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(values)
            })
            .then(res =>res.json())
            .then(data=>{onPostCoach(data)
            console.log('Submitted')
            formikCoach.resetForm()})
        }
    })

    return(
        <div>
            <h1>Add Player</h1>
            <form onSubmit={formikPlayer.handleSubmit}>
                <label> Name: </label>
                <input type='text' value={formikPlayer.values.name} id='name' onChange={formikPlayer.handleChange}></input>
                <label> Jersey Number: </label>
                <input value={formikPlayer.values.jersey_number} type='number' id='jersey_number' onChange={formikPlayer.handleChange}></input>
                <label> Team: </label>
                <input type='text' value={formikPlayer.values.team_name} id='team_name' onChange={formikPlayer.handleChange}></input>
                <button type='submit'>Submit</button>
            </form>
            <h1>Add Team</h1>
            <form onSubmit={formikTeam.handleSubmit}>
                <label> Name: </label>
                <input value={formikTeam.values.name} id='name' onChange={formikTeam.handleChange}></input>
                <label> Mascot: </label>
                <input values={formikTeam.values.mascot} id='mascot' onChange={formikTeam.handleChange}></input>
                <button type='submit'> Submit </button>
            </form>
            <h1>Add Coach</h1>
            <form onSubmit={formikCoach.handleSubmit}>
                <label> Name: </label>
                <input values={formikCoach.values.name} id='name' onChange={formikCoach.handleChange}></input>
                <lable> Coaching Position: </lable>
                <input values={formikCoach.values.coaching_position} id='coaching_position' onChange={formikCoach.handleChange}></input>
                <label> Team: </label>
                <input values={formikCoach.values.team_name} id='team_name' onChange={formikCoach.handleChange}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Add