import React, { useState } from "react";
import { Todotable } from "./Todotable";

export default function Todolist() {
    const [todo, setTodo] = useState({desc: '', date: '', priority: ''});
    const [todos, setTodos] = useState<any[]>([]);

    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, [event.target.id]: event.target.value});
    }

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }

    return (
        <div className='App'>
            <form onSubmit={submitForm}>
                <input type='text' id='desc' value={todo.desc} onChange={inputChanged} placeholder="Description" />
                <input type='text' id='date' value={todo.date} onChange={inputChanged} placeholder="Date" />
                <input type='text' id='priority' value={todo.priority} onChange={inputChanged} placeholder="Priority" />
                <input type='submit' value='Submit' />
            </form>
            <Todotable todos={todos} />
        </div>
    )
}