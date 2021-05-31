import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter(({ id }) => id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todoList.map(item => {
                if (action.payload.id === item.id) {
                    item.item = action.payload.item
                }
                return item.item
            })
        },
        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    if (item.done === true) {
                        item.done = false
                    }
                    else {
                        item.done = true
                    }
                }
                return item.done
            })


        }
    }
});

export const {
    saveTodo,
    removeTodo,
    setCheck,
    updateTodo
} = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer