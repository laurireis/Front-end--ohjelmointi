import React, { useState } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { useRef } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Tabs from'@mui/material/Tabs';
import Tab from'@mui/material/Tab';

function App() {
  const [todo, setTodo] = useState({desc: '', date: '', priority: ''});
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('one');
  const gridRef = useRef();

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((todo, index) =>
        index !== gridRef.current.getSelectedNodes()[0].childIndex))
    } else {
      alert("Select row first");
    }
    
  }

  const handleChange = (event, value) => {
    setValue(value);
  }

  const columns = [
    {headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true},
    {headerName: 'Description', field: 'desc', sortable: true, filter: true, floatingFilter: true},
    {headerName: 'Priority', field: 'priority', sortable: true, filter: true, floatingFilter: true,
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}},
  ]

  return (
    <div className='App'>
      <h2>Todo list</h2>
      <Tabs value={value} onChange={handleChange}>
        <Tab value="one" label="Home" />
        <Tab value="two" label="Todos" />
      </Tabs>
      {value === 'one' && <div>Welcome!</div>}
      {value === 'two' && <div>
      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DesktopDatePicker
          label="Date"
          inputFormat='DD/MM/YYYY'
          value={todo.date}
          onChange={inputChanged => setTodo({...todo, date: inputChanged})}
          renderInput={(params) => <TextField {...params} />}
          />
          <TextField
            label="Description"
            variant="standard"
            name="desc" value={todo.desc}
            onChange={inputChanged} />
          <TextField
            label="Priority"
            variant="standard"
            name="priority" value={todo.priority}
            onChange={inputChanged} />
          <Button onClick={addTodo} variant="contained">Add</Button>
          <Button onClick={deleteTodo} variant="contained">Delete</Button>
        </LocalizationProvider>
      </Stack>

      <div
        className="ag-theme-material"
        style={{
          height: '500px',
          width: '50%',
          margin: 'auto'}}
        >
          <AgGridReact
            animateRows="true"
            ref={gridRef}
            onGridReady={params => gridRef.current = params.api}
            rowSelection="single"
            columnDefs={columns}
            rowData={todos}
          >
          </AgGridReact>
      </div>
      </div>}
    </div>
  );
}

export default App;