import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems/UseItems';


const ItemDetail = () => {
    const [item,setItem] = useState([]);
    useEffect( ()=>{
        fetch('https://immense-brushlands-19382.herokuapp.com/items')
        .then( res => res.json())
        .then( data => setItem(data));
    } ,[]);;
    
    const {itemId} = useParams();
    
    const singleItem = item.find(it => it._id === itemId);
    console.log (singleItem);
    
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