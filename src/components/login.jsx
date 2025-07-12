import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function login() {
  const [showpw, setShowpw] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function showpass() {
    if (showpw) {
      return "text";
    }
    return "password";
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = [];

    if (username.trim() === "") newErrors.push("Username cannot be empty");
    if (password === "") newErrors.push("Password cannot be empty");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="h-screen flex items-center">
      <div>
        <div className="bg-white/10 border-gray-800 border backdrop-blur-md shadow-lg p-8 rounded-lg ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
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
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Enter your Username"
              />
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="Password" className="px-2">
                Password
              </label>
              <label
                className="absolute bottom-4 right-5"
                htmlFor="Password"
                onClick={() => {
                  setShowpw(!showpw);
                }}
              >
                {showpw ? <Eye /> : <EyeClosed />}
              </label>
              <input
                className="border-gray-800 border bg-white/10 rounded-sm p-2 m-2 sm:w-96 outline-none"
                type={showpass()}
                id="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter your Password "
              />
            </div>
            {errors.length > 0 && (
              <div className="text-red-500">
                {errors.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
            <div className="flex justify-center gap-2">
              Don't have an account?
              <NavLink to="/signup" className="underline text-blue-400">
                Click here
              </NavLink>
            </div>
            <div>
              <input
                type="submit"
                value="Submit"
                className="bg-[#544E90] p-2 w-full rounded-lg"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
