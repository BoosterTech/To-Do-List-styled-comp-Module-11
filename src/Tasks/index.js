import React from "react";
import { Button, ListItem, TaskContent, TasksList } from "./styled";

const Tasks = ({ tasks, hideDoneTasksVar, removeTask, toggleTaskDone }) => (
  <TasksList>
    {tasks.map((task, id) => (
      <ListItem key={id} hidden={hideDoneTasksVar && task.done}>
        <Button done onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✓" : ""}
        </Button>
        <TaskContent done={task.done}>{task.content}</TaskContent>
        <Button remove onClick={() => removeTask(task.id)}>
          🗑️
        </Button>
      </ListItem>
    ))}
  </TasksList>
);

export default Tasks;
