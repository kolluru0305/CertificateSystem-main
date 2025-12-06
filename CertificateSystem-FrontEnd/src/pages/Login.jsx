import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.page}>
      <div className={styles.box}>
        <div className={styles.left}>
          <LoginForm />
          <div style={{textAlign:"center", marginTop:8}}>
            <span>Don't have an account? </span>
            <Link to="/register">Register</Link>
          </div>
        </div>
        <div className={styles.right}>
          <h2>About</h2>
          <p>This project helps upload and verify internship certificates. Admins upload student data via CSV. Students search by ID to view & download certificates.</p>
        </div>
      </div>
    </div>
  );
}
