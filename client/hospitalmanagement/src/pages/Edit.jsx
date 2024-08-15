import React from 'react';
import Header from '../components/Header';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getBooking, editBooking } from '../services/allApi';
import { toast } from 'react-toastify';

function Edit() {
    const [bookData, setBookData] = useState({
        id:'',name: '', place: '', age: '', doctor: '', phone: ''
    })

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);
    
    
    useEffect(() => {
        getBookingData();
    }, []);

    const getBookingData = () => {
        getBooking(id).then((res) => {
            console.log(res.data);
                setBookData({
                    id: res.data.id,
                    name: res.data.name,
                    place: res.data.place,
                    age: res.data.age,
                    doctor: res.data.doctor,
                    phone: res.data.phone
                });
            })
           
    };

    const updateData = (e) => {
        e.preventDefault();

        const { name, place, age, doctor, phone } = bookData;
        if (!name || !place || !age || !doctor || !phone) {
            toast.error('Please fill all the fields');
        } 
        else {
            editBooking(bookData.id, { name, place, age,doctor, phone }).then((res) => {
                    toast.success("Booking Updated");
                    navigate('/');
                })
                
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className='border shadow mt-5'>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-6 d-flex align-items-center justify-content-center mt-3 mb-3">
                            <h2>Edit Patient Booking Details</h2>
                        </div>
                        <div className='col-md-7'>
                            <form action="">
                                <FloatingLabel controlId="floatingName" label="Booking Name" className="mb-3">
                                    <Form.Control type="text" placeholder="Enter Booking Name" value={bookData.name} onChange={(e) => setBookData({ ...bookData, name: e.target.value })} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPlace" label="Place" className="mb-3">
                                    <Form.Control type="text" placeholder="Location" value={bookData.place} onChange={(e) => setBookData({ ...bookData, place: e.target.value })} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="age " className="mb-3">
                                    <Form.Control type="number" placeholder="age" value={bookData.age} onChange={(e) => setBookData({ ...bookData, age: e.target.value })} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPhone" label="Doctor Specialist" className="mb-3">
                                    <Form.Control type="text" placeholder="Enter doctor details" value={bookData.doctor} onChange={(e) => setBookData({ ...bookData, doctor: e.target.value })} />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingSalary" label="phone" className="mb-3">
                                    <Form.Control type="number" placeholder="phone" value={bookData.phone} onChange={(e) => setBookData({ ...bookData, phone: e.target.value })} />
                                </FloatingLabel>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <button className="btn btn-success m-3" type='submit' onClick={(e) => updateData(e)}>Update</button>
                                    <button className="btn btn-danger" type='button' onClick={() => navigate('/')}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Edit;
