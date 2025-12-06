import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  const logout = () => {
    localStorage.removeItem("loggedInUser");
    nav("/login");
  };

  return (
    <header className={styles.nav}>
      <div className={styles.brand} onClick={() => nav("/")}>CertVerify</div>
      <div>
        <button className={styles.btn} onClick={() => nav("/search")}>Search</button>
        <button className={styles.btn} onClick={logout}>Logout</button>
      </div>
    </header>
  );
}
