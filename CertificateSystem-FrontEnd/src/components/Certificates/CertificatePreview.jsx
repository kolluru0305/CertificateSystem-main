import React, { forwardRef } from "react";
import styles from "./CertificatePreview.module.css";

const CertificatePreview = forwardRef(({ cert }, ref) => {
  if (!cert) return <div className={styles.empty}>No certificate to show</div>;
  return (
    <div className={styles.preview} ref={ref}>
      <div className={styles.box}>
        <h1 className={styles.heading}>Certificate of Internship</h1>
        <p className={styles.text}><strong>{cert.name}</strong></p>
        <p className={styles.text}>has successfully completed internship in <strong>{cert.domain}</strong></p>
        <p className={styles.period}>From <strong>{cert.startDate}</strong> to <strong>{cert.endDate}</strong></p>
        <p className={styles.id}>Certificate ID: {cert.certificateId}</p>
      </div>
    </div>
  );
});
export default CertificatePreview;
