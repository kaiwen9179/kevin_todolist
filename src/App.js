import React, { useState } from "react";
import './App.css';
import AddItem from './components/AddItem/AddItem';
import ItemList from './components/ItemList/ItemList';
import { ListItemContextProvider } from '../src/store/ListItemStore';


const App = () => {

  return (
    <div className='basicDiv'>
      <ListItemContextProvider>
        <div className='container'>
          {/* <section className='A'>
						<p id ='ToDoList'>ToDo <b>List</b></p>
					</section> */}
          <section id='ToDoList'>ToDo <b>List</b></section>
          <section id='SecondList'>A Simple todolist built react hooks & context</section>
        </div>
        <div>
          <AddItem />
          <ItemList />
        </div>
      </ListItemContextProvider>
    </div>
  );
}

export default App;
