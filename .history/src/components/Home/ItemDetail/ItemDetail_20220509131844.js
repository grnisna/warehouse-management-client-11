import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseItems from '../../Hooks/UseItems/UseItems';
import './ImageDetail.css';


const ItemDetail = () => {
    const [items,setItems] = UseItems();

    const { itemId } = useParams();

    const singleItem = items?.find(item => item._id === itemId);
    
    const handleDelivery = () =>{
        const [quantity,...rest] = items;
        console.log(quantity,rest);
    }

    return (
        <div>
            
            <div className='itemContainer m-3 p-3'>
                <div className=''>
                    <img className='img-fluid' src={singleItem?.img} alt="" />
                </div>
                <div className='ms-5 border rounded p-5 shadow content-area' >
                    <h3>
                        Product Name: {singleItem?.name}
                    </h3>
                    <h4>
                        Color:<span style={{ color: 'green' }} > {singleItem?.color.toUpperCase()}</span>
                    </h4>
                    <h4>
                        Total Qnt: <span style={{ color: 'orange' }} > {singleItem?.quantity} </span>
                    </h4>
                    <p>
                        {singleItem?.description}
                    </p>
                    <p>
                        Supplier: <span style={{ color: 'blue' }}>{singleItem?.supplier}</span>
                    </p>
                    <div className='btnContainer' >
                        <button onClick={handleDelivery} className='btn btn-primary'>Delivered</button>
                        
                        <form >
                            <input type="number" name="number" placeholder='Type Qnt' id="" />
                            <input type="submit" value="Add" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;