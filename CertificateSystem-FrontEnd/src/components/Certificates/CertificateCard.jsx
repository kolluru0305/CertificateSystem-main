import React from "react";
import styles from "./CertificateCard.module.css";
import { Link } from "react-router-dom";

export default function CertificateCard({ cert }) {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.title}>{cert.name}</div>
        <div className={styles.small}>ID: {cert.certificateId}</div>
        <div className={styles.small}>Domain: {cert.domain}</div>
        <div className={styles.small}>Period: {cert.startDate} — {cert.endDate}</div>
      </div>
      <div className={styles.actions}>
        <Link to={`/view/${encodeURIComponent(cert.certificateId)}`} className={styles.link}>View</Link>
        <Link to={`/download/${encodeURIComponent(cert.certificateId)}`} className={styles.link}>Download</Link>
      </div>
    </div>
  );
}
