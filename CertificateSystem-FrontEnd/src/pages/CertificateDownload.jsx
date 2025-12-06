import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import CertificatePreview from "../components/Certificates/CertificatePreview";
import Navbar from "../components/Layout/Navbar";

export default function CertificateDownload() {
  const { id } = useParams();
  const certs = JSON.parse(localStorage.getItem("certificates") || "[]");
  const cert = certs.find(c => String(c.certificateId) === String(id));
  const ref = useRef();

  const handlePrint = () => {
    const printWindow = window.open("", "_blank", "noopener,noreferrer");
    if (!printWindow) return alert("Popup blocked. Allow popups to download.");
    printWindow.document.write(`
      <html>
        <head>
          <title>Certificate ${cert?.certificateId || ""}</title>
        </head>
        <body>
          <div id="root">${document.getElementById("print-area")?.innerHTML || ""}</div>
          <script>
            setTimeout(()=>{ window.print(); }, 500);
          </script>
        </body>
      </html>`);
    printWindow.document.close();
  };

  if (!cert) return <div style={{ padding: 20 }}><Navbar /><p>Certificate not found</p></div>;

  return (
    <div>
      <Navbar />
      <div style={{ padding: 20 }}>
        <div id="print-area">
          <CertificatePreview cert={cert} ref={ref} />
        </div>
        <div style={{ marginTop: 12 }}>
          <button onClick={handlePrint} style={{ padding: "8px 12px", borderRadius: 8, background: "var(--primary)", color: "#fff", border: "none", cursor: "pointer"}}>Download / Print</button>
        </div>
      </div>
    </div>
  );
}
