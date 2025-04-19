import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";

function TodoList(props) {
  return (
    <div className=' mt-9 px-4'>
      <li className='flex items-center justify-between rounded-xl pl-4 pr-4 py-2 h-auto w-full sm:w-96 border list-none bg-white shadow-sm
'>
        {props.item}
        <span>
        <AiOutlineDelete className='- text-red-500 text-xl cursor-pointer' onClick={e=>{
          props.deleteItem(props.index)
        }}/> 

        </span>
      </li>
        
    </div>
  )
}

export default TodoList