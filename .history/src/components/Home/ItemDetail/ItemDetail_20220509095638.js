import React from 'react';
import { useParams } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems/UseItems';


const ItemDetail = () => {
    const [items] = UseItems();
    const {itemId} = useParams();
    console.log(itemId);
    const singleItem = items.find(item => item.id === itemId);
    
    return (
        <div>
            <h5>This is item details;</h5>
            <div>
                {/* {items.map(item =><p key={item.index}>{item.name}</p>)} */}
            </div>
        </div>
    );
};

export default ItemDetail;