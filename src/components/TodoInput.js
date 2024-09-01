import React, { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";

function TodoInput(props) {
  const [inputText,setInputText] = useState()
  return (

    <div className='mt-9 flex '>
        <input type='text' placeholder='Enter Your Todo' value={inputText} className='pl-2 rounded-xl w-96 text-gray-950' onChange={e=>{setInputText(e.target.value)}}/>
             <IoMdAddCircleOutline className=' ml-4 size-11' onClick={()=>{props.addList(inputText)
               setInputText("")}}/>

       
    </div>
  )
}

export default TodoInput