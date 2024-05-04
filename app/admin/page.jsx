"use client";
import { useAmp } from "next/amp";
import Link from "next/link";
import { useState } from "react";

export default function Admin() {
  const api = "https://json-zce0.onrender.com/tasks";
  const [name, setName] = useState("");

  const postData = async () => {
    const res = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    alert(`${name} added successfully..`);
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
        <Link href={"/"}>Back</Link>
      </div>
    </>
  );
}
