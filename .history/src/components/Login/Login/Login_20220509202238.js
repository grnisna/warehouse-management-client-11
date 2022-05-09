import React from 'react';
import auth from './firebase/firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import image from '../../../images/login/login-image.jpg';
import './Login.css';

const Login = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const handleSignIn = event =>{
          event.preventDefault();
          const email = event.target.email.value;
          const password = event.target.password.value;
        createUserWithEmailAndPassword(email,password);
      }
    return (
        <div className=" login " >
            <div className='image-area' >
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

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Abide by All rules" />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                   Log In
                </Button>
            </Form>
            </div>
        </div>
    );
};

export default Login;