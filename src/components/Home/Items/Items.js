
import UseItems from '../../Hooks/UseItems/UseItems';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [items] = UseItems();
    
    return (
        <div>
            <h1 className='text-center' >Inventory Items</h1>
            <div className='items' >
                {
                    items.slice(0,6).map(item => <Item 
                        key={item._id}
                        item = {item}
                        ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;