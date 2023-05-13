import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLeft = () => {
    return (
        <Link to="/">
            <img src='/logo-shop.png' alt='' width="120" height="50" className='object-cover' />
        </Link>
    );
};

export default NavbarLeft;