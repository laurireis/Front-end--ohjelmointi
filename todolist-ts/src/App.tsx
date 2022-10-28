import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState({desc: '', date: '', priority: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo, [event.target.id]: event.target.value});
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }



  return (
    <>
      <form onSubmit={submitForm}>
        <label htmlFor='desc'>Description</label>
        <input type='text' id='desc' value={todo.desc} onChange={inputChanged} />
        <label htmlFor='date'>Date</label>
        <input type='text' id='date' value={todo.date} onChange={inputChanged} />
        <label htmlFor='priority'>Priority</label>
        <input type='text' id='priority' value={todo.priority} onChange={inputChanged} />
        <input type='submit' value='Submit' />
      </form> 
    </>
  );
}

export default App;
