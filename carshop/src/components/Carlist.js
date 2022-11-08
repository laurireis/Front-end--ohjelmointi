import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Addcar from './Addcar';
import Editcar from './Editcar';

export default function Carlist() {
    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => fetchData(), []);

    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const fetchData = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err))
    }

    const deleteCar = (link) => {
        if (window.confirm('Are you sure?')) {
            fetch(link, {method: 'DELETE'})
            .then(res => fetchData())
            .catch(err => console.error(err))
        }
        handleClick();
    }

    const saveCar = (car) => {
        fetch('https://carstockrest.herokuapp.com/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const updateCar = (car, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
    }

    const columns = [
        {
            headerName: 'Brand',
            field: 'brand',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            headerName: 'Model',
            field: 'model',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            headerName: 'Color',
            field: 'color',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            headerName: 'Fuel',
            field: 'fuel',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            headerName: 'Year',
            field: 'year',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            headerName: 'Price',
            field: 'price',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            headerName: '',
            cellRenderer: field => <Editcar updateCar={updateCar} car={field.data} />,
            width: '130'
        },
        {
            headerName: '',
            field: '_links.self.href',
            cellRenderer: field => <Button variant='outlined' size='small' color='secondary' onClick={() => deleteCar(field.value)}>Delete</Button>,
            width: '130'
        }
    ]

    return (
        <div>
            <Addcar saveCar={saveCar} />
            <div
                className='ag-theme-material'
                style={{
                    height: '800px',
                    width: '100%',
                    margin: 'auto'}}
            >
                <AgGridReact
                    columnDefs={columns}
                    rowData={cars}
                    animateRows='true'
                />
            </div>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message='Deletion successful'
                action={deleteCar}
            />
        </div>
    );
}