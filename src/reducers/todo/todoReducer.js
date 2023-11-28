import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
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
            const todoIndex = state.todos.find((todo) => todo.id === action.payload);
            if (todoIndex !== -1) {
                const updatedTodo = { ...state.todos[todoIndex] };
                updatedTodo.isComplete = !updatedTodo.isComplete;
                state.todos.splice(todoIndex, 1, updatedTodo);
            }
        },
        editTodo: (state, action) => {
            const todoToUpdate = state.todos.find((todo) => {
                return todo.id === action.payload.id
            });
            // if (todoToUpdate) {
            //     todoToUpdate.text = "";
            // }
        }
    }
})

export const { addTodo, removeTodo, isCompleteTodo, editTodo } = todoReducer.actions
export default todoReducer.reducer