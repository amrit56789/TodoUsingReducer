import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../reducers/todo/todoReducer";

export const store = configureStore({
    reducer : todoReducer
})