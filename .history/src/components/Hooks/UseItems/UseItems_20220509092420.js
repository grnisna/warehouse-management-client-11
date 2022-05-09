import React, { useEffect, useState } from 'react';

const UseItems = () => {
    const [items,setItems] = useState([]);
    useEffect( ()=>{
        fetch('items.json')
        .then( res => res.json())
        .then( data => setItems(data));
    } ,[]);
    return [items];
};

export default UseItems;