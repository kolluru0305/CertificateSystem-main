import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import CertificatePreview from "../components/Certificates/CertificatePreview";

export default function ViewCertificate() {
  const { id } = useParams();
  const certs = JSON.parse(localStorage.getItem("certificates") || "[]");
  const cert = certs.find(c => String(c.certificateId) === String(id));
  return (
    <div>
      <Navbar />
      <div style={{ padding: 20 }}>
        {cert ? (
          <>
            <h2>Certificate View</h2>
            <CertificatePreview cert={cert} />
          </>
        ) : (
          <div style={{padding:20}}>Certificate not found for ID <strong>{id}</strong></div>
        )}
      </div>
    </div>
  );
}
