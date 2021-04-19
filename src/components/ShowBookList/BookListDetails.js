import React from 'react';
import { Col } from 'react-bootstrap';

const BookListDetails = ({bookedService}) => {

    const {name,email,title,price,img,status} = bookedService;

    return (
        <Col md={6}>
            <div className="bookDetails">
                <div className="details-top">
                    <img src={img} alt=""/>
                    <span>{status}</span>
                </div>
                <h3>{title}</h3>
                <h4>$ {price}</h4>
            </div>
        </Col>
    );
};

export default BookListDetails;