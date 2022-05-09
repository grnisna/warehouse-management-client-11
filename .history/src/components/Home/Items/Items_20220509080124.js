import React, { useEffect, useState } from 'react';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect( ()=>{
        fetch('items.json')
        .then( res => res.json())
        .then( data => setItems(data));
    } ,[]);
    return (
        <div>
            <h1>Inventory Items {items.length} </h1>
            <div>
                {
                    items.map(item => )
                }
            </div>
        </div>
    );
};

export default Items;