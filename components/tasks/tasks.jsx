import React from "react";

import "./tasks.css";
import Task from "./task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={onDelete} />
      ) : (
        "Nothing to Display"
      )}
    </>
  );
};

export default Tasks;
