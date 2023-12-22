import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTasks } from "./useTasks";

function App() {
  const [hideDoneTasksVar, setHideDoneTasks] = useState(false);

  const toggleHideDone = () =>
    setHideDoneTasks((hideDoneTasksVar) => !hideDoneTasksVar);

  const { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask } =
    useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        bodyContent={<Form addNewTask={addNewTask} />}
        headerType="section__headerTop"
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
