import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const { img, quantity, color, name, description, supplier, email } = item;

    return (
        <div className='p-3 border rounded mt-5 singleItem' >
            <div className='w-100  text-center'>
                <img className='w-100 ' src={img} alt="Augusta Pate" />
            </div>

            <div>
                <h3>Product Name:{name} </h3>
                <h4>Quantity:{quantity} </h4>
                <h4>Color:{color}</h4>
                <div>
                    <p>{description} </p>
                    <h4>Supplier:<span style={{ color: 'blue' }} >{supplier}</span></h4>
                </div>
            </div>
        </div>
    );
};

export default Item;