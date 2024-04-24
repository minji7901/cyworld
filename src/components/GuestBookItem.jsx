import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";

export default function GuestBookItem({data,onDelete}) {
  const { id, text, date } = data;
  return (
    <li>
      <div className='item-title'>
          <p>{date}</p>
          <button onClick={()=>onDelete(id)}><RiDeleteBin5Line /></button>
      </div>
      <div className='item-cont'>
          <p>{text}</p>
      </div>
    </li>
  );
}

