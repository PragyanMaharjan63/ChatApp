import React from "react";
import { NavLink } from "react-router-dom";

export default function navbar() {
  return (
    <div className="w-40">
      <div className="flex flex-col gap-2 p-2 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 rounded-lg  transition-all ${
              isActive ? "bg-[#544E90] text-white" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `p-2 rounded-lg transition-all ${
              isActive ? "bg-[#544E90] text-white" : ""
            }`
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `p-2 rounded-lg transition-all ${
              isActive ? "bg-[#544E90] text-white" : ""
            }`
          }
        >
          Signup
        </NavLink>
      </div>
    </div>
  );
}
