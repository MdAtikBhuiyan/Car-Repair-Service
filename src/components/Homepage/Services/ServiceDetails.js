import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import { animated, useSpring } from 'react-spring';

const ServiceDetails = ({ service }) => {

    const { title, price, img, description, _id } = service;

    let history = useHistory();

    const handleBuy = (id) => {
        history.push(`/dashboard/${id}`)
    }

    // react spring

    const springProps = useSpring({
        loop: { reverse: true },
        config: { duration: 2500 },
        from: { rotateZ: 0 },
        to: { rotateZ: 180 },
        delay: 50,
    });
    return (
        <Col xl={3} md={4} sm={6}>
            <Card className='text-center my-3'>
                <Card.Header>
                    <animated.div
                        style={springProps}
                    >
                        <img src={img} className='service-img' alt="" />
                    </animated.div>

                </Card.Header>
                <Card.Body>
                    <Card.Title className="service-title" >{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h3 className='text-brand'>$ {price}</h3>
                </Card.Body>
                <Card.Footer>
                    <button onClick={() => handleBuy(_id)} className="btn btn-brand mb-2">
                        <FontAwesomeIcon className='info-icon' icon={faShoppingCart} /> Buy Service
                    </button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ServiceDetails;