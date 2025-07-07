import { useState } from "react";
import { Menu, X } from "lucide-react";
import Navbar from "./navbar";

export default function hamburger() {
  const [navbar, showNav] = useState(false);
  return (
    <>
      <div className="flex  relative w-40 left-0 -top-1.5 bg-neutral-800 rounded-lg">
        {/* shows navbar vertically */}
        <div
          className="absolute top-0"
          onClick={() => {
            showNav((prev) => !prev);
          }}
        >
          {!navbar && <Menu />}
          {navbar && <X />}
        </div>
        <div
          onClick={() => {
            showNav((prev) => !prev);
          }}
        >
          {navbar && <Navbar />}
        </div>
      </div>
    </>
  );
}
