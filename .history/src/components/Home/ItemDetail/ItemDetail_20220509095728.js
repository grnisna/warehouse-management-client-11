import React from 'react';
import { useParams } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems/UseItems';


const ItemDetail = () => {
    const [items] = UseItems();
    const {itemId} = useParams();
    
    const singleItem = items.find(item => item.id === itemId);
    const {name} = singleItem;
    return (
        <div>
            <h5>This is item details; {name} </h5>
            <div>
                {/* {items.map(item =><p key={item.index}>{item.name}</p>)} */}
            </div>
        </div>
    );
};

export default ItemDetail;