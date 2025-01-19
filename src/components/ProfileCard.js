import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProfileCard({ name, role, image, location, description }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "0.75rem",
        cursor: "pointer",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        transition: "box-shadow 300ms",
        overflow: "hidden",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 1px 2px rgba(0, 0, 0, 0.05)")
      }
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "12rem",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </div>
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#1F2937",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#4B5563",
            }}
          >
            {role}
          </p>
        </div>
        <p
          style={{
            color: "#374151",
          }}
        >
          {description}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#4B5563",
            }}
          >
            <MapPin
              style={{
                height: "1rem",
                width: "1rem",
                marginRight: "0.25rem",
              }}
            />
            <span
              style={{
                fontSize: "0.875rem",
              }}
            >
              {location}
            </span>
          </div>
          <button
            onClick={() => navigate("/map/1")}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#2563EB",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              transition: "background-color 200ms",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1D4ED8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#2563EB")
            }
          >
            View on Map
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
