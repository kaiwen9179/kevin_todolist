import React, { useState } from "react";
import './style.css';
import { ListItemStore } from '../../store/ListItemStore';
import moment from 'moment'

const ItemList = () => {


    const ListStore = ListItemStore();

    const [showCheck, setshowCheck] = useState(true);
    const [showItemCount, setshowItemCount] = useState(ListStore.storeListItems.length + ' item(s)');

    let NumShow = ListStore.storeListItems.length + ' item(s)'

    const completeChange = (id) => {

        const Items = [...ListStore.storeListItems];

        console.log(Items);
        console.log(id);

        let i;
        let len;
        for (i = 0, len = Items.length; i < len; i++) {

            if (Items[i].key === id) {

                Items[i].complete = !Items[i].complete;
                Items[i].completeTime = '完成時間：' + moment().format('YYYY-MM-DD HH:mm');
            }
        }

        ListStore.setStoreListItems(Items)

    };

    const DeleteItem = (id) => {

        const Items = [...ListStore.storeListItems];

        let i;
        let i_remove;
        let len;
        for (i = 0, len = Items.length; i < len; i++) {

            if (Items[i].key === id) {
                i_remove = i;
            }
        }

        console.log(id);
        Items.splice(i_remove, 1);

        ListStore.setStoreListItems(Items)

        console.log(Items);

    };



    const onChangeShow = (CheckStatus) => {

        console.log(CheckStatus);
        setshowCheck(!CheckStatus);

    };


    const TodoItems = (props) => {

        const { items } = props;

        let filterShow = items.filter(function (item, index, array) {
            if (showCheck === true) {
                return items;
            }
            else {
                return item.complete === false;
            }

        });
        setshowItemCount(filterShow.length + ' item(s)');

        return (

            filterShow.map((list) =>
                <div className="todolist" key={list.key}>

                    <p
                        style={{
                            textDecoration: list.complete ? "line-through" : ""

                        }}
                    >
                        {list.ToDoItem}
                        <button className={
                            list.complete ? "buttonStyleTest" : "buttonStyle"
                        }
                            type="button" onClick={() => DeleteItem(list.key)}>Delete</button>

                        <button className={
                            list.complete ? "buttonStyleTest" : "buttonStyle"
                        }
                            type="button" onClick={() => completeChange(list.key)}>Mark as Done</button>

                        <button className={
                            list.complete ? "buttonStyleT" : "buttonStyle"
                        }
                            type="button">{list.completeTime}</button>
                    </p >

                </div>
            )

        )

    };



    return (
        <div>

            <div className="Show_done_Items" >

                <p style={{ float: "left", width: "30%" }}>{showItemCount}</p>
                <p style={{ float: "right", width: "30%" }}>
                    <input type="checkbox" value="true" onChange={() => onChangeShow(showCheck)} checked={showCheck} />
                     Show done Items</p>
            </div>


            <div className="outblock">
                <TodoItems items={ListStore.storeListItems} />
            </div>

        </div>

    );

};

export default ItemList;