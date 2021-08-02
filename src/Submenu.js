import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
    const {
        isSubmenuOpen,
        location,
        page: { page, links },
    } = useGlobalContext();
    const container = useRef(null);
    const [column, setColumn] = useState('');

    useEffect(() => {
        setColumn('');
        const submenu = container.current;
        const { center, bottom } = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;

        if (links.length === 2) {
            setColumn('col-2');
        } else if (links.length === 3) {
            setColumn('col-3');
        } else if (links.length > 3) {
            setColumn('col-4');
        }
    }, [location]);

    return (
        <aside
            ref={container}
            className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
        >
            <h4>{page}</h4>
            <div className={`submenu-center ${column}`}>
                {links.map((link, index) => {
                    const { url, label, icon } = link;
                    return (
                        <a key={index} href={url}>
                            {icon} {label}
                        </a>
                    );
                })}
            </div>
        </aside>
    );
};

export default Submenu;
