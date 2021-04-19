import React from 'react';
import { Container } from 'react-bootstrap';
import car from '../../../images/header-car.png';

const HeaderMain = () => {
    return (
        <main className='header-main text-center'>
            <Container>
                <div>
                    <h4>Trust Your Vehicle to</h4>
                    <h3> Certified </h3>
                    <p>SERVICE, MAINTENANCE & REPAIR BY THE CERTIFIED SERVICE EXPERTS</p>
                </div>
                <div>
                    <img src={car} alt="" className='img-fluid' />
                </div>
            </Container>
        </main>
    );
};

export default HeaderMain;