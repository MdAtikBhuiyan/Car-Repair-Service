import React, { useEffect, useState } from 'react';
import './Review.css';
import img1 from '../../../images/ema.png';
import img2 from '../../../images/aliza.png';
import { Container } from 'react-bootstrap';
import { icon } from '../About/About';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReviewDetails from './ReviewDetails';

const Review = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://ancient-forest-25718.herokuapp.com/showReview')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    console.log('object', reviews);

    // carousel 
    const options = {
        responsiveClass: true,
        nav: true,
        autoplay: false,
        loop: true,
        dots: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            750: {
                items: 2,
            },
            991: {
                items: 3,
            },

        },
    };

    return (
        <section className='review-area py-5'>
            <div className="title text-center mb-5">
                <h1>Client's <span>Feedback</span></h1>
                <span>
                    {icon}{icon}{icon}{icon}
                </span>
            </div>

            {
                reviews.length &&
                <Container>
                    <OwlCarousel items={3} className="slider-items owl-theme owl-carousel m-4" {...options} >
                        {
                            reviews?.map(review => <ReviewDetails review={review} key={review._id} />)
                        }
                    </OwlCarousel>
                </Container>
            }

        </section>
    );
};

export default Review;