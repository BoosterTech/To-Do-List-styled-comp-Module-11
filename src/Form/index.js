import React, { useState } from "react";

import { Button, Input, TaskForm } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <TaskForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        className="taskForm__input "
        type="text"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </TaskForm>
  );
};

export default Form;
