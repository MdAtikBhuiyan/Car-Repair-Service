import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import img1 from '../../../images/about1.jpg';
import img2 from '../../../images/about2.jpg';

export const icon = <svg className='svg-title' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='black' stroke='none'><polygon points='9.4,2 24,2 14.6,21.6 0,21.6' /></svg>
const About = () => {
    return (
        <section className='about-area py-5'>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="about-img">
                            <img src={img1} className='img1' alt="" />
                            <img src={img2} alt="" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="title text-left mb-4">
                            <h1>About <span>Us</span></h1>
                            <span>
                                {icon}
                                {icon}
                                {icon}
                                {icon}
                            </span>
                        </div>
                        <div>
                            <p className='text-secondary'>Aliquet potenti facilisis integer imperdiet sed a risus nam hac. Varius a nisi ante fermentum aptent class scelerisque.</p>
                            <p  className='text-secondary'>Finibus posuere amet litora faucibus sodales porta tempus hendrerit blandit. Consectetur turpis faucibus netus quis dignissim litora est. Nisi erat lobortis amet magna ligula malesuada posuere. Donec commodo magnis rutrum curabitur facilisis at.</p>

                            <button className="btn btn-brand mt-2">Discover More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;