import React from "react"

interface Props {
    todos: any[]
}

export const Todotable: React.FC<Props> = ({todos}) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Description</td>
                        <td>Date</td>
                        <td>Priority</td>
                    </tr>
                    {todos.map((todo, index) =>
                        <>
                            <tr key={index}>
                                <td>{todo.desc}</td>
                                <td>{todo.date}</td>
                                <td>{todo.priority}</td>
                            </tr>
                        </>
                    )} 
                </tbody>
            </table>
        </div>
    )
}