import React, { useState } from "react";
import { PlusCircle, Pencil, Trash2, Search } from "lucide-react";
import { ProfileForm } from "../components/ProfileForm";
import SearchFilters from "../components/SearchFilters";

function AdminDashboard() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      location: "San Francisco, CA",
      description:
        "Full-stack developer with 5 years of experience in React and Node.js",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      location: "New York, NY",
      description:
        "Creating beautiful and intuitive user experiences for web and mobile applications",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingProfile, setEditingProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ location: "", role: "" });

  const handleDelete = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  const handleEdit = (profile) => {
    setEditingProfile(profile);
    setShowForm(true);
  };

  const handleSubmit = (formData) => {
    if (editingProfile) {
      setProfiles(
        profiles.map((p) =>
          p.id === editingProfile.id ? { ...formData, id: p.id } : p
        )
      );
    } else {
      setProfiles([...profiles, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    setEditingProfile(null);
  };

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch =
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation =
      !filters.location || profile.location === filters.location;
    const matchesRole = !filters.role || profile.role === filters.role;
    return matchesSearch && matchesLocation && matchesRole;
  });

  return (
    <div style={{ marginBottom: "24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "700", color: "#1f2937" }}>
          Admin Dashboard
        </h1>
        <button
          onClick={() => setShowForm(true)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "8px",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e40af")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
        >
          <PlusCircle
            style={{ height: "20px", width: "20px", border: "none" }}
          />
          Add Profile
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ position: "relative", flex: "1" }}>
          <Search
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9ca3af",
              height: "20px",
              width: "20px",
            }}
          />
          <input
            type="text"
            placeholder="Search profiles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              paddingLeft: "40px",
              paddingRight: "16px",
              paddingTop: "8px",
              paddingBottom: "8px",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              outline: "none",
              transition: "box-shadow 0.2s",
            }}
            onFocus={(e) =>
              (e.target.style.boxShadow = "0 0 0 2px rgba(59, 130, 246, 0.5)")
            }
            onBlur={(e) => (e.target.style.boxShadow = "none")}
          />
        </div>
        <SearchFilters onFilterChange={handleFilterChange} />
      </div>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <table
          style={{
            width: "100%",
            borderSpacing: "0",
            borderCollapse: "collapse",
          }}
        >
          <thead style={{ backgroundColor: "#f9fafb" }}>
            <tr>
              <th
                style={{
                  padding: "12px 24px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Profile
              </th>
              <th
                style={{
                  padding: "12px 24px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Role
              </th>
              <th
                style={{
                  padding: "12px 24px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Location
              </th>
              <th
                style={{
                  padding: "12px 24px",
                  textAlign: "right",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "white" }}>
            {filteredProfiles.map((profile) => (
              <tr key={profile.id}>
                <td style={{ padding: "16px 24px", whiteSpace: "nowrap" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        height: "40px",
                        width: "40px",
                        flexShrink: "0",
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={profile.image}
                        alt=""
                        style={{
                          height: "40px",
                          width: "40px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div style={{ marginLeft: "16px" }}>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#1f2937",
                        }}
                      >
                        {profile.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: "16px 24px", whiteSpace: "nowrap" }}>
                  <div style={{ fontSize: "14px", color: "#1f2937" }}>
                    {profile.role}
                  </div>
                </td>
                <td style={{ padding: "16px 24px", whiteSpace: "nowrap" }}>
                  <div style={{ fontSize: "14px", color: "#1f2937" }}>
                    {profile.location}
                  </div>
                </td>
                <td
                  style={{
                    padding: "16px 24px",
                    textAlign: "right",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#1f2937",
                  }}
                >
                  <button
                    onClick={() => handleEdit(profile)}
                    style={{
                      color: "#2563eb",
                      transition: "color 0.2s",
                      marginRight: "16px",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#1e40af")}
                    onMouseLeave={(e) => (e.target.style.color = "#2563eb")}
                  >
                    <Pencil style={{ height: "20px", width: "20px" }} />
                  </button>
                  <button
                    onClick={() => handleDelete(profile.id)}
                    style={{
                      color: "#dc2626",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#991b1b")}
                    onMouseLeave={(e) => (e.target.style.color = "#dc2626")}
                  >
                    <Trash2 style={{ height: "20px", width: "20px" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <ProfileForm
          profile={editingProfile}
          onSubmit={handleSubmit}
          onClose={() => {
            setShowForm(false);
            setEditingProfile(null);
          }}
        />
      )}
    </div>
  );
}

export default AdminDashboard;
