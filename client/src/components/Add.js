import React from 'react'
import {Formik, Field, ErrorMessage, Form} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
function Add({onPostPlayer, onPostCoach, onPostTeam}){
    const navigate=useNavigate()
    // Player
    const validationSchemaPlayer= Yup.object({
    name: Yup.string().required('Required'),
    jersey_number: Yup.number().positive('Jersey Number must be positive').integer('Jersey number Must be an integer').required('Required'),
    team_name: Yup.string().required('Required')
    })
    const initialValuesPlayer={
        name: "",
        jersey_number: '',
        team_name:''
    }
    const onSubmitPlayer= values=>{
        console.log('attempting to make new player')
        fetch('/players',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        })
        .then(res =>res.json())
        .then(data=>{onPostPlayer(data)
        navigate('/players')})
    }
    //Team
    const initialValuesTeam={
        name: "",
        mascot: ''
    }
    const onSubmitTeam=values =>{
        fetch('/teams',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        })
        .then(res =>res.json())
        .then(data=>{onPostTeam(data)
        navigate('/teams')})
    }
    const validationSchemaTeam= Yup.object({
        name: Yup.string().required('Required'),
        mascot: Yup.string().required('Required')
    })

    //Coach
    const validationSchemaCoach= Yup.object({
        name: Yup.string().required('Required'),
        coaching_position: Yup.string().required('Required'),
        team_name: Yup.string().required('Required')
    })
    const initialValuesCoach={
        name: "",
        coaching_position: "",
        team_name:""
    }
    const onSubmitCoach=values=>{
        fetch('/coaches',{
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        })
        .then(res =>res.json())
        .then(data=>{onPostCoach(data)
        navigate('/coaches')})
    }

    return(
        <div>
            <Formik
                initialValues={initialValuesPlayer}
                validationSchema={validationSchemaPlayer}
                onSubmit={onSubmitPlayer} >
                <Form>
                    <h1>Add Player</h1>
                    <label> Name: </label>
                    <Field type='text' id='name' name='name' ></Field><br/>
                    <ErrorMessage className='error' name='name' component="div"/>
                    <label> Jersey Number: </label>
                    <Field  type='number' id='jersey_number' name='jersey_number'></Field><br/>
                    <ErrorMessage className='error' name='jersey_number' component="div"/>
                    <label> Team: </label>
                    <Field type='text'  id='team_name' name='team_name'></Field><br/>
                    <ErrorMessage className='error' name='team_name' component="div"/>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
            <Formik
                initialValues={initialValuesTeam}
                validationSchema={validationSchemaTeam}
                onSubmit={onSubmitTeam}>
                <Form>
                    <h1>Add Team</h1>
                    <label> Name: </label>
                    <Field name='name' id='name'></Field><br/>
                    <ErrorMessage className='error' name='name' component="div"/>
                    <label> Mascot: </label>
                    <Field  id='mascot' name='mascot' ></Field><br/>
                    <ErrorMessage className='error' name='mascot' component="div"/>
                    <button type='submit'> Submit </button>
                </Form>
            </Formik>
            <Formik
                initialValues={initialValuesCoach}
                validationSchema={validationSchemaCoach}
                onSubmit={onSubmitCoach}>
                <Form>
                <h1>Add Coach</h1>
                    <label> Name: </label>
                    <Field  type='text' id='name' name='name' ></Field><br/>
                    <ErrorMessage className='error' name='name' component="div"/>
                    <label> Coaching Position: </label>
                    <Field  type='text' id='coaching_position' name='coaching_position'></Field><br/>
                    <ErrorMessage className='error' name='coaching_position' component="div"/>
                    <label> Team: </label>
                    <Field  type='text' id='team_name' name='team_name'></Field><br/>
                    <ErrorMessage className='error' name='team_name' component="div"/>
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Add