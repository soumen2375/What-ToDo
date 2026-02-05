import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoForm from "./TodoForm";  // Import 1
import TodoItem from "./TodoItem";  // Import 2
import "./TodoApp.css";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Wash clothes", id: uuidv4(), isDone: false }]);

    let addNewTodo = (task) => {
        setTodos([...todos, { task: task, id: uuidv4(), isDone: false }]);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodo) => prevTodo.filter((prevTodo) => prevTodo.id != id));
    }

    let markAsDoneAll = () => {
        let allDone = todos.every(todo => todo.isDone);
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return { ...todo, isDone: !allDone };
            })
        );
    };

    let markAsDoneOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: (!todo.isDone) };
                } else {
                    return todo;
                }
            })
        );
    };

    let editTodo = (id, newTask) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, task: newTask };
                } else {
                    return todo;
                }
            })
        );
    };

    return (
        <div>
            {/* The Form Component */}
            <TodoForm addNewTodo={addNewTodo} />

            <br /><br />
            <hr />

            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    // The Item Component
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        markAsDoneOne={markAsDoneOne}
                        editTodo={editTodo}
                    />
                ))}
            </ul>

            <button onClick={() => { markAsDoneAll() }}>
                {todos.every(todo => todo.isDone) ? "Not Done All" : "Done All"}
            </button>
        </div>
    );
}