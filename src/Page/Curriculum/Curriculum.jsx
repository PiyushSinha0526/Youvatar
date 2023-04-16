import React, { useState } from "react";
import ModuleList from "./ModuleList";

const initialModule = {
  no: 1,
  title: "Introduction",
  lecture: [
    {
      no: 1,
      title: "Introduction",
    },
  ],
};

function Curriculum() {
  const [module, setModule] = useState([initialModule]);
  const [countModule, setCountModule] = useState(1);
  const addModule = () => {
    setCountModule((prev) => ++prev);
    setModule((prev) => [...prev, { no: countModule + 1, title: "" }]);
  };
  return (
    <div>
      <h3>
        Start putting together your course by creating sections, lectures and
        practice
      </h3>
      {module.map((mod) => (
        <div
          key={mod.no}
          className=" p-5 mt-4 border border-solid border-[#C7C9D9]"
        >
          <div className="flex gap-5">
            <h4 className="mb-3 text-base font-semibold text-[#121212">
              Module {mod.no}: Introduction
            </h4>
            <div className="flex gap-3">
              {/* {editIcon}
            {deleteIcon} */}
            </div>
          </div>
          <ModuleList />
        </div>
      ))}

      <button
        className="py-3 px-16  my-5 text white font-semibold text-white bg-[#3949AB]rounded-md"
        onClick={() => addModule()}
      >
        Add More
      </button>
    </div>
  );
}

export default Curriculum;
