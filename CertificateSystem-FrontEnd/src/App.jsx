import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import UploadData from "./pages/UploadData";
import CertificateSearch from "./pages/CertificateSearch";
import GenerateCertificate from "./pages/GenerateCertificate";
import ViewCertificate from "./pages/ViewCertificate";
import CertificateDownload from "./pages/CertificateDownload";
import styles from "./App.module.css";

function Protected({ children }) {
  const user = localStorage.getItem("loggedInUser");
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <Protected>
              <AdminDashboard />
            </Protected>
          }
        />
        <Route path="/upload" element={<UploadData />} />
        <Route path="/search" element={<CertificateSearch />} />
        <Route path="/generate" element={<GenerateCertificate />} />
        <Route path="/view/:id" element={<ViewCertificate />} />
        <Route path="/download/:id" element={<CertificateDownload />} />
        <Route path="/user" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}
