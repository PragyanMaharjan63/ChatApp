import React from "react";
import { NavLink } from "react-router-dom";

export default function navbar({ onUserSelect }) {
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
          onClick={() => onUserSelect?.()} // to hide the overlay after the use selcts.. the ?.() does is if the onuserselect is true then it calls the function which sets to false from the prop from overlay.jsx
        >
          Home
        </NavLink>
        <NavLink
          to="login"
          className={({ isActive }) =>
            `p-2 rounded-lg transition-all ${
              isActive ? "bg-[#544E90] text-white" : ""
            }`
          }
          onClick={() => onUserSelect?.()}
        >
          Login
        </NavLink>
        <NavLink
          to="signup"
          className={({ isActive }) =>
            `p-2 rounded-lg transition-all ${
              isActive ? "bg-[#544E90] text-white" : ""
            }`
          }
          onClick={() => onUserSelect?.()}
        >
          Signup
        </NavLink>
      </div>
    </div>
  );
}
