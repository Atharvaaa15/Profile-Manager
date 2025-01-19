import React from "react";

function SearchFilters({ onFilterChange }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <select
        onChange={(e) => onFilterChange("location", e.target.value)}
        style={{
          padding: "0.5rem 0.75rem",
          border: "1px solid #D1D5DB",
          borderRadius: "0.5rem",
          outline: "none",
          transition: "box-shadow 200ms, border-color 200ms",
        }}
        onFocus={(e) => {
          e.target.style.boxShadow = "0 0 0 2px #3B82F6";
          e.target.style.borderColor = "transparent";
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = "none";
          e.target.style.borderColor = "#D1D5DB";
        }}
      >
        <option value="">All Locations</option>
        <option value="San Francisco, CA">San Francisco, CA</option>
        <option value="New York, NY">New York, NY</option>
        <option value="Austin, TX">Austin, TX</option>
      </select>
      <select
        onChange={(e) => onFilterChange("role", e.target.value)}
        style={{
          padding: "0.5rem 0.75rem",
          border: "1px solid #D1D5DB",
          borderRadius: "0.5rem",
          outline: "none",
          transition: "box-shadow 200ms, border-color 200ms",
        }}
        onFocus={(e) => {
          e.target.style.boxShadow = "0 0 0 2px #3B82F6";
          e.target.style.borderColor = "transparent";
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = "none";
          e.target.style.borderColor = "#D1D5DB";
        }}
      >
        <option value="">All Roles</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="UX Designer">UX Designer</option>
        <option value="Product Manager">Product Manager</option>
      </select>
    </div>
  );
}

export default SearchFilters;
