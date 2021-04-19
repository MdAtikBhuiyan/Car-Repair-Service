import React, { useContext, useEffect } from 'react';
import './ShowBookList.css';
import { useState } from 'react';
import { UserContext } from '../../App';
import BookListDetails from './BookListDetails';
import { Row } from 'react-bootstrap';

const ShowBookList = () => {

    const [bookList, setBookList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log(loggedInUser);
    useEffect(() => {
        fetch('https://ancient-forest-25718.herokuapp.com/showBookList', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setBookList(data))
    }, [])
    console.log(bookList);

    return (
        <section className="dashboard-container">
            <h1 className="dashboard-title pl-5">Booking List</h1>

            <div className="dashboard-box mb-5">
                <Row>
                    {
                        bookList.map(booked => <BookListDetails bookedService={booked} key={booked._id} />)
                    }
                </Row>
            </div>
        </section>
    );
};

export default ShowBookList;