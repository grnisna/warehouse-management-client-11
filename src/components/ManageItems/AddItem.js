import React from 'react';

import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddItem = () => {
    // const  name, quantity, color, description, supplier, img, _id ;
    
    
    const handleAddItem = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const quantity = event.target.quantity.value;
        const color = event.target.color.value;
        const description = event.target.description.value;
        const supplier = event.target.supplier.value;
        const img = event.target.img.value;

        const item = {name, quantity, color, description, supplier, img};
        const url = `https://immense-brushlands-19382.herokuapp.com/manage`;
        fetch(url,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(item)
        })
        .then( res => res.json())
        .then( data => {
            event.target.reset();
            toast('Successfully added');
        });
    }

    return (
        <div className='w-75  mx-auto mt-5 border rounded shadow p-3'>

            <Form onSubmit={handleAddItem} className='p-2'>
                <h2 className='text-center text-info shadow p-2' >Add New Product</h2>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="text" name='name' placeholder="Product Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Control type="number" name='quantity'  placeholder="Product Quantity" required />
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