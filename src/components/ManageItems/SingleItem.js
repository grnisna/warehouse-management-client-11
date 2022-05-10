import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseItems from '../Hooks/UseItems/UseItems';
import './Singleitems.css';

const SingleItem = ({ item }) => {
    const navigate = useNavigate();    
    const [items,setItems] = UseItems();

    const { name, quantity, color, description, supplier, img, _id } = item;   
    
    const hadleRemoveItem = (id) => {       
        const agreeToDelete = window.confirm('Want to Remove??');

        if (agreeToDelete) {
            const url = `https://immense-brushlands-19382.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const restItem = items.filter(item => item._id !== id);                    
                    setItems(restItem);
                    toast('successFully REmoved');                    
                })
        }
    }
    return (
        <div>
            <div className='singleItems m-3 p-3 rounded border shadow'>
                <div className='w-50'>
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
                        <button onClick={()=>hadleRemoveItem(_id)} className='btn btn-danger me-3'>Remove Item</button>
                        <button onClick={() => navigate('/additem')} className='btn btn-info'>Add New Item</button>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default SingleItem;