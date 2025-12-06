import React, { useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import styles from "./GenerateCertificate.module.css";

export default function GenerateCertificate() {
  const [cert, setCert] = useState({ certificateId: "", name: "", domain: "", startDate: "", endDate: "" });

  const handleGenerate = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("certificates") || "[]");
    if (!cert.certificateId || !cert.name) return alert("Enter id and name");
    existing.push(cert);
    localStorage.setItem("certificates", JSON.stringify(existing));
    alert("Certificate created");
    setCert({ certificateId: "", name: "", domain: "", startDate: "", endDate: "" });
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main style={{ marginLeft: 240, padding: 20 }}>
        <h2>Generate Certificate</h2>
        <form className={styles.form} onSubmit={handleGenerate}>
          <input placeholder="Certificate ID" value={cert.certificateId} onChange={e=>setCert({...cert,certificateId:e.target.value})} />
          <input placeholder="Name" value={cert.name} onChange={e=>setCert({...cert,name:e.target.value})} />
          <input placeholder="Domain" value={cert.domain} onChange={e=>setCert({...cert,domain:e.target.value})} />
          <input placeholder="Start Date" value={cert.startDate} onChange={e=>setCert({...cert,startDate:e.target.value})} />
          <input placeholder="End Date" value={cert.endDate} onChange={e=>setCert({...cert,endDate:e.target.value})} />
          <button type="submit">Create</button>
        </form>
      </main>
    </div>
  );
}
