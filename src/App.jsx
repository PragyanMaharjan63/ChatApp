import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[20vw] lg:w-[10vw]">
          <Navbar />
        </div>
        <div className="flex justify-center items-center h-svh w-[80vw] lg:w-[90vw]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
