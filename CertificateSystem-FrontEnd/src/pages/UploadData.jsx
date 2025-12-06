import React from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import UploadExcel from "../components/Certificates/UploadExcel";
import styles from "./UploadData.module.css";

export default function UploadData() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className={styles.main}>
        <h2>Upload Student Data</h2>
        <UploadExcel />
      </div>
    </div>
  );
}
