import { useState } from "react";

export default function TodoForm({ addNewTodo }) {
    let [addTodo, setAddTodo] = useState("");

    let updateTodoValue = (event) => {
        setAddTodo(event.target.value);
    };

    let handleSubmit = () => {
        if (addTodo.trim() === "") return;
        addNewTodo(addTodo); // Pass the value up to the parent
        setAddTodo("");      // Clear the input
    }

    return (
        <>
            <input
                placeholder="Add a task"
                value={addTodo}
                onChange={updateTodoValue}
            />
            &nbsp;&nbsp;&nbsp;
            <button onClick={handleSubmit}>Add Task</button>
        </>
    );
}