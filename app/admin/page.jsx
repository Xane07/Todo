"use client";
import { useAmp } from "next/amp";
import Link from "next/link";
import { useState } from "react";

export default function Admin() {
  const api = "https://upgraded-space-engine-7469967946r2w5pr-8080.app.github.dev/tasks";
  const [name, setName] = useState("");

  const postData = async () => {
    const res = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        lineThrough: false,
      }),
    });
    const data = await res.json();
    console.log(data);
    setTimeout(() => {
      alert(`${name} added successfully..`);
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    
  };

  return (
    <>
      <div>
        <h3>Admin Dashboard</h3>
      </div>
      <form className="form">
        <input
          className="inputs"
          type="text"
          placeholder="Task"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <div>
        <Link className="back" href={"/"}>{`<--`}</Link>
      </div>
    </>
  );
}
