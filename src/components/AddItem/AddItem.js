import React, { useState } from "react";
import './style.css';
import shortid from 'shortid';
import { ListItemStore } from '../../store/ListItemStore';


const AddItem = () => {


    const ListStore = ListItemStore();
    const { setStoreListItems } = ListItemStore();

    const [ListItem, setListItem] = useState({});

    const AddTodoItems = () => {

        let Items = [...ListStore.storeListItems];
        Items.push({
            key:shortid.generate(),
            ToDoItem: ListItem,
            complete: false,
            completeTime: ''
        });

        setStoreListItems(Items);
       
    };


    return (
        <div style={{ marginBottom: "20px" }}>
            <input placeholder="Add your task here…" type="text" name="AddItem" onChange={e => setListItem(e.target.value)} />
            <button type="button" onClick={AddTodoItems}>Add</button>
        </div>
    );
}

export default AddItem;
