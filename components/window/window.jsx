"use client";
import React from "react";
import Tasks from "../tasks/tasks";
import "./window.css";
import { useEffect, useState } from "react";

const Window = () => {
  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchApi();
      setTasks(data);
      console.log(data);
    };
    getTasks();
  }, []);
  const [tasks, setTasks] = useState([]);
  const fetchApi = async () => {
    const res = await fetch("https://json-ie9u.onrender.com/tasks");
    const data = await res.json();
    return data;
  };
  const handleDelete = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete", id);
    await fetch(`https://json-ie9u.onrender.com/tasks/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      <div className="container">
        <div>
          <h2>Tasks</h2>
        </div>
        <Tasks tasks={tasks} onDelete={handleDelete} />
      </div>
    </>
  );
};

export default Window;
