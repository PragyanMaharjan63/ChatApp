import React from "react";
import { NavLink } from "react-router-dom";

export default function navbar() {
  return (
    <div>
      <div className="flex flex-col gap-2 p-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded  transition-all ${
              isActive ? "bg-blue-600 text-white" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `p-2 rounded transition-all ${
              isActive ? "bg-blue-500 text-white" : ""
            }`
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `p-2 rounded transition-all ${
              isActive ? "bg-blue-500 text-white" : ""
            }`
          }
        >
          Signup
        </NavLink>
      </div>
    </div>
  );
}
