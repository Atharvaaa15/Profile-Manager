import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";

import { PlusCircle, Pencil, Trash2, Search } from "lucide-react";
import SearchFilters from "../components/SearchFilters";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ location: "", role: "" });

  const profiles = [
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
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      location: "Austin, TX",
      description:
        "Experienced in leading cross-functional teams and delivering successful products",
    },
  ];

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.875rem",
            fontWeight: "700",
            color: "#1F2937",
          }}
        >
          Profiles
        </h1>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            width: "100%",
          }}
        >
          <div
            style={{
              position: "relative",
              flex: "1",
              width: "100%",
              maxWidth: "20rem",
            }}
          >
            <Search
              style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#9CA3AF",
                height: "1.25rem",
                width: "1.25rem",
              }}
            />
            <input
              type="text"
              placeholder="Search profiles..."
              style={{
                width: "100%",
                paddingLeft: "2.5rem",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                outline: "none",
                transition: "ring 200ms",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "transparent";
                e.target.style.boxShadow = "0 0 0 2px #3B82F6";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#D1D5DB";
                e.target.style.boxShadow = "none";
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <SearchFilters onFilterChange={handleFilterChange} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </div>
    </div>
  );
}

export default Home;
