import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Userdetailspage() {
    const {id}= useParams();
  const [user,updateuser]=useState({})

  const singleuserfunc= async(req,res)=>{
    await axios.get('http://localhost:7200/singleuser/${id}').then((d)=>{
        console.log(d.data.singleuser);
        // updateuser(d.data);
    })
  }


  useEffect(()=>{
    singleuserfunc();
  })




  return (
    <div className= 'container-fluid'>
        <div className='row'>
            <div className= 'col-12'>
                <link to="/dashboard/employee" className='btn-btn-info'>Back</link>
                
                <div className='card p-3 bg-light shadow'>
                <h3>Name: {user.fullname}</h3>
                <h3>Email: {user.email}</h3>
                <h3>DOB: {user.dob}</h3>
                <h3>Gender: {user.gender}</h3>
                <h3>Phone No: {user.phone}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Userdetailspage