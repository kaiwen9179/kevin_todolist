import React, { Component, useState, useRef } from "react"
import ItemList from "../ItemList/ItemList"
import AddItem from "../AddItem/AddItem"
import { ListItemContextProvider } from '../../store/ListItemStore';
const Main = () => {

    return (
      <div >
      <ListItemContextProvider>

          <AddItem />

          <ItemList />

      </ListItemContextProvider>
  </div>
    );

};

export default Main;