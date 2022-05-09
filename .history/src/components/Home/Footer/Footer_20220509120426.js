import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div>
            <p>All right reserved by C</p>
            <p><span>Copyright &copy; {date} </span></p>
        </div>
    );
};

export default Footer;