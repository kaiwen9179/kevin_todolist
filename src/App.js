import React, { useState } from "react";
import './App.css';
import AddItem from './components/AddItem/AddItem';
import ItemList from './components/ItemList/ItemList';
import { ListItemContextProvider } from '../src/store/ListItemStore';


const App = () => {

  const [NewListItem, setNewListItem] = useState([]);


  const ModifyTodoItems = (NewItem) => {

    setNewListItem(NewItem);
   console.log(NewItem);
   
};

  return (
    <div className='basicDiv'>
      <ListItemContextProvider>
        <div className='container'>
          <section id='ToDoList'>ToDo <b>List</b></section>
          <section id='SecondList'>A Simple todolist built react hooks & context</section>
        </div>
        <div>
          <AddItem NewAdd={(text)=>ModifyTodoItems(text)} ItemList={NewListItem}/>
          <ItemList NewAdd={(text)=>ModifyTodoItems(text)} ItemList={NewListItem} />
        </div>
      </ListItemContextProvider>
    </div>
  );
}

export default App;
