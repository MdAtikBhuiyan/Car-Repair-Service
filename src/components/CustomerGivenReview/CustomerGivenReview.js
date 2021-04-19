import React, { useContext } from 'react';
import './CustomerGivenReview.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const CustomerGivenReview = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const userImg = loggedInUser?.photoURL;

    const onSubmit = data => {
        console.log(data)
        const reviewInfo = {...data}
        reviewInfo.img = userImg;

        fetch('https://ancient-forest-25718.herokuapp.com/addReview', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => console.log("add review successfully"))
    };

    return (
        <section className="given-review dashboard-container">
            <h2 class='pl-5 text-dasboard-title'>Review</h2>

            <div className="review-form dashboard-box mb-5">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name", { required: true })} placeholder='Enter Your Name' className='form-control my-4' />
                    <p className='text-danger'>{errors.name && <span>This field is required</span>}</p>

                    <input {...register("address", { required: true })} placeholder="Enter Your Address" className='form-control my-4' />
                    <p className='text-danger'>{errors.address && <span>This field is required</span>}</p>

                    <input {...register("service", { required: true })} placeholder="Enter Your Service Name" className='form-control my-4' />
                    <p className='text-danger'>{errors.service && <span>This field is required</span>}</p>

                    <textarea {...register("description", { required: true })} placeholder="Description" className='form-control my-4' rows='4' >
                    </textarea>
                    <p className='text-danger'>{errors.description && <span>This field is required</span>}</p>

                    <button className="btn btn-brand px-4 mt-2" type='submit'>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default CustomerGivenReview;