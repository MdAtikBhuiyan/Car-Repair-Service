import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import './Book.css';
import { UserContext } from './../../App';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Book = () => {

    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [service, setService] = useState({});
    useEffect(() => {

        fetch(`https://ancient-forest-25718.herokuapp.com/book/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const { title, price } = service;
    const { name, email } = loggedInUser;

    const [bookIn, setBookIn] = useState(true);

    const [bookInfo, setBookInfo] = useState({})

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const bookData = { ...data }
        bookData.logInEmail = email;
        bookData.status = 'pending';
        bookData.img = service?.img;
        setBookInfo(bookData);
        setBookIn(false)
    };

    const handlePaymentSuccess = ( paymentId, card ) => {
     
        let bookDetails = {...bookInfo}
        bookDetails.cards = card;
        
        fetch('https://ancient-forest-25718.herokuapp.com/bookService', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookDetails)
        })
            .then(res => res.json())
            .then(data => console.log("service booked successfully"))
    }
    return (

        <>
            {
                bookIn ?
                    <section className='d-block overflow-hidden'>

                        <section className='dashboard-container'>
                            <h1 className="text-dasboard-title pl-5"> Book Service </h1>

                            <div className="book-form dashboard-box">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <input defaultValue={name} {...register("name", { required: true })} placeholder='Enter Your Name' className='form-control my-3' />
                                    <p className="text-danger">{errors.name && <span>This field is required</span>}</p>

                                    <input defaultValue={email} {...register("email", { required: true })} placeholder='Enter Your Email' className='form-control my-3' />
                                    <p className="text-danger">{errors.email && <span>This field is required</span>}</p>

                                    <input defaultValue={title} {...register("title", { required: true })} placeholder='Enter Service Title' className='form-control my-3' />
                                    <p className="text-danger">{errors.title && <span>This field is required</span>}</p>

                                    <input defaultValue={price} {...register("price", { required: true })} placeholder='Enter Service Price' className='form-control my-3' />
                                    <p className="text-danger">{errors.price && <span>This field is required</span>}</p>

                                    <button className="btn btn-brand mt-2" type="submit" >Booked Service</button>

                                </form>
                            </div>

                        </section>

                    </section>
                    :
                    <div className="dashboard-container">
                        <h1 className="text-dashboard-title pl-5">Payment</h1>
                        <div className="dashboard-box">
                            <PaymentProcess setBookIn={setBookIn} handlePayment={handlePaymentSuccess}></PaymentProcess>
                        </div>
                    </div>
            }
        </>

    );
};

export default Book;