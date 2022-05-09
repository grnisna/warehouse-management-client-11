import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

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
            <div className='items' >
                {
                    items.map(item => <Item 
                        key={items.index}
                        item = {item}
                        ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;