import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import image from '../../../images/registration/registration-image2.png';
import auth from '../Login/firebase/firebase.init';
import './Registration.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const [agree, disAgree] = useState(false);
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
        toast('Successfully Registration');
        event.target.reset();
      }
    return (
        <div className=" registration " >
            <div className='image-area' >
                <img className='img-fluid' src={image} alt="" />
            </div>

            <div>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    
                    <Form.Control type="text"  placeholder="Enter Your Name" required />                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="email" name='email' placeholder="Enter email" required />                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={()=>setAgree(!agree)} type="checkbox" label="Abide by All rules" />
                </Form.Group>

                {error && <p style={{color:'red'}} >{error.message}</p>}

                <Button disabled={!agree} className='w-100' variant="primary" type="submit">
                   Registration
                </Button>
            </Form>
            </div>
        </div>
    );
};

export default Registration;