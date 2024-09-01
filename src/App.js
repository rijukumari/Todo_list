import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    setListTodo([...listTodo, inputText]);

  }

  const deleteListItem = (key) =>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

  return (
    <div className='App-header'>
      <div className='mt-6'>
      <TodoInput addList={addList} />
      {/* <TodoList /> */}
      <h1 className='mt-6 text-2xl font-medium'>TODO</h1>
      <hr className='border-b-1  w-96 '/>
      {listTodo.map((listIteam,i)=>{
        return(
          <TodoList key={i} index={i} item = {listIteam} deleteItem ={deleteListItem}/>
        )
      })}

      </div>

    </div>
  );
}

export default App;
