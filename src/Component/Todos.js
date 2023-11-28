import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, isCompleteTodo } from "../reducers/todo/todoReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="">
            <h2 className="mb-2 font-bold text-3xl">Todos</h2>
            {todos && (
                todos.map((todo) => {
                    return (
                        <div
                            key={todo.id}
                            className="border-2 rounded py-2 px-3 my-4 w-full flex items-center justify-between"
                        >
                            <div className="flex items-center justify-between">
                                <input className="h-5 w-5 rounded-lg" type="checkbox" checked={todos.isCompleteTodo} id="flexCheckDefault" onChange={() => dispatch(isCompleteTodo(todo.id))} />
                                <p className="mx-3  text-xl font-semibold">{todo.text}</p>
                            </div>

                            <div className="flex items-center">
                                {todo.isComplete ? (<span className="bg-red-600 rounded text-white px-2 py-1">Completed</span>) : (" ")}
                                <FontAwesomeIcon icon={faTrash} onClick={() => dispatch(removeTodo(todo.id))}
                                    className="bg-red-500 mx-4 hover:bg-red-700 text-white font-bold py-2 px-2 rounded" />
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};
