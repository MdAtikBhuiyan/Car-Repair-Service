import React from 'react';
import Navbars from '../../SharedComponents/Navbars/Navbars';
import './Header.css';
import HeaderMain from './HeaderMain';

const Header = () => {
    return (
        <div className='header-area'>

            <Navbars></Navbars>
            <HeaderMain></HeaderMain>
            <div className="overlay">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Header;