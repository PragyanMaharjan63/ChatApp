import { ArrowLeft } from "lucide-react";
import ChatPeople from "../components/chatpeople";
import Home from "../components/home";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Overlay() {
  const [showChatPeople, setShowChatPeople] = useState(false);
  return (
    <>
      <div className="flex w-full h-svh sm:h-screen overflow-y-auto">
        <div className="flex h-svh sm:h-screen overflow-y-auto relative">
          {/*  Always show the back arrow on small screens */}
          <div className="sm:hidden fixed top-4 left-4 z-50">
            <ArrowLeft
              className="cursor-pointer"
              onClick={() => setShowChatPeople((prev) => !prev)}
            />
          </div>

          {/* ChatPeople on small screens (overlay) */}
          {showChatPeople && (
            <div className="fixed top-0 left-0 w-full h-svh z-40 bg-gradient-to-tl from-black to-[#1C1634]">
              <ChatPeople onUserSelect={() => setShowChatPeople(false)} />
            </div>
          )}
        </div>
        {/*  ChatPeople on desktop */}
        <div className="sm:flex w-[25%] hidden">
          <ChatPeople onUserSelect={() => setShowChatPeople(false)} />
        </div>
        <div className="flex justify-center items-center sm:w-[75%] w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
