import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='backgrond p-3 text-center' >
            <p>All right reserved by CATHODIC HOUSE.</p>
            <p><span>Copyright &copy; {date} </span></p>
        </div>
    );
};

export default Footer;