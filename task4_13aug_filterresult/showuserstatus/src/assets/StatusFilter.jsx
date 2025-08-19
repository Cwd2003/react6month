import React from "react";

export default function StatusFilter({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className="select">
      <option value="all">All</option>
      <option value="online">Online</option>
      <option value="offline">Offline</option>
    </select>
  );
}
