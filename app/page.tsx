"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  const save = async () => {
    await fetch("http://localhost:8080/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    setName("");
  };

  return (
    <div style={{ padding: 20 }}>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        style={{ border: "1px solid black", color: "black", marginRight: 10 }} 
      />
      <button onClick={save} style={{ border: "1px solid black", padding: "0 10px" }}>
        Save
      </button>
    </div>
  );
}