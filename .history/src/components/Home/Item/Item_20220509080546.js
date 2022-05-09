import React from 'react';

const Item = ({item}) => {
    const {img,quantity,color,name,description,supplier,email}  = item;

    return (
        <div>
            <img src={img} alt="" />
            <h3>{name} </h3>

        </div>
    );
};

export default Item;