import React from "react";

import "./tasks.css";
import Task from "./task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      <Task tasks={tasks} onDelete={onDelete} />
    </>
  );
};

export default Tasks;
