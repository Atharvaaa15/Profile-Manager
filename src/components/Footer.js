import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1f2937",
        color: "#ffffff",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          margin: "0",
          padding: "24px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h3
              style={{
                fontWeight: "bold",
              }}
            >
              ProfileManager
            </h3>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "0.875rem",
                marginTop: "4px",
              }}
            >
              Connecting people and places
            </p>
          </div>
          <p
            style={{
              color: "#9ca3af",
              fontSize: "0.875rem",
            }}
          >
            © 2025 ProfileManager. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
