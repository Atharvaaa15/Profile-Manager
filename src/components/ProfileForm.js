import React from "react";
import { X } from "lucide-react";

export function ProfileForm({ profile, onSubmit, onClose }) {
  const [formData, setFormData] = React.useState(
    profile || {
      name: "",
      role: "",
      location: "",
      image: "",
      description: "",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          width: "100%",
          maxWidth: "640px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
            {profile ? "Edit Profile" : "Add New Profile"}
          </h2>
          <button
            onClick={onClose}
            style={{
              padding: "8px",
              borderRadius: "50%",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            <X style={{ height: "20px", width: "20px" }} />
          </button>
        </div>
        <form onSubmit={handleSubmit} style={{ padding: "24px", gap: "16px" }}>
          {["Name", "Role", "Location", "Image URL", "Description"].map(
            (label, index) => (
              <div key={index}>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#4b5563",
                    marginBottom: "4px",
                  }}
                >
                  {label}
                </label>
                {label === "Description" ? (
                  <textarea
                    value={formData[label.toLowerCase().replace(" ", "")]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [label.toLowerCase().replace(" ", "")]: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      outline: "none",
                      transition: "box-shadow 0.2s",
                      boxShadow: "0 0 0 2px rgba(59, 130, 246, 0)",
                    }}
                    rows={4}
                    required
                    onFocus={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px rgba(59, 130, 246, 0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px rgba(59, 130, 246, 0)")
                    }
                  />
                ) : (
                  <input
                    type={label === "Image URL" ? "url" : "text"}
                    value={formData[label.toLowerCase().replace(" ", "")]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [label.toLowerCase().replace(" ", "")]: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      outline: "none",
                      transition: "box-shadow 0.2s",
                      boxShadow: "0 0 0 2px rgba(59, 130, 246, 0)",
                    }}
                    required
                    onFocus={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px rgba(59, 130, 246, 0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.boxShadow =
                        "0 0 0 2px rgba(59, 130, 246, 0)")
                    }
                  />
                )}
              </div>
            )
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "16px",
              paddingTop: "16px",
            }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "8px 16px",
                color: "#374151",
                borderRadius: "8px",
                transition: "background-color 0.2s",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f3f4f6")}
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: "8px 16px",
                backgroundColor: "#2563eb",
                color: "white",
                borderRadius: "8px",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e40af")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
            >
              {profile ? "Save Changes" : "Add Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
