import React, { useState } from 'react';
import './App.css';
import InputList from './Components/Input';
import Todo from './Components/Todo';

import { useSelector } from 'react-redux'

import { selectTodoList } from "./features/todoSlice"
import { Button } from '@material-ui/core';



function App() {

  const todoList = useSelector(selectTodoList)
  const [sort, setSort] = useState("all")

  return (
    <div className="App">


      <div className="app__container">
        <InputList />
        <div className="app__buttons">
          <Button onClick={() => setSort("active")}>Active</Button>
          <Button onClick={() => setSort("done")}>Done</Button>
          <Button onClick={() => setSort("all")}>All</Button>
        </div>
        <div className="app__todoContainer">
          {
            todoList.length > 0 && sort === "active" ?
              todoList.map(item => {
                return (

                  item.done === false && <Todo name={item.item} date={item.date} done={item.done}
                    id={item.id} />
                )
              }
              ) : null
          }
          {
            todoList.length > 0 && sort === "done" ?
              todoList.map(item => {
                return (

                  item.done === true && <Todo name={item.item}
                    date={item.date}
                    done={item.done}
                    id={item.id} />
                )
              }
              ) : null
          }
          {
            todoList.length > 0 && sort === "all" ?
              todoList.map(item =>

              (<Todo name={item.item} date={item.date} done={item.done}
                id={item.id} />
              )
              ) : null
          }
        </div>
      </div>

    </div>
  );
}

export default App;
