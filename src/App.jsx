import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Hamburger from "./components/hamburger";
import Navbar from "./components/navbar";
import ChatPeople from "./components/chatpeople";

function App() {
  return (
    <>
      <div className="flex w-full h-full sm:h-screen overflow-y-auto">
        <div className="flex w-[25%] ">
          <ChatPeople />
        </div>
        <div className="flex justify-center items-center w-[75%]">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
