import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
function ModuleList(mod) {
  const [count, setCount] = useState(1);
  const [lecture, setLecture] = useState([
    {
      no: 1,
      title: "Introduction",
    },
  ]);

  const addLecture = () => {
    setCount((prev) => ++prev);
    setLecture((prev) => [...prev, { no: count + 1, title: "Introduction" }]);
  };
  const removeLecture = (id) => {
    const removeItem = lecture.filter((lect) => {
      return lect.no !== id;
    });
    setLecture(removeItem);
  };
  return (
    <>
      <div className="flex flex-col gap-2">
        {lecture.map((lect) => (
          <div
            key={lect.no}
            className="flex justify-between flex-wrap border border-solid border-[#C7C9D9] px-5"
          >
            <div className="py-5 flex gap-5 justify-between w-full">
              <h4 className="text-base font-semibold text-[#121212]">
                Lecture {lect.no}: {lect.title}
              </h4>
              <div
                className="flex gap-3 text-red-500"
                onClick={() => removeLecture(lect.no)}
              >
                <RiDeleteBinLine size={20} />
              </div>
            </div>
            <div className="mb-2 w-full flex gap-2 md:gap-5 justify-between items-center">
              <a
                href=""
                className="md:text-base font-semibold px-3 py-3 border-2 border-[#3949AB] text-[#3949AB] rounded-lg text-sm"
              >
                Add Assignments
              </a>
              <button className="py-3 px-5 md:px-8 font-semibold text-white bg-[#3949AB] rounded-md">
                Add Resource
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-4 bg-[#3949AB] text-white py-3 px-[30px] rounded font-semibold w-fit"
        onClick={() => addLecture()}
      >
        Add new batch
      </button>
    </>
  );
}

export default ModuleList;
