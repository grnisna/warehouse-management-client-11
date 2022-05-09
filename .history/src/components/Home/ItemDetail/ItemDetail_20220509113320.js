import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems/UseItems';
import './ImageDetail.css';


const ItemDetail = () => {
    const [items] = UseItems();

    const { itemId } = useParams();

    const singleItem = items?.find(item => item._id === itemId);

    return (
        <div>
            <h5>This is item details;</h5>
            <div className='itemContainer'>
                <div>
                    <img src={singleItem?.img} alt="" />
                </div>
                <div>
                    <h1> {singleItem?.name} </h1>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;