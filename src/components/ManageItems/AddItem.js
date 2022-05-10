import React from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

const AddItem = () => {
    // const  name, quantity, color, description, supplier, img, _id ;

    return (
        <div className='w-75  mx-auto mt-5 border rounded shadow p-3'>

            <Form className='p-2'>
                <h2 className='text-center text-info shadow p-2' >Add New Product</h2>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" name='name' placeholder="Product Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" name='quantity'  placeholder="Product Quantity" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" name='color' placeholder="Product Color" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" name='supplier' placeholder="Supplier Name" required />
                </Form.Group>

                
                <InputGroup className="mb-3">                    
                    <FormControl as="textarea" name='description' placeholder='description' aria-label="With textarea" />
                </InputGroup>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="textarea" name='img' placeholder="Image Link" required />
                </Form.Group>

                <Button className='w-100' variant="primary" type="submit">
                    Add New Item
                </Button>
            </Form>

        </div>
    );
};

export default AddItem;