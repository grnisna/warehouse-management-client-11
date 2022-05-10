import React from 'react';
import image from '../../images/notFound/notFound.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <h1 className='text-center text-danger p-2 mt-3'>Opps!!!! </h1>
            <div className='notFoundImage'>
                <img className='img-fluid' src={image} alt="" />
            </div>
        </div>
    );
};

export default NotFound;