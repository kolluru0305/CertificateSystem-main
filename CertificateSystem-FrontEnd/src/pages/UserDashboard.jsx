import React from "react";
import Navbar from "../components/Layout/Navbar";

export default function UserDashboard() {
  return (
    <div>
      <Navbar />
      <div style={{ padding:28 }}>
        <h2>User Dashboard</h2>
        <p>Use the search page to find your certificate by ID.</p>
      </div>
    </div>
  );
}
