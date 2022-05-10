import React from 'react';
import UseItems from '../Hooks/UseItems/UseItems';
import SingleItem from './SingleItem';

const ManageItems = () => {
    const [useItems] = UseItems();
    

    return (
        <div>
           <h1 className='p-3 text-center text-info' >TOTAL ITEM :  {useItems.length}</h1>
           <div>
               {
                   useItems.map(item =><SingleItem 
                            key={item._id}
                            item={item}
                    ></SingleItem>)
               }
           </div>

        </div>
    );
};

export default ManageItems;