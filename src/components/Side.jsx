import React from "react";
import Frame from "../assets/Frame.jpg";
import eye from "../assets/Vector.svg";
function Side() {
  return (
    <div className="hidden pl-16 lg:flex flex-col gap-8">
      <img src={Frame} alt="" className="w-[275px] h-[556px]" />
      <button className="ml-10 py-1 px-[19px] w-[200px] flex justify-center items-center gap-2 text-[#3949AB] border-2 border-[#3949AB] rounded-lg ">
        <img src={eye} alt="" className="w-6" />
        <span className="text-sm">preview on desktop</span>
      </button>
    </div>
  );
}

export default Side;
