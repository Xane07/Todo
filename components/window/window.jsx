"use client";
import React from "react";
import Tasks from "../tasks/tasks";
import "./window.css";
import { useEffect, useState } from "react";
const api = "https://json-wlj8.onrender.com/tasks"

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
    const res = await fetch(api);
    const data = await res.json();
    return data;
  };
  const handleDelete = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete", id);
    await fetch(`${api}/${id}`, {
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
