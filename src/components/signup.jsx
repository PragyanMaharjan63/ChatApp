import React from "react";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function signup() {
  const [showpw, setShowpw] = useState(0);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [verifypw, setVerifypw] = useState("");
  const [errors, setErrors] = useState([]);
  const [popup, setPopup] = useState(false);
  const [redMsg, setRedMsg] = useState(true);
  const [message, setMessage] = useState([]);

  function showpass() {
    if (showpw) {
      return "text";
    }
    return "password";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = [];
    const newErrors = [];

    if (formData.username.trim() === "")
      newErrors.push("Username cannot be empty");
    if (formData.password === "") newErrors.push("Password cannot be empty");
    if (verifypw === "") newErrors.push("Verify Password cannot be empty");
    if (
      formData.password !== "" &&
      verifypw !== "" &&
      formData.password !== verifypw
    )
      newErrors.push("Passwords do not match");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, //imp for express to know the content type
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data.message);
      newMessage.push(data.message);
      if (res.ok) {
        console.log("registered");
        setErrors([]); // clear errors
        setVerifypw("");
        setFormData({ username: "", password: "" });
        setRedMsg(false);
      } else {
        console.log("something went wrong");
        setRedMsg(true);
      }
    } catch (err) {
      console.log(err);
    }
    setPopup(true);
    setMessage(newMessage);
    setInterval(() => {
      setPopup(false);
      setMessage([]);
    }, 5000);
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <div>
        <div className="bg-white/10 border-gray-800 border backdrop-blur-md shadow-lg p-8 rounded-lg ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col items-center">
              <p className="font-bold text-3xl text-blue-300">Welcome</p>
              <p className="text-neutral-200">Create a account to continue</p>
            </div>
            <div className="flex flex-col">
              <label htmlFor="Username" className="px-2">
                Username
              </label>
              <input
                className="border-gray-800 border bg-white/10 rounded-sm p-2 m-2 sm:w-96 outline-none"
                type="text"
                id="Username"
                value={formData.username}
                onChange={(e) => {
                  setFormData({ ...formData, username: e.target.value });
                }}
                placeholder="Enter your Username"
              />
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="Password" className="px-2">
                Password
              </label>

              <input
                className="border-gray-800 border bg-white/10 rounded-sm p-2 m-2 sm:w-96 outline-none"
                type={showpass()}
                id="Password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
                placeholder="Enter your Password "
              />
            </div>
            <div className="flex flex-col relative">
              <label htmlFor="verifyPassword" className="px-2">
                Verify Password
              </label>
              <label
                className="absolute bottom-4 right-5"
                htmlFor="verifyPassword"
                onClick={() => {
                  setShowpw(!showpw);
                }}
              >
                {showpw ? <Eye /> : <EyeClosed />}
              </label>
              <input
                className="border-gray-800 border bg-white/10 rounded-sm p-2 m-2 sm:w-96 outline-none"
                type={showpass()}
                id="verifyPassword"
                value={verifypw}
                onChange={(e) => {
                  setVerifypw(e.target.value);
                }}
                placeholder="Re-Enter your Password "
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
              Already have an account?
              <NavLink to="/login" className="underline text-blue-400">
                Click here
              </NavLink>
            </div>
            <div>
              <input
                type="submit"
                value="Create"
                className="bg-[#544E90] p-2 w-full rounded-lg"
              />
            </div>
          </form>
        </div>
      </div>
      {/* for popup */}
      {popup && (
        <div
          className={`absolute  transition-all right-0 bottom-0 ${
            redMsg ? "bg-red-500" : "bg-[#544E90]"
          } m-4 p-3 w-96 rounded-lg`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
