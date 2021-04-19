import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imgUrl, setImgUrl] = useState(null);

    const imageUpload = (e) => {

        console.log(e.target.files);

        const imgData = new FormData();
        imgData.set('key', 'eedf45f5159b6e8f0f23e26c24c443e0');
        imgData.append('image', e.target.files[0]);
        console.log('object', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imgData)
            .then(function (response) {
                console.log('okupload');
                setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log('object', imgUrl);

    const onSubmit = data => {
        const servicetData = {
            title: data.title,
            price: data.price,
            img: imgUrl,
            description: data.description
        }
        console.log(servicetData);

        fetch('https://ancient-forest-25718.herokuapp.com/services', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(servicetData)
        })
            .then(res => console.log("add Product successfully"))
    };


    return (
        <section className='add-service dashboard-container'>
            <h2 class='pl-5 text-dasboard-title'>Add Service</h2>

            <div className='add-form'>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="d-flex form-bg">
                        <div className='form mr-5'>

                            <label htmlFor="">Service Title</label>
                            <input {...register("title", { required: true })} placeholder='Enter Price' className='form-control' />
                            <p class='text-danger'>{errors.title && <span>This field is required</span>}</p>

                            <label htmlFor="">Service Price</label>
                            <input {...register("price", { required: true })} placeholder='Enter Price' className='form-control' />
                            <p class='text-danger'>{errors.price && <span>This field is required</span>}</p>

                            <label htmlFor="">Description</label>
                            <textarea {...register("description", { required: true })} placeholder='Enter Description' className='form-control' rows='5' >
                            </textarea>
                            <p class='text-danger'> {errors.price && <span>This field is required</span>}</p>
                        </div>
                        <div className='form ml-3'>
                            <label htmlFor="">Image</label> <br />
                            <input type='file' onChange={imageUpload} placeholder='Enter title' />
                        </div>
                    </div>
                    <div className='text-right mt-3'>
                        <button className="btn btn-brand px-4 mt-2" type='submit'>Save</button>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default AddService;