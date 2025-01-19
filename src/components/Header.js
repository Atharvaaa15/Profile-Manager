import React from "react";
import HomeIcon from "@mui/icons-material/Home";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          margin: "0 10px",
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <HomeIcon
              style={{ height: "24px", width: "24px", color: "#2563eb" }}
            />
            <span
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#1f2937",
              }}
            >
              ProfileManager
            </span>
          </div>

          {/* Navigation Section */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px", // Tailwind's space-x-6
            }}
          >
            <a
              href="/"
              style={{
                color: "#4b5563", // Tailwind's text-gray-600
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#2563eb")}
              onMouseOut={(e) => (e.target.style.color = "#4b5563")}
            >
              Home
            </a>
            <a
              href="/admin"
              style={{
                color: "#4b5563",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#2563eb")}
              onMouseOut={(e) => (e.target.style.color = "#4b5563")}
            >
              Admin
            </a>
            <a
              href="/map"
              style={{
                color: "#4b5563",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#2563eb")}
              onMouseOut={(e) => (e.target.style.color = "#4b5563")}
            >
              Map View
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
