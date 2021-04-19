import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import Navbars from '../../SharedComponents/Navbars/Navbars';
import firebaseConfig from './firebase.config';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        photoURL: '',
        isSignedIn: false
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;

                const userInfo = { ...user }

                userInfo.name = displayName;
                userInfo.email = email;
                userInfo.photoURL = photoURL;
                userInfo.isSignedIn = true;
                setUser(userInfo);
                setLoggedInUser(userInfo);
                history.replace(from);

            }).catch((error) => {
                var errorMessage = error.message;
                console.log('login err', errorMessage);

            });
    }
    
    return (
        <div className='login-section'>
            <Navbars></Navbars>
            <div className='login-area'>
                <h2 className='login-title'>Welcome To Car's Repair Service</h2>

                <div className='login-from'>
                    <h3 className='form-title'> Login</h3>

                    <button onClick={googleSignIn} className='btn ggl-btn'>
                        <span className='google'><FontAwesomeIcon icon={faGoogle} /></span> <span>Continue With Google</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;