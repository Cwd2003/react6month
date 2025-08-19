import React from "react";

export default function UserList({ users }) {
  if (users.length === 0) return <p className="muted">No users found.</p>;

  return (
    <ul className="list">
      {users.map((u) => (
        <li key={u.id} className={`item ${u.status}`}>
          <span className="name">{u.name}</span>
          <span className="dot" />
          <span className="status">{u.status}</span>
        </li>
      ))}
    </ul>
  );
}
