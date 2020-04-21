import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const ListItemContext = React.createContext();

export const ListItemStore = () => useContext(ListItemContext);

export const ListItemContextProvider = ({ children }) => {
    const [storeListItems, setStoreListItems] = useState([]);
    // const setstoreListItems = () => _setstoreListItems([...store_ListItems]);
    return (
        <ListItemContext.Provider
            value={{
                storeListItems,
                setStoreListItems,
            }}
        >
            {children}
        </ListItemContext.Provider>
    );
};

export default ListItemContextProvider;