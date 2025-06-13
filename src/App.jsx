import { useState } from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import Hamburger from "./components/hamburger";
import Navbar from "./components/navbar";

function App() {
  const isSmall = useMediaQuery({ maxWidth: 500 });
  console.log(isSmall);
  return (
    <>
      <div className="flex justify-center">
        <div>
          {isSmall ? (
            <div className="absolute left-0 m-4 z-10 ">
              <Hamburger />
            </div>
          ) : (
            <div className="w-[20vw] lg:w-[10vw]">
              <Navbar />
            </div>
          )}
        </div>
        <div className="flex justify-center items-center h-svh w-[80vw] lg:w-[90vw]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
