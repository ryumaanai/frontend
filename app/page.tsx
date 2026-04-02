"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  const save = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/items`, {
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