import React from "react";
import { Poiret_One } from "next/font/google";
import { faXmark } from "react-icons/fa";

const poiretOne = Poiret_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const Task = ({ tasks, onDelete }) => {
  // Adding Line-through when a task in done.

  const handleDone = (e) => {
    if (e.target.style.textDecoration === "line-through") {
      e.target.style.textDecoration = "none";
    } else {
      e.target.style.textDecoration = "line-through";
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <h3 className={poiretOne.className} key={task.id} onClick={handleDone}>
          {task.name}
          <button
            className="x"
            onClick={() => {
              onDelete(task.id);
            }}
          >
            X
          </button>
        </h3>
      ))}
    </div>
  );
};

export default Task;
