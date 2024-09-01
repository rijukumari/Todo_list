import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";

function TodoList(props) {
  return (
    <div className=' mt-9'>
      <li className='rounded-xl pl-2 pt-2  h-11 w-96 border  list-none '>
        {props.item}
        <span>
        <AiOutlineDelete className='  inline-flex float-right size-7' onClick={e=>{
          props.deleteItem(props.index)
        }}/> 

        </span>
      </li>
        
    </div>
  )
}

export default TodoList