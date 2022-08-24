import React from 'react';
import logo from '../../assets/logo_2.avif';
import './CollectionHeader.css';

const CollectionHeader = () => {
    return (
        <header className='collection_header_container'>
            <nav className='collection_navbar'>
                <div className='collection_navbar_logo'>
                    <img src={logo} alt='zomato logo' />
                </div>
                <ul className="collection_navbar_end">
                    <li>Log in</li>
                    <li>Sign up</li>
                </ul>
            </nav>
            <hr className='collection_header_hr' />
        </header>
    )
}

export default CollectionHeader