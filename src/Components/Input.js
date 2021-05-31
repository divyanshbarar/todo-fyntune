import React, { useState } from 'react'
import "./Input.css"
import { useDispatch } from 'react-redux'
import { saveTodo } from "../features/todoSlice"
import { FormControl, InputLabel, Input } from '@material-ui/core'


function InputList() {
    const [input, setInput] = useState('')
    const [date, setDate] = useState('')
    const dispatch = useDispatch()

    const addTodo = (e) => {
        e.preventDefault()

        dispatch(saveTodo({
            item: input,
            date: date,
            done: false,
            id: Date.now()
        }))

        setInput("")
        setDate("")

    }

    return (
        <form className="input">
            <FormControl>
                <InputLabel htmlFor="my-input">Add your task</InputLabel>
                <Input type="text" value={input} onChange={(e) => setInput(e.target.value)} />


            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Date dd-mm-yyyy</InputLabel>
                <Input type="text" value={date} onChange={(e) => setDate(e.target.value)} />

            </FormControl>
            <input />
            <button disabled={!input} type="submit" onClick={addTodo}>Add</button>
        </form>
    )
}

export default InputList
