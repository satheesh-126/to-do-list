import { useState, useEffect } from "react";
import './Style.css'

function Listtasks() {

const [value, setValue] = useState([]);

useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("username")) || [];
    setValue(stored);
    }, []);

const deleteTask = () => {
    const id = parseInt(prompt("Enter the Task ID to delete:"));
    if (!id) return;

    const updatedTasks = value.filter(t => t.id !== id);
    setValue(updatedTasks);
    localStorage.setItem("username", JSON.stringify(updatedTasks));
    };
const editTask = () => {
    const id = parseInt(prompt("Enter the Task ID to edit:"));
    if (!id) return;

    const taskToEdit = value.find(t => t.id === id);
    if (!taskToEdit) {
    alert("Task not found!");
    return;
    }

    const newTaskName = prompt("Enter new name:", taskToEdit.name);
    const newDesc = prompt("Enter new ID:", taskToEdit.Id);

    const updatedTasks = value.map(t =>
    t.id === id ? { ...t, name: newTaskName, Id: newDesc } : t
    );

    setValue(updatedTasks);
    localStorage.setItem("Task", JSON.stringify(updatedTasks));
    };

return (
    <div>
        <h2>List of tasks</h2>
        <div>
        {value.map((t) => (
        <div key={t.ID}>
            <h3>ID: {t.id}</h3>
            <p>name: {t.name}</p>
            <p>:ID: {t.Id}</p>
            <hr />
            </div>
        ))}
            <div>
            <button onClick={editTask}>Edit Task </button>
            <button onClick={deleteTask}>Delete Task </button>
            </div>
        </div>
        <br />
    </div>
    );
}

export default Listtasks;