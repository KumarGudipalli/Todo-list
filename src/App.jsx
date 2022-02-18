import React from 'react';
import Input from './components/input';
import './App.css';
import Todoitem from './components/todoitem';
import {useSelector} from "react-redux"
import {selectTodoList} from "./features/todoslice"
<button onClick={() => {
  App()
}}>
Show Todo
</button>
function App() {
  const todolist =useSelector(selectTodoList)

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todocontainer">
                  {
                    todolist.map( item => {
                   return  <Todoitem 
                      name={item.item}
                      done={item.done} 
                      id={item.id}/>
                    })
                  }
        </div>
        <Input />
      </div>

    </div>
  );
}

export default App;
