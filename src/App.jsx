import { useState } from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import Hamburger from "./components/hamburger";
import Navbar from "./components/navbar";

function App() {
  const isSmall = useMediaQuery({ maxWidth: 500 });
  return (
    <>
      <div className="flex w-full h-full sm:h-screen overflow-y-auto">
        <div className="realitve left-0">
          {isSmall ? (
            <div className="absolute left-0 top-3 m-4 z-10 ">
              <Hamburger />
            </div>
          ) : (
            <div className="">
              <Navbar />
            </div>
          )}
        </div>
        <div className="flex justify-center items-center w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
