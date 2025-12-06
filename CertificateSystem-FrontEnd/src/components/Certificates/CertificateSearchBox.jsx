import React from "react";
import styles from "./CertificateSearchBox.module.css";
import { useNavigate } from "react-router-dom";

export default function CertificateSearchBox() {
  const nav = useNavigate();
  const [id, setId] = React.useState("");

  const handleSearch = () => {
    if (!id) return alert("Enter certificate ID");
    nav(`/view/${encodeURIComponent(id.trim())}`);
  };

  return (
    <div className={styles.wrap}>
      <input className={styles.input} placeholder="Enter Certificate ID" value={id} onChange={(e)=>setId(e.target.value)} />
      <button className={styles.btn} onClick={handleSearch}>Search</button>
    </div>
  );
}
