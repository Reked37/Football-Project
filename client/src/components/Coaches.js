import React, {useState, useEffect} from "react"


function Coaches(){
    const [coaches, setCoaches]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5555/coaches')
        .then(res=>res.json())
        .then(data=>setCoaches(data),
    )},[])
    console.log(coaches)
    return (
        <div>
            <h1>Coaches</h1>
        </div>
    )}





export default Coaches