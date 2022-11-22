import React, { useState } from "react";
import Todotable from './Todotable';

export default function Todolist() {
    const [todo, setTodo] = useState({desc: '', date: ''});
    const [todos, setTodos] = useState([]);

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
        setTodo({desc: '', date: ''});
    }
    
    const deleteTodo = (row) => {
        setTodos(todos.filter((todo, index) => row !== index));
    }

    const handleChange = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }
    
    return (
        <div>
            <input type='text' placeholder='Date' name='date' value={todo.date} onChange={handleChange} />
            <input type='text' placeholder='Description' name='desc' value={todo.desc} onChange={handleChange} />
            <button onClick={addTodo}>Add</button>
            <Todotable todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}