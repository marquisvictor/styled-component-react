import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    const displaySubmenu = () => {
        openSubmenu();
    };
    return (
        <nav className='nav'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img
                        src={logo}
                        alt='stripe you b*tches'
                        className='nav-logo'
                    />
                    <button onClick={openSidebar} className='btn toggle-btn'>
                        <FaBars />
                    </button>
                </div>
                <ul className='nav-links'>
                    <li>
                        <button
                            onMouseOver={displaySubmenu}
                            className='link-btn'
                        >
                            Products
                        </button>
                    </li>
                    <li>
                        <button
                            onMouseOver={displaySubmenu}
                            className='link-btn'
                        >
                            Developers
                        </button>
                    </li>
                    <li>
                        <button
                            onMouseOver={displaySubmenu}
                            className='link-btn'
                        >
                            Company
                        </button>
                    </li>
                </ul>
                <button className='btn signin-btn'>Sign in </button>
            </div>
        </nav>
    );
};

export default Navbar;
