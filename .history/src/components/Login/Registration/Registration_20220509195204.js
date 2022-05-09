import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Registration = () => {
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
        <div>
            <div>

            </div>
            <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    
                    <Form.Control type="text" placeholder="Enter Your Name" />                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control type="email" placeholder="Enter email" />                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                   Registration
                </Button>
            </Form>
            </div>
        </div>
    );
};

export default Registration;