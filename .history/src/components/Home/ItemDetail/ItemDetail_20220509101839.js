import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems/UseItems';


const ItemDetail = () => {
    const [items,setItems] = useState([]);
    useEffect( ()=>{
        fetch('items.json')
        .then( res => res.json())
        .then( data => console.log(data));
    } ,[]);
    console.log(items.length);

    // const {itemId} = useParams();
    
    // const singleItem = items.find(item => item.id === itemId);
    
    
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