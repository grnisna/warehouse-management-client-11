import React from 'react';
import UseItems from '../../Hooks/UseItems/UseItems';


const ItemDetail = () => {
    const [items] = UseItems();
    return (
        <div>
            <h5>This is item details;</h5>
            <div>
                {items.map()}
            </div>
        </div>
    );
};

export default ItemDetail;