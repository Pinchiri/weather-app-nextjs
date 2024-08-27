import React from "react";
import { MdSunny } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";

type Props = {};

const Navbar = ({}: Props) => {
  return (
    <nav className="shadow-sm border-gray-200 border sticky top-0 left-0 z-50 bg-white">
      <div className="h-20 w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <span className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
          <MdSunny className="text-3xl mt-1 text-yellow-200" />
        </span>
        <section className="flex gap-2 items-center">
          <MdMyLocation className="" />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
