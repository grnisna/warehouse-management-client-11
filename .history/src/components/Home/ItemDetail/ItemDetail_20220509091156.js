import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const id = useParams();
    
    return (
        <div>
            <h5>This is item details;</h5>
        </div>
    );
};

export default ItemDetail;