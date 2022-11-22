import React, { useState } from "react";
import Todotable from "./Todotable";
import { Todo } from "../Interfaces";

export default function Todolist() {
    const [todo, setTodo] = useState({desc: '', date: '', priority: ''});
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, [event.target.id]: event.target.value});
    }

    const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos([...todos, todo]);
        setTodo({desc: '', date: '', priority: ''})
    }

    const deleteTodo = (row: number) => {
        setTodos(todos.filter((todo, index) => row !== index));
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                <input type='text' id='desc' value={todo.desc} onChange={handleChange} placeholder="Description" />
                <input type='text' id='date' value={todo.date} onChange={handleChange} placeholder="Date" />
                <input type='text' id='priority' value={todo.priority} onChange={handleChange} placeholder="Priority" />
                <input type='submit' value='Add' />
            </form>
            <Todotable todos={todos} deleteTodo={deleteTodo} />
        </div>
    )
}