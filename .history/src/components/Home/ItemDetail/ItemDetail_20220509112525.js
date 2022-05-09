import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems/UseItems';


const ItemDetail = () => {
    const [items] = UseItems();    
    
    const {itemId} = useParams();
    
    const singleItem = items.find(item => item._id === itemId);
    console.log(singleItem.name);
    
    return (
        <div>
            <h5>This is item details;</h5>
            <div>
                <h1></h1>
            </div>
        </div>
    );
};

export default ItemDetail;