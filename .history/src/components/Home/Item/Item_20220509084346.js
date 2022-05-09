import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    const { img, quantity, color, name, description, supplier, email } = item;

    return (
        <div  className='p-3 border rounded mt-5' >
            <div className='singleItem'>                
                    <img className='w-50 me-5' src={img} alt="Augusta Pate" />      
                <div>
                    <h6>Product Name:{name} </h6>
                    <p>Quantity:{quantity} </p>
                    <p>Color:{color}</p>

                </div>
            </div>

            <div>
                <p>{description} </p>
                <h4 className='text-center'>Supplier:<span style={{ color: 'blue' }} >{supplier}</span></h4>
            </div>
        </div>
    );
};

export default Item;