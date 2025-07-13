import React, { useState } from "react";
import ChatBox from "./chatbox";

export default function home() {
  return (
    <div className="flex flex-col w-full h-svh sm:m-2 sm:p-2 gap-2 ">
      <div className="px-2 py-4 rounded-xl flex gap-x-2">
        <div className="size-7 bg-[#272538] rounded-full"></div>
        chat head
      </div>
      <div className=" p-4 rounded-xl flex-1 overflow-y-auto">
        <ChatBox />
      </div>
    </div>
  );
}
