import React from 'react';
import './Team.css';
import { icon } from './../About/About';
import { Container, Row } from 'react-bootstrap';
import img1 from '../../../images/t-1.jpg';
import img2 from '../../../images/t-2.jpg';
import img3 from '../../../images/t-3.jpg';
import TeamMember from './TeamMember';

const teams = [
  
    {
        id: 1,
        name:' Silvia R. Brown',
        designation: 'Founder',
        img: img1
    },
    {
        id: 2,
        name:'Joseph C. Billups',
        designation: 'australia',
        img:img2
    },
    {
        id: 3,
        name:'Joseph C. Billups',
        designation: 'australia',
        img:img3
    }
]

const Team = () => {
    return (
        <section className='team-area py-5'>
            <div className="title text-center mb-5">
                <h1>Our <span>Team</span></h1>
                <span>
                    {icon}{icon}{icon}{icon}
                </span>
            </div>
            <Container>
                <Row>
                    {
                        teams.map(team => <TeamMember team={team} key={team.id} />)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Team;