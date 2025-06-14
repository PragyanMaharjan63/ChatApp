import React from "react";
import { SendHorizonal } from "lucide-react";

export default function home() {
  return (
    <div className="flex flex-col w-full h-svh m-2 gap-2 ">
      <div className="bg-gradient-to-br from-black to-slate-900  p-4 sm:p-2 rounded-xl pl-10">
        chat head
      </div>
      <div className="bg-gradient-to-br from-black to-slate-900  p-4 rounded-xl flex-1 overflow-y-auto">
        main box
      </div>
      <div className="bg-gradient-to-br from-black to-slate-900  p-4 rounded-xl flex justify-between">
        <input
          className="outline-none cursor-text w-full"
          type="text"
          name="textbox"
          id="textbox"
          placeholder="Enter your text here"
        />
        <SendHorizonal className="cursor-pointer" />
      </div>
    </div>
  );
}
