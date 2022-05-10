import React from 'react';
import Brands from '../Brands/Brands';
import Rechart from '../Rechart/Rechart';
import Carosel from './Carosel/Carosel';
import Items from './Items/Items';

const Home = () => {
    return (
        <div>            
            <Carosel></Carosel>
            <Items></Items>
            <Rechart></Rechart>
            <Brands></Brands>
        </div>
    );
};

export default Home;