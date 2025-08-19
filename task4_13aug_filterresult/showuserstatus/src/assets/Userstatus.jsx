import React, { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import UserList from "./UserList";

export default function Userstatus({ users }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  // filter logic uses users passed in via props
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return users.filter((u) => {
      const matchesName = u.name.toLowerCase().includes(q);
      const matchesStatus = status === "all" ? true : u.status === status;
      return matchesName && matchesStatus;
    });
  }, [users, query, status]);

  return (
    <div className="wrap">
      {/*Child components receive values & callbacks via props */}
      <SearchBar value={query} onChange={setQuery} />
      <StatusFilter value={status} onChange={setStatus} />
      <UserList users={filtered} />
    </div>
  );
}
