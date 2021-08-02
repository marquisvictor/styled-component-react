import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    const displaySubmenu = e => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();

        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;

        console.log(page, 'navbar');

        openSubmenu(page, { center, bottom });
    };

    const handleSubmenu = e => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu();
        }
    };

    return (
        <nav className='nav' onMouseOver={handleSubmenu}>
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
                            products
                        </button>
                    </li>
                    <li>
                        <button
                            onMouseOver={displaySubmenu}
                            className='link-btn'
                        >
                            developers
                        </button>
                    </li>
                    <li>
                        <button
                            onMouseOver={displaySubmenu}
                            className='link-btn'
                        >
                            company
                        </button>
                    </li>
                </ul>
                <button className='btn signin-btn'>Sign in </button>
            </div>
        </nav>
    );
};

export default Navbar;
