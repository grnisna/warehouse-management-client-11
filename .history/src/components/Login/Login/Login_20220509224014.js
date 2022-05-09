import React from 'react';
import auth from './firebase/firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import image from '../../../images/login/login-image.jpg';
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import analytics from './firebase/firebase.init';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(analytics);
    

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
    if (user) {
        navigate('/home');       
    }


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
            </div>
        </div>
    );
};

export default Login;