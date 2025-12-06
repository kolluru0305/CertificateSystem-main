import React, { useEffect, useState } from "react";
import Navbar from "../components/Layout/Navbar";
import CertificateSearchBox from "../components/Certificates/CertificateSearchBox";
import CertificateCard from "../components/Certificates/CertificateCard";

export default function CertificateSearch() {
  const [certs, setCerts] = useState([]);
  useEffect(() => {
    setCerts(JSON.parse(localStorage.getItem("certificates") || "[]"));
  }, []);
  return (
    <div>
      <Navbar />
      <div style={{ padding: 20, maxWidth: 980, margin: "0 auto" }}>
        <h2>Search Certificates</h2>
        <CertificateSearchBox />
        <h3 style={{ marginTop: 22 }}>All Certificates</h3>
        {certs.length === 0 ? (
          <p style={{ color: "#64748b" }}>No certificates uploaded yet.</p>
        ) : (
          certs.map((c) => <CertificateCard key={c.certificateId} cert={c} />)
        )}
      </div>
    </div>
  );
}
