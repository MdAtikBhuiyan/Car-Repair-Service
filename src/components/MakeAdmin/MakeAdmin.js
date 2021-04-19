import React from 'react';
import { useForm } from "react-hook-form";
import './MakeAdmin.css';

const MakeAdmin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)

        fetch('https://ancient-forest-25718.herokuapp.com/makeAdmin', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log("add admin successfully"))
    };


    return (
        <section className="make-admin dashboard-container ">
            <h2 class='pl-5 text-dasboard-title'>Make Admin</h2>

            <div className="make-admin-form dashboard-box">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="">Name</label>
                    <input {...register("name", { required: true })} placeholder='Enter Name' className='form-control' />
                    <p class='text-danger'>{errors.name && <span>This field is required</span>}</p>

                    <label htmlFor="">Email</label>
                    <input type='email' {...register("email", { required: true })} placeholder='Enter Email' className='form-control' />
                    <p class='text-danger'>{errors.email && <span>This field is required</span>}</p>

                    <button className="btn btn-brand px-4 mt-2" type='submit'>Save</button>
                </form>
            </div>

        </section>
    );
};

export default MakeAdmin;