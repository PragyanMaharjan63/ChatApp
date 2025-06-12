import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

export default function login() {
  const [showpw, setShowpw] = useState(0);
  return (
    <div>
      <div className="bg-white/10 border-gray-800 border backdrop-blur-md shadow-lg p-8 rounded-lg ">
        <form action="#" className="flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <p className="font-bold text-3xl text-blue-300">Welcome Back</p>
            <p className="text-neutral-200">
              Sign in to your account to continue
            </p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="Username" className="px-2">
              Username
            </label>
            <input
              className="border-gray-800 border bg-white/10 rounded-sm p-2 m-2 sm:w-96 outline-none"
              type="text"
              id="Username"
              placeholder="Enter your Username"
            />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="Password" className="px-2">
              Password
            </label>
            <label className="absolute bottom-4 right-5" htmlFor="Password">
              <Eye />
              {/* <EyeClosed /> */}
            </label>
            <input
              className="border-gray-800 border bg-white/10 rounded-sm p-2 m-2 sm:w-96 outline-none"
              type="password"
              id="Password"
              placeholder="Enter your Password "
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              className="bg-blue-600 p-2 w-full rounded-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
