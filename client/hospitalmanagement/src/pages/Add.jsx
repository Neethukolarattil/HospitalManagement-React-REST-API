import React from 'react'
import Header from '../components/Header'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { addBooking } from '../services/allApi'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Add() {
    const [formData,setFormData]=useState({
        name:'',place:'',age:'',doctor:'',phone:''
    })
    const navigate=useNavigate()

    const getData=(e)=>{
        e.preventDefault();  // Prevent the default form submission behavior
        console.log(formData);

        const {name,place,age,doctor,phone}=formData
        if (!name || !place || !age || !doctor || !phone){
            toast.warning('Invalid input')
        }
        else{
            addBooking({name,place,age,doctor,phone}).then((res)=>{
                console.log(res.data);
                toast.success('Employee Added Successfully')
                setFormData({name:'',place:'',age:'',doctor:'',phone:''})
                navigate('/')
            }).catch((err)=>{
                console.log(err);
                toast.error('Something went wrong')
            })
        }
    }
    const formCancel=()=>{
        setFormData({name:'',place:'',age:'',doctor:'',phone:''})
        navigate('/')

    }


  return (
    <>
    <Header />
    <div className="container">
        <div className=' border shadow mt-5'>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 d-flex align-items-center justify-content-center mt-3 mb-3 ">
                    <h2>Patient Booking Details</h2>
                </div>
                <div className='col-md-7'>
                    <form action="">
                        <FloatingLabel controlId="floatingName" label="Booking Name" className="mb-3">
                            <Form.Control type="text" placeholder="Enter Booking Name" onChange={(e)=>setFormData({...formData,name:e.target.value})} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPlace" label="Place" className="mb-3">
                            <Form.Control type="text" placeholder="Location" onChange={(e)=>setFormData({...formData,place:e.target.value})} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingInput" label="age of patient" className="mb-3">
                            <Form.Control type="number" placeholder="age" onChange={(e)=>setFormData({...formData,age:e.target.value})}/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingdoctor" label="doctor specialist" className="mb-3">
                            <Form.Control type="text" placeholder="Enter doctor details" onChange={(e)=>setFormData({...formData,doctor:e.target.value})} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingSalary" label="phone number" className="mb-3">
                            <Form.Control type="number" placeholder="phone" onChange={(e)=>setFormData({...formData,phone:e.target.value})}/>
                        </FloatingLabel>
                        <div className='d-flex align-items-center justify-content-center'>
                            <button className="btn btn-success m-3" type='submit'onClick={(e)=>getData(e)} >Update</button>
                            <button className="btn btn-danger" type='button' onClick={formCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>

    </>
  )
}

export default Add