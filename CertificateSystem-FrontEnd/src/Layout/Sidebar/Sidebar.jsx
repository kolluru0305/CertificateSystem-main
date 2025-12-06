import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className={styles.side}>
      <h3>Admin</h3>
      <nav className={styles.nav}>
        <Link to="/admin">Dashboard</Link>
        <Link to="/upload">Upload Data</Link>
        <Link to="/generate">Generate Certificates</Link>
        <Link to="/search">Search</Link>
      </nav>
    </aside>
  );
}
