import React from 'react';

const Item = ({ item }) => {
    const { img, quantity, color, name, description, supplier, email } = item;

    return (
        <div className='p-3 border rounded mt-5' >
            <div className='  text-center'>
                <img  className='w-50 ' src={img} alt="Augusta Pate" />
            </div>
            <h3>{name} </h3>
            <h4>Quantity:{quantity} </h4>
            <h4>Color:{color}</h4>
            <p>{description} </p>
            <h4>Supplier:<span style={{ color: 'blue' }} >{supplier}</span></h4>

        </div>
    );
};

export default Item;