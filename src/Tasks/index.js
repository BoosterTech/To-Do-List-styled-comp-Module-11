import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasksVar, removeTask, toggleTaskDone }) => (
    <ul className="tasksList">
        {tasks.map((task, id) => (
            <li key={id} className={`tasksList__item ${hideDoneTasksVar && task.done ? "tasksList__item--hidden" : ""}`}>
                <button className="tasksList__button tasksList__button--done"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasksList__taskContent ${task.done ? "tasksList__taskContent--done" : ""} `}>
                    {task.content}
                </span>
                <button
                    className="tasksList__button tasksList__button--remove"
                    onClick={() => removeTask(task.id)}>🗑️</button>
            </li>
        ))}
    </ul>
);

export default Tasks;