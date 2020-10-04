import React, { useContext } from 'react';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";
import './LogIn.css';
import googleIcon from '../resources/logos/google.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../resources/logos/Group 1329.png'

const LogIn = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const { loggedInUser, setLoggedInUser } = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then(function (result) {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser)
                history.replace(from);
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <>
            <Link to="/" >
                <div style={{ textAlign: 'center' }}>
                    <img style={{ width: "300px" }} src={logo} alt="" />
                </div>
            </Link>
            <div className="logIn">
                <div style={{}} className="button">
                    <img style={{ width: "25px" }} className="mr-5 ml-1" src={googleIcon} alt="" />
                    <button className="googleButton" onClick={handleGoogleSignIn}>Continue with Google</button>
                </div>
                <p className="text-center" style={{ marginTop: '-10rem' }}>Don’t have an account? <span className="text-primary">Create an account</span></p>
            </div>
        </>
    );
};

export default LogIn;