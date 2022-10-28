import React, { useState } from "react";
import { Tabs } from "@mui/material";
import Tab from "@mui/material";

export default function TabApp() {

    const [value, setValue] = useState('home');

    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <div>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="home" label="Home" />
                <Tab value="todos" label="Todos" />
            </Tabs>
            {value === "home" && <div>Home</div>}
            {value === "todos" && <div>Todos</div>}
        </div>
    );
}