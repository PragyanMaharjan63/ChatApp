import { useState } from "react";
import { User } from "lucide-react";
import Navbar from "./navbar";

export default function userOptions({ onUserSelect }) {
  const [navbar, showNav] = useState(false);
  return (
    <>
      <div className="flex relative w-40 left-0 -top-1.5 rounded-lg ">
        {/* shows navbar vertically */}
        <div
          className="absolute flex bottom-0"
          onClick={() => {
            showNav((prev) => !prev);
          }}
        >
          <div className="bg-[#272538] p-2 rounded-full">
            <User />
          </div>
        </div>
        <div
          className="absolute flex bottom-0 ml-12 bg-[#272538] rounded-xl"
          onClick={() => {
            showNav((prev) => !prev);
          }}
        >
          {navbar && <Navbar onUserSelect={onUserSelect} />}
        </div>
      </div>
    </>
  );
}
