
export default function TodoItem({ todo, deleteTodo, markAsDoneOne, editTodo }) {

    // Edit logic
    let handleEdit = () => {
        const newVal = prompt("Edit Task:", todo.task);
        if (newVal !== null && newVal.trim() !== "") {
            editTodo(todo.id, newVal);
        }
    };

    return (
        <li key={todo.id}>
            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;

            {/* Edit */}
            <button onClick={handleEdit}><i className="fas fa-edit"></i></button>
            &nbsp;&nbsp;&nbsp;

            {/* Done */}
            <button onClick={() => markAsDoneOne(todo.id)}>
                {todo.isDone ? <i className="fa-solid fa-xmark"></i> : <i className="fa-regular fa-circle-check"></i>}
            </button>
            &nbsp;&nbsp;&nbsp;

            {/* Delete */}
            <button onClick={() => deleteTodo(todo.id)}><i className="fa-solid fa-trash"></i></button>
        </li>
    );
}