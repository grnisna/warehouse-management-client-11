import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems/UseItems';


const ItemDetail = () => {
    const [item,setItem] = useState([]);
    useEffect( ()=>{
        fetch('items.json')
        .then( res => res.json())
        .then( data => setItem(data));
    } ,[]);;
    console.log(item);
    

    const {itemId} = useParams();
    
    const singleItem = item.find(it => it.id === itemId);
    const {name} = singleItem;
    
    return (
        <div>
            <h5>This is item details;{name} </h5>
            <div>
                {/* {items.map(item =><p key={item.index}>{item.name}</p>)} */}
            </div>
        </div>
    );
};

export default ItemDetail;