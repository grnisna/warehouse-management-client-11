import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ImageDetail.css';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = () => {
   
    const { itemId } = useParams();

    const [updateItem, setUpdateItem] = useState({});

    
    useEffect( ()=>{
        const url = `https://immense-brushlands-19382.herokuapp.com/items/${itemId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdateItem(data));

    },[itemId,updateItem]);

    let {name,quantity,color,description,supplier,img} = updateItem;
    

    const handleAddItem = (event) =>{                
       event.preventDefault();
         let getValue = parseInt(event.target.number.value);
         let previusValue = parseInt(quantity);
         let updateQtn = previusValue + getValue;
         const newItem = {quantity:updateQtn}; 

        const url = `https://immense-brushlands-19382.herokuapp.com/items/${itemId}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newItem)
        })
        .then( res => res.json())
        .then( data => {
            toast(`Added to Quantity:${getValue}`);
            setUpdateItem(!updateItem);
            event.target.reset();
        });
       
    };

    const handleDeliverItem = () =>{                
       
         let getValue = parseInt(1);
         let previusValue = parseInt(quantity);
         let updateQtn = previusValue - getValue;
         const newItem = {quantity:updateQtn}; 

        const url = `https://immense-brushlands-19382.herokuapp.com/items/${itemId}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newItem)
        })
        .then( res => res.json())
        .then( data => {
            toast(`Decrease from Quantity:${getValue}`);
            setUpdateItem(!updateItem);
        });
       
    };
    return (
        <div>
            
            <div className='itemContainer m-3 p-3'>
                <div className=''>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className='ms-5 border rounded p-5 shadow content-area' >
                    <h3>
                        Product Name: {name}
                    </h3>
                    <h4>
                        Color:<span style={{ color: 'green' }} > {color}</span>
                    </h4>
                    <h4>
                        Total Qnt: <span style={{ color: 'orange' }} > {quantity} </span>
                    </h4>
                    <p>
                        {description}
                    </p>
                    <p>
                        Supplier: <span style={{ color: 'blue' }}>{supplier}</span>
                    </p>

                    <div className='btnContainer' >
                        <button onClick={handleDeliverItem} className='btn btn-primary'>Delivered</button>
                        
                        <form onSubmit={handleAddItem} >
                            <input type="number" name="number" placeholder='Type Qnt' id="" />
                            <input type="submit" value="Add Item Qtn" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;