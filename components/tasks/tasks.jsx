import React from "react";

import "./tasks.css";
import Task from "./task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      <Task tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
    </>
  );
};

export default Tasks;
