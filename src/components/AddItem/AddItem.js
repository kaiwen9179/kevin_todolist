import React, { useState } from "react";
import './style.css';
import shortid from 'shortid';
import { ListItemStore } from '../../store/ListItemStore';


const AddItem = (props) => {

    const { NewAdd, ItemList } = props;
    const ListStore = ListItemStore();
    const { setStoreListItems } = ListItemStore();

    const [ListItem, setListItem] = useState('');

    const AddTodoItems = () => {

        if (ListItem === "") {
            console.log(ListItem);
            
            alert('請輸入備忘事項');
            return;
        }

        let Items = [...ItemList];

        let i;
        let len;
        let Bool_CanInsert = true;
        for (i = 0, len = Items.length; i < len; i++) {

            if (Items[i].ToDoItem === ListItem && Items[i].complete === false) {

                Bool_CanInsert = false;
            }
        }

        if (Bool_CanInsert === true) {

            Items.push({
                key: shortid.generate(),
                ToDoItem: ListItem,
                complete: false,
                completeTime: ''
            });

            NewAdd(Items);
        }
        else {
            alert('此備註已經新增過搂~');
        }

    };


    return (
        <div className='container'>
            <input placeholder="Add your task here…" type="text" name="AddItem" onChange={e => setListItem(e.target.value)} />
            <button type="button" onClick={AddTodoItems}>Add</button>
        </div>
    );
}

export default AddItem;
