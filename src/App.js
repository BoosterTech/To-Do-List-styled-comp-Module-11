import React, { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDoneTasksVar, setHideDoneTasks] = useState(false);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasksData")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasksData", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () =>
    setHideDoneTasks((hideDoneTasksVar) => !hideDoneTasksVar);

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

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        bodyContent={<Form addNewTask={addNewTask} />}
        headerType="section__header--top"
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDoneTasksVar={hideDoneTasksVar}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        bodyContent={
          <Tasks
            tasks={tasks}
            hideDoneTasksVar={hideDoneTasksVar}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        id="section__flex"
        headerType="section__header"
      />
    </Container>
  );
}

export default App;
