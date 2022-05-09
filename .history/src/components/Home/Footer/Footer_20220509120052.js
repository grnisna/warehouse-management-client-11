import React from 'react';

const Footer = () => {
    const date = new Date().toString()
    return (
        <div>
            <p><span>Copyright &copy; {date} </span></p>
        </div>
    );
};

export default Footer;