import React from "react";
import Hamburger from "./hamburger";
export default function ChatPeople() {
  return (
    <>
      <div className="w-full px-3 py-4">
        <input
          type="text"
          placeholder="Search for user"
          className="w-full bg-[#272538] text-white p-3 rounded-lg outline-none"
        />
      </div>
      <div className="absolute bottom-5 left-5">
        <Hamburger />
      </div>
    </>
  );
}
