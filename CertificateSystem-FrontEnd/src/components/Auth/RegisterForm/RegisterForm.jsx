import React, { useState } from "react";
import styles from "./RegisterForm.module.css";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // default role student
    users.push({ name, email, password, role: "student" });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered. Please login.");
    nav("/login");
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Register</h2>
      <input className={styles.input} placeholder="Full name" value={name} required onChange={(e)=>setName(e.target.value)} />
      <input className={styles.input} placeholder="Email" type="email" value={email} required onChange={(e)=>setEmail(e.target.value)} />
      <input className={styles.input} placeholder="Password" type="password" value={password} required onChange={(e)=>setPassword(e.target.value)} />
      <div className={styles.actions}>
        <button className={styles.button} type="submit">Create account</button>
      </div>
    </form>
  );
}
