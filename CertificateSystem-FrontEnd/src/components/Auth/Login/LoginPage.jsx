import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      if (user.role === "admin") nav("/admin");
      else nav("/user");
    } else {
      alert("Invalid credentials. You can register first from Register page.");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleLogin}>
      <h2 className={styles.title}>Sign in</h2>
      <input
        className={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.actions}>
        <button className={styles.button} type="submit">Login</button>
      </div>
    </form>
  );
}
