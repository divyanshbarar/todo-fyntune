import { Checkbox, IconButton } from '@material-ui/core'
import React, { useRef } from 'react'
import "./Todo.css"
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import Fade from 'react-reveal/Fade';
import { useDispatch } from "react-redux"
import { setCheck, removeTodo, updateTodo } from "../features/todoSlice"

function Todo({ name, done, id, date }) {
    const dispatch = useDispatch();

    const inputRef = useRef(true);
    const changeFocus = () => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
    }
    const handleChange = () => {
        dispatch(setCheck(id))

    }
    const handleClick = () => {
        dispatch(removeTodo(id))
    }
    const handleEdit = (id, value, e) => {
        if (e.which === 13 && value.length > 0) {
            updateTodo({ id, item: value });
            inputRef.current.disabled = true;
        }

    }
    return (
        <div className={`todo ${done && "todoouter--done"}`} >


            <div className="todo__text">
                <textarea ref={inputRef} disabled={inputRef} className={done && "todo--done"} defaultValue={name}
                    onKeyPress={(e) => handleEdit(id, inputRef.current.value, e)}
                />
                <p>Date: {date}</p>
            </div>
            <div className="todo__functions">
                <Checkbox
                    checked={done}
                    color="secondary"
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <IconButton onClick={handleClick}>
                    <DeleteForeverIcon />
                </IconButton>
                <IconButton>
                    <EditIcon onClick={changeFocus} color="secondary" />
                </IconButton>
            </div>




        </div>
    )
}

export default Todo
