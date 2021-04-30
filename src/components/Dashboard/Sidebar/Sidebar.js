import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faListAlt, faPlus, faShoppingCart, faUserPlus, faGripHorizontal, faListOl } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/header-logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = ({ url, path }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        fetch('https://ancient-forest-25718.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
            })
    }, [])

    return (
        <div className='sidebar'>
            <Link to='/'><img src={logo} alt="" /></Link>
            <ul className='list-unstyled'>

                {
                    admin === true &&
                    <>
                        <li>
                            <Link to='/dashboard/orderList' className='text-white'>
                                <FontAwesomeIcon icon={faListOl} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/addService`} className='text-white'>
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/makeAdmin`} className='text-white'>
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/manageService`} className='text-white'>
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Manage Service</span>
                            </Link>
                        </li>
                    </>
                }
                
                {admin === false &&
                    <>
                        <li>
                            <Link to={`${url}/book`} className='text-white'>
                                <FontAwesomeIcon icon={faShoppingCart} /> <span>Book</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/bookingList`} className='text-white'>
                                <FontAwesomeIcon icon={faListAlt} /> <span>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={`${url}/customerReview`} className='text-white'>
                                <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                            </Link>
                        </li>
                    </>

                }
            </ul>
        </div>
    );
};

export default Sidebar;