import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linkContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linkHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linkContainerRef.current.style.height = `${linkHeight}px`;
        } else {
            linkContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src={logo} alt='logo' />
                    <button
                        onClick={() => setShowLinks(!showLinks)}
                        className='nav-toggle'
                    >
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linkContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map(link => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}> {text} </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                )
                <ul className='social-icons'>
                    {social.map(socials => {
                        const { id, url, icon } = socials;
                        return (
                            <li key={id}>
                                <a href={url}>{icon} </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
