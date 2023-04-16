import React from "react";
import { NavLink } from "react-router-dom";
import eye from "../assets/Vector.svg";
import navitem from "../utlis";

function Navbar({ setPage }) {
  const pageHandler = (name) => {
    const index = navitem.findIndex((x) => x.name === name);
    setPage(index);
  };
  return (
    <div className=" h-[213px] max-w-[1440px] m-auto flex flex-col gap-9 justify-center">
      <div className="flex justify-between items-center gap-2 px-8 lg:px-0">
        <h1 className="hidden pl-16 text-5xl text-[#3949AB] font-bold md:block  ">
          Youvatar
        </h1>
        <div className="space-y-2 md:hidden cursor-pointer">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </div>
        <div className="flex gap-3 ">
          <button className="md:hidden py-1 px-[19px] w-[105px] flex justify-center items-center gap-2 text-[#3949AB] border-2 border-[#3949AB] rounded-lg">
            <img src={eye} alt="" className="w-6" />
            <span className="text-sm">preview</span>
          </button>
          <button className=" py-3 px-5 bg-[#3949AB] text-white md:px-12 rounded font-semibold">
            Save Draft
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center px-6 lg:justify-end items-center">
        <div className="px-4 h-14 mr-0 max-w-[787px] flex items-center gap-6 text-black text-base border-2 rounded-lg overflow-x-scroll whitespace-nowrap no-scrollbar lg:mr-[137px]">
          {navitem.map((nav) => (
            <NavLink
              to={nav.path}
              key={nav.name}
              className="text-center font-semibold"
              onClick={() => pageHandler(nav.name)}
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
