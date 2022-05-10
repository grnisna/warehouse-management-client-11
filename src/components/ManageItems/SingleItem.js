import React from 'react';
import './Singleitems.css';

const SingleItem = ({ item }) => {

    const { name, quantity, color, description, supplier, img, _id } = item;
    return (
        <div>
            <div className='singleItems m-3 p-3 rounded border shadow'>
                <div className=''>
                    <img className='img-fluid' src={img} alt="" />
                </div>

                <div className='ms-5   p-5  content-area' >
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

                    <div className='button-section' >
                        <button className='btn btn-danger me-3'>Remove Item</button>
                        <button className='btn btn-info'>Add New Item</button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default SingleItem;