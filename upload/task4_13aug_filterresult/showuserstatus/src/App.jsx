import React from "react";
import Userstatus from "./assets/Userstatus";


const users = [
  { id: 1, name: "Amit", status: "online" },
  { id: 2, name: "Babu", status: "offline" },
  { id: 3, name: "Chaman", status: "online" },
  { id: 4, name: "Divya Rao", status: "offline" },
  { id: 5, name: "Inder", status: "online" },
];

export default function App() {
  // ⬇️ Passing data to a child via props
  return <Userstatus users={users} />;

}
