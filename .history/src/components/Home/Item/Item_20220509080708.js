import React from 'react';

const Item = ({item}) => {
    const {img,quantity,color,name,description,supplier,email}  = item;

    return (
        <div>
            <img src={img} alt="Augusta Pate" />
            <h3>{name} </h3>
            <h4>Quantity:{quantity} </h4>
            

        </div>
    );
};

export default Item;