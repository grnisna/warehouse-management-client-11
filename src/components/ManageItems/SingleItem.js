import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseItems from '../Hooks/UseItems/UseItems';
import './Singleitems.css';

const SingleItem = ({ item }) => {
    const [items, setItems] = UseItems();
    console.log(items);

    const navigate = useNavigate();

    const { name, quantity, color, description, supplier, img, _id } = item;
    const hadleRemoveItem = () => {
        const agreeToDelete = window.confirm('Want to Remove??');
        if (agreeToDelete) {
            const url = `https://immense-brushlands-19382.herokuapp.com/items/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const restItem = items.filter(item => item._id === _id);
                    setItems(restItem);
                })
        }
    }
    return (
        <div>
            <div className='singleItems m-3 p-3 rounded border shadow'>
                <div>
                    <img className='responsive-image' src={img} alt="" />
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
                        <button onClick={hadleRemoveItem} className='btn btn-danger me-3'>Remove Item</button>
                        <button onClick={() => navigate('/additem')} className='btn btn-info'>Add New Item</button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default SingleItem;