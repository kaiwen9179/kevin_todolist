import React, { useState } from "react";
import './App.css';
import AddItem from './components/AddItem/AddItem';
import ItemList from './components/ItemList/ItemList';
import { ListItemContextProvider } from '../src/store/ListItemStore';


const App = () => {

  return (
    <div className='basicDiv'>
      <ListItemContextProvider>
        <h1>To Do List</h1>
        <AddItem />
        <ItemList />
      </ListItemContextProvider>
    </div>
  );
}

export default App;
