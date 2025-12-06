import React from "react";
import styles from "./UploadExcel.module.css";

function parseCSV(text) {
  const rows = text.trim().split(/\r?\n/).map(r => r.split(","));
  const [headers, ...data] = rows;
  return data.map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h.trim()] = row[i] ? row[i].trim() : "");
    return obj;
  });
}

export default function UploadExcel() {
  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target.result;
      // accept csv
      const parsed = parseCSV(text);
      const existing = JSON.parse(localStorage.getItem("certificates") || "[]");
      // map parsed to certificate shape
      const mapped = parsed.map(p => ({
        certificateId: p.certificateId || p.id || p.CertificateID || p.certificateID,
        name: p.name || p.studentName || p.fullname,
        domain: p.domain || p.internshipDomain || p.domainName || "",
        startDate: p.startDate || p.start || "",
        endDate: p.endDate || p.end || ""
      })).filter(c => c.certificateId && c.name);
      localStorage.setItem("certificates", JSON.stringify([...existing, ...mapped]));
      alert(`${mapped.length} certificates uploaded`);
    };
    reader.readAsText(f);
  };

  return (
    <div className={styles.wrap}>
      <h3>Upload CSV (certificateId,name,domain,startDate,endDate)</h3>
      <input type="file" accept=".csv" onChange={handleFile} />
      <p className={styles.note}>Export from Excel as CSV and upload.</p>
    </div>
  );
}
