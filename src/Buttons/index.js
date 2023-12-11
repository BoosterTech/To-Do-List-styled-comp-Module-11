import React from "react";
import { Button, ButtonsWrapper } from "./styled";

const Buttons = ({ tasks, hideDoneTasksVar, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <ButtonsWrapper>
      <Button
        className="buttons__button"
        onClick={toggleHideDone}
        disabled={!tasks.some(({ done }) => done)}
      >
        {" "}
        {hideDoneTasksVar ? "Pokaż" : "Ukryj"} ukończone{" "}
      </Button>
      <Button
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
        onClick={setAllDone}
      >
        {" "}
        Ukończ wszystkie{" "}
      </Button>
    </ButtonsWrapper>
  );

export default Buttons;