import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const TeamMember = ({ team }) => {

    const { name, designation, img, id } = team;

    return (
        <Col lg={4} md={6} sm={6}>
            <div className="team-member my-4">
                <div className="membr-img">
                    <img src={img} alt="" />
                    <span className="img-icon"></span>
                </div>
                <h3>{name}</h3>
                <p>{designation}</p>
                <div className="social-contact">
                    <span><a href="https://www.facebook.com/" target='_blank'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a></span>
                    <span><a href="https://twitter.com/" target='_blank'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a></span>
                    <span><a href="https://www.linkedin.com/" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a></span>
                </div>
            </div>
        </Col>
    );
};

export default TeamMember;