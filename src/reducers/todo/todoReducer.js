import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Hello world"
    }]
}

export const todoReducer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        },
        isCompleteTodo: (state, action) => {
            const todoToUpdate = state.todos.find((todo) => todo.id === action.payload);
            if (todoToUpdate) {
                todoToUpdate.isComplete = !todoToUpdate.isComplete;
            }
        }
    }
})

export const { addTodo, removeTodo, isCompleteTodo } = todoReducer.actions
export default todoReducer.reducer