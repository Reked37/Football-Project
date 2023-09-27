import React, {useState} from 'react'
import {useFormik} from 'formik'

function Add(){
    const [addPlayer, setAddPlayer]=useState(true)
    const [addCoach, setAddCoach]=useState(false)
    const [addTeam, setAddTeam]=useState(false)

    return(
        <div>
            <h1>Add a Player</h1>
        </div>
    )
}

export default Add