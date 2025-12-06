import React from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import styles from "./AdminDashboard.module.css";

export default function AdminDashboard() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className={styles.main}>
        <h2>Admin Dashboard</h2>
        <p>Features:</p>
        <ul>
          <li>Upload CSV of students</li>
          <li>Search certificates</li>
          <li>Generate certificate view</li>
          <li>Download certificates</li>
        </ul>
      </main>
    </div>
  );
}
