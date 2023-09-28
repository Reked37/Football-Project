import React from 'react'
import {useFormik} from 'formik'
function UpdatePlayer({players, onUpdatePlayer}){

    const formik =useFormik({
        initialValues:{
            name:"",
            jersey_number:"",
            team_name:""
        },
        onSubmit:values=>{
            fetch(`http://127.0.0.1:5555/players/${players.id}`,{
                method: 'PATCH',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then(res=>res.json())
            .then(data=>onUpdatePlayer(data))
            console.log('Updated!')
        }
    })
    
    return(
        <div>
            <h1>Update Player Info</h1>
            <form>
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