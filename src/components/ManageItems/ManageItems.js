import React from 'react';
import UseItems from '../Hooks/UseItems/UseItems';
import SingleItem from './SingleItem';

const ManageItems = () => {
    const [items] = UseItems();
    

    return (
        <div>
           <h1 className='p-3 text-center text-info' >TOTAL ITEM :  {items.length}</h1>
           <div>
               {
                   items.map(item =><SingleItem 
                            key={item._id}
                            item={item}
                    ></SingleItem>)
               }
           </div>

        </div>
    );
};

export default ManageItems;