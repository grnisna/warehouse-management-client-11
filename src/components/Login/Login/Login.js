import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import image from '../../../images/login/login-image.jpg';
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './firebase/firebase.init';
import SocialMedia from '../SocialMedia/SocialMedia';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // let from = location.state?.from?.pathname || "/";
    const from = location?.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
        if (user) {
            toast('Successfully singin');
            event.target.reset();
        }

    };
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

                        <Form.Control type="email" name='email' placeholder="Enter email" />
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
                
                <SocialMedia></SocialMedia>
            </div>
        </div>
    );
};

export default Login;