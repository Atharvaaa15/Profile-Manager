import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Users, ArrowLeft } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButton = location.pathname !== "/";
  return (
    <nav
      style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        style={{
          // width: "100%",
          // maxWidth: "1280px",
          margin: "0 20px",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {showBackButton && (
              <button
                onClick={() => navigate(-1)}
                style={{
                  padding: "0.5rem",
                  borderRadius: "9999px",
                  backgroundColor: "transparent",
                  transition: "background-color 200ms",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#F3F4F6")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                <ArrowLeft
                  style={{
                    height: "1.25rem",
                    width: "1.25rem",
                    color: "#4B5563",
                  }}
                />
              </button>
            )}
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
              }}
            >
              <Users
                style={{ height: "1.5rem", width: "1.5rem", color: "#2563EB" }}
              />
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#1F2937",
                }}
              >
                Profile Manager
              </span>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Link
              to="/"
              style={{
                color: location.pathname === "/" ? "#2563EB" : "#4B5563",
                textDecoration: "none",
                transition: "color 200ms",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#2563EB")}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  location.pathname === "/" ? "#2563EB" : "#4B5563")
              }
            >
              Home
            </Link>
            <Link
              to="/admin"
              style={{
                color: location.pathname === "/admin" ? "#2563EB" : "#4B5563",
                textDecoration: "none",
                transition: "color 200ms",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#2563EB")}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  location.pathname === "/admin" ? "#2563EB" : "#4B5563")
              }
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
