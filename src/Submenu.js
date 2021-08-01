import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
    const { isSubmenuOpen } = useGlobalContext();
    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}>
            Sub menu
        </aside>
    );
};

export default Submenu;
