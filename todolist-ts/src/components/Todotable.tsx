import { Todo } from '../Interfaces';

interface IProps {
    todos: Array<Todo>,
    deleteTodo: (row: number) => void;
}

export default function Todotable(props: IProps) {
    return (
        <div>
            <table id='todotable'><tbody>
                {
                    props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.desc}</td>
                            <td>{todo.date}</td>
                            <td>{todo.priority}</td>
                            <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
                        </tr>)
                }
            </tbody></table>
        </div>
    )
}