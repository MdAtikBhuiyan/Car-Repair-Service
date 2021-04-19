import React from 'react';
import './Contact.css';
import { icon } from './../About/About';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section className='section-area my-5'>
            <div className="title text-center mb-5">
                <h1>Get In <span>Touch </span></h1>
                <span>
                    {icon} {icon} {icon} {icon}
                </span>
            </div>


            <Container>
                <Row>

                    <Col md={6}>
                        <form className="form-area">
                            <input type="text" placeholder='Name' className='form-control my-3' />
                            <input type="email" placeholder='Email' className='form-control my-3' />
                            <input type="text" placeholder='Mobile' className='form-control my-3' />
                            <input type="text" placeholder='Address' className='form-control my-3' />
                            <textarea className='form-control my-3' rows='4' placeholder='Message'></textarea>
                            <div className='text-right'>
                                <button className="btn btn-brand px-3 py-2 my-3">Send Us</button>
                            </div>
                        </form>
                    </Col>
                    <Col md={6}>
                        <div className="contact-details">
                            <p>Address<span><FontAwesomeIcon icon={faCompass} /></span>
                                <small>xyz Road, Tangail, Bangladesh</small>
                            </p>
                        </div>
                        <div className="contact-details">
                            <p>Phone<span><FontAwesomeIcon icon={faPhoneAlt} /></span>
                                <small>+8801234567899</small>
                            </p>
                        </div>
                        <div className="contact-details">
                            <p>Email <span><FontAwesomeIcon icon={faEnvelope} /></span>
                                <small>touhidatik81@gmail.com</small>
                            </p>
                        </div>
                        <div className="contact-details">
                            <p>Get Social >>
                            <span><a href="https://www.facebook.com/" target='_blank'>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                </span>
                                <span><a href="https://twitter.com/" target='_blank'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                </span>
                                <span><a href="https://www.google.com/" target='_blank'>
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                </span>
                                <span><a href="https://www.linkedin.com/" target='_blank'>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a></span>
                            </p>
                        </div>
                    </Col>

                </Row>
            </Container>


        </section >
    );
};

export default Contact;