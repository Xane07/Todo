import React from "react";
import { Poiret_One } from "next/font/google";

const poiretOne = Poiret_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const api = "https://json-wlj8.onrender.com/tasks"

const Task = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <h3
          className={`${poiretOne.className} h3 ${
            task.lineThrough ? "line-through" : ""
          }`}
          key={task.id}
          onClick={(e) => {
            task.lineThrough = !task.lineThrough;

            if (e.target.style.textDecoration === "line-through") {
              e.target.style.textDecoration = "none";
            } else {
              e.target.style.textDecoration = "line-through";
            }

            const fetchPut = async () => {
              const res = await fetch(
                `${api}/${task.id}`,
                {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: task.name,
                    lineThrough: task.lineThrough,
                  }),
                }
              );
              const data = await res.json();
              console.log(data);
            };
            fetchPut();
          }}
        >
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
