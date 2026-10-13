import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <a href="/sign-in-up" style={styles.signinBtn}>
          Sign-In/Up
        </a>
        <a href="/dashboard" style={styles.dashboardBtn}>
          Dashboard
        </a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#8B7365",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    display: "flex",
    gap: "10px",
  },
  signinBtn: {
    backgroundColor: "#90EE90",
    color: "#000",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "500",
    border: "1px solid #333",
  },
  dashboardBtn: {
    backgroundColor: "#ADD8E6",
    color: "#000",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "500",
    border: "1px solid #333",
  },
};

export default Navbar;
