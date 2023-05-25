import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLeft = () => {
    return (
        <Link to="/">
            <img src='https://cdn.dribbble.com/users/4843167/screenshots/14540242/dribbble-min_4x.jpg' alt='' width="120" height="50" className='object-cover' />
        </Link>
    );
};

export default NavbarLeft;