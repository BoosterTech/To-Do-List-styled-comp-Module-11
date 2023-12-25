import { useState } from "react";
import { useLocalStorageUpdate} from "./useLocalStorage";



const getTasks = () => {
  const myTasks = localStorage.getItem("tasksData");

  return myTasks ? JSON.parse(myTasks) : [];
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(getTasks);

  useLocalStorageUpdate(tasks);

  const addNewTask = (newTaskContent) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () =>
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));

  return {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  };
};