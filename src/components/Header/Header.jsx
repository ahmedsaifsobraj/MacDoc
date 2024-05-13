import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <div>
            <nav  >
                <Link className=' mr-5 text-2xl font-thin text-gray-500' to={'/'}>Home</Link>
                <Link className=' mr-5 text-2xl font-thin text-gray-500' to={'/reviews'}>Reviews</Link>
                <Link className=' mr-5 text-2xl font-thin text-gray-500' to={'/dashboard'}>Dashboard</Link>
                <Link className=' text-2xl font-thin text-gray-500' to={'/blogs'}>Blogs</Link>
            </nav>
        </div>
    );
};

export default Header;