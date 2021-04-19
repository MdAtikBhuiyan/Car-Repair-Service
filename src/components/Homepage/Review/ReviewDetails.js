import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import img1 from '../../../images/ema.png';

const ReviewDetails = ({review}) => {

    const {name,service,description,img,address} = review;

    return (
        <div className='review-details'>
            <h4 className="text-brand"> {service} </h4>
            <p className="text-brand-2 mt-2 mb-3">{description}</p>
            <div className="users">
               {
                   review.img ?  <img src={img} alt=""/> :
                   <img src={img1} alt=""/>
               }
                <div className="info">
                    <p>{name}</p>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;