import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import GuestWrite from './GuestWrite';
import GuestBookItem from './GuestBookItem';
import WriteReducer from "../WriteReducer";

export default function GuestBook() {
  const initialData = [];
  const [guest, dispatch] = useReducer(WriteReducer, initialData);
  let today = new Date().toLocaleString();

  function handleWrite(text) {
    dispatch({
      type: 'write',
      id: uuidv4(),
      text,
      date: today,
    })
  }
  function handleChange(data) {
    dispatch({
      type: 'changed',
      data,
    })
  }
  function handleDelete(dataId) {
    dispatch({
      type: 'deleted',
      id: dataId,
    })
  }

  return (
    <div className='inner'>
      <header>
        <h1>방명록</h1>
        <p>welcome to my page!</p>
      </header>
      <section>
        <GuestWrite onWrite={handleWrite}/>
        <ul className='list'>
          {
            guest.map((data) =>(
              <GuestBookItem
                key={data.id}
                data={data}
                ondelete={handleDelete}
              />
              )
            )
          }     
        </ul>
      </section>
    </div>
  );
}

