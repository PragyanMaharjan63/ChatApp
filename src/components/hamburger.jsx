import { useState } from "react";
import { Menu, X } from "lucide-react";
import Navbar from "./navbar";

export default function hamburger() {
  const [navbar, showNav] = useState(false);
  return (
    <div>
      <div
        className="absolute top-0"
        onClick={() => {
          showNav((prev) => !prev);
        }}
      >
        {!navbar && <Menu />}
        {navbar && <X />}
      </div>
      <div className="flex mx-2 relative w-40 left-5 -top-3 bg-neutral-800 my-3 rounded-lg">
        {navbar && <Navbar />}
      </div>
    </div>
  );
}
