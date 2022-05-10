import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import image from '../../../images/login/login-image.jpg';
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import SocialMedia from '../SocialMedia/SocialMedia';
import axios from 'axios';
import auth from './firebase/firebase.init';
import { async } from '@firebase/util';


const Login = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const location = useLocation();
    // let from = location.state?.from?.pathname || "/";
    const from = location?.state?.from?.pathname || '/';

// ---------sign in email and password------------ 
    const [
        signInWithEmailAndPassword,
        
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //--------------reset password-------------
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


//---------handle submit button ---------------
    const handleSignIn = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await  signInWithEmailAndPassword(email, password);
        const {data} = await axios.post('https://immense-brushlands-19382.herokuapp.com/login',{email});
        localStorage.setItem('token',data.token);
        if (user) {
            toast('Successfully singin');
            event.target.reset();
        }

    };

    //--------- reset button----------
    const emailRef = useRef();
    
    const handleResetPassword = async (event) =>{
        const email = emailRef.current.value;
       await sendPasswordResetEmail(email);
       alert('send email for resetPassword');
    }
    //--------------navigated -------------
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, navigate, from])



    return (
        <div className=" login " >
            <div className='image-areaa' >
                <img className='img-fluid' src={image} alt="" />
            </div>

            <div>
                <Form onSubmit={handleSignIn}>


                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>

                    {error && <p style={{ color: 'red' }} >{error.message}</p>}

                    <Button className='w-100' variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
                <p>Need Registration ? <Link to='/registration' >Registration</Link> </p>
                <p>Forget Password? <button onClick={handleResetPassword} className=' btn btn-danger'  >Reset Password</button> </p>
                
                <SocialMedia></SocialMedia>
            </div>
        </div>
    );
};

export default Login;