import React, { useState, useContext } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    };
    const openModal = () => {
        setModalOpen(true);
    };

    const closeSiderbar = () => {
        setSidebarOpen(false);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                sidebarOpen,
                modalOpen,
                openSidebar,
                closeSiderbar,
                openModal,
                closeModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
