import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import LandingPageForm from "../Page/LandingPageForm/LandingPageForm";
import Batches from "../Page/Batches/Batches";
import IntendedLearners from "../Page/IntendedLearners/IntendedLearners";
import Curriculum from "../Page/Curriculum/Curriculum";
import Video from "./Video";
import Working from "./Working";

import { useNavigate } from "react-router-dom";
import navitem from "../utlis";

function Main({ page, setPage }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  useEffect(() => {
    const title = navitem.filter((lect) => {
      return lect.path == window.location.pathname;
    });
    setTitle(title[0]?.name);
  }, [page]);

  function handleClick(i) {
    if (page + i > 7) return;
    navitem[page + i];
    setPage((prev) => prev + i);
    navigate(`${navitem[page + i].path}`);
  }
  return (
    <div className=" pb-16 px-5 w-full col-span-2 flex flex-col gap-4 lg:pr-[137px] lg:items-start ">
      <h2 className="font-bold text-[32px] w-full ">{title}</h2>
      <div className="w-full flex gap-3 sm:justify-evenly md:justify-between">
        <Video />
        <div className="hidden font-semibold text-[20px] w-[50%] md:flex flex-col items-center">
          Progress
          <div
            className="h-full relative"
            role="progressbar"
            aria-valuenow="33"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ "--value": Math.ceil((page / 7) * 100) }}
          >
            <span className="absolute top-[60%] text-[#555770] text-sm">
              Percentage
            </span>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<LandingPageForm />} />
          <Route path="batches" element={<Batches />} />
          <Route path="intendedlearnrs" element={<IntendedLearners />} />
          <Route path="curriculum" element={<Curriculum />} />
          <Route path="*" element={<Working />} />
        </Routes>
        <div className="flex  items-center mt-9">
          {page > 0 && (
            <span
              className="text-[#3949AB] font-semibold text-base"
              onClick={() => {
                handleClick(-1);
              }}
            >
              Back
            </span>
          )}
          <button
            className="bg-[#3949AB] ml-auto text-white py-3 px-5 md:px-[103px] rounded font-semibold"
            onClick={() => handleClick(1)}
          >
            Proceed
          </button>
        </div>{" "}
      </div>
    </div>
  );
}

export default Main;
