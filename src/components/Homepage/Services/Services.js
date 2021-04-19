import React, { useEffect, useState } from 'react';
import { icon } from '../About/About';
import { faCog, faCarCrash, faDharmachakra, faTools } from '@fortawesome/free-solid-svg-icons';
import { Container, Row } from 'react-bootstrap';
import ServiceDetails from './ServiceDetails';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {

        fetch('https://ancient-forest-25718.herokuapp.com/showServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })

    }, [])

    console.log(services);

    return (
        <section className='service-area py-5'>
            <div className="title text-center mb-5">
                <h1>Our <span>Services</span></h1>
                <span>
                    {icon}
                    {icon}
                    {icon}
                    {icon}
                </span>
            </div>

            <Container>
                <Row>
                    {
                        services?.map(service => <ServiceDetails service={service} key={service._id} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;