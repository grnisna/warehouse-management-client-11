import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { img, quantity, color, name, description, supplier,_id} = item;
    
    const navigate = useNavigate();
    const handleBtn = ()=>{
        navigate(`/itemDetail/${_id}`)
    } 
    return (
        <div  className='p-3 border rounded m-2 shadow-sm' >
            <div className='singleItem'>                
                    <img className='w-50 me-5' src={img} alt="Augusta Pate" />      
                <div>
                    <h6>Product Name:<span style={{ color: 'blue' }} >{name}</span></h6>
                    <p>Quantity:<span style={{ color: 'blue' }} >{quantity}</span></p>
                    <p>Color:<span style={{ color: 'orange' }} >{color}</span></p>

                </div>
            </div>

            <div  >
                <p className='mt-3 description'> {description} </p>

                <div className='btn-seciton' >

                <h6>Supplier:<span style={{ color: 'blue' }} >{supplier}</span></h6>
                <button onClick={handleBtn}  className='btn btn-secondary' >More Details</button>
                </div>
            </div>
        </div>
    );
};

export default Item;