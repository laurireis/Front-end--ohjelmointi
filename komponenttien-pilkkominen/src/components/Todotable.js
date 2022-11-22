export default function Todotable(props) {
    return (
        <div>
            <table><tbody>
                {
                    props.todos.map((todo, index) =>
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                        <td><button onClick={() => props.deleteTodo(index)}>Delete</button></td>
                    </tr>)
                }
            </tbody></table>
        </div>
    );
}