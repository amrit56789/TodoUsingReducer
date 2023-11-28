import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todo/todoReducer";
import { Todos } from "../Component/Todos";

export const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <div className="mt-6">
            <form onSubmit={addTodoHandler} className="">
                <h1 className="mb-2 font-bold text-2xl">Todo</h1>
                <div className="flex flex-col">
                    <input
                        type="text"
                        className="py-2 px-4 rounded border border-dark"
                        placeholder="Enter a text..."
                        id="item"
                        name="item"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 w-32 rounded"
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
};
