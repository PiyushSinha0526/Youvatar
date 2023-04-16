import React, { useState } from "react";

const initialObject = [
  {
    id: 1,
    text: "",
  },
  {
    id: 2,
    text: "",
  },
];
function IntendedLearners() {
  const [objective, setObjective] = useState([...initialObject]);
  const [count, setCount] = useState(2);

  const addObj = () => {
    setCount((prev) => ++prev);
    setObjective((prev) => [...prev, { id: count + 1, text: "" }]);
  };
  return (
    <div>
      <h2 className="font-semibold text-2xl text-black leading-8">
        What will students learn in your course?
      </h2>
      <p className="text-base">
        You must enter at least 2 <span>learning objectives or outcomes</span>{" "}
        that learners can expect to achieve after completing your course.
      </p>
      <div className=" mt-4 flex flex-col gap-[10px]">
        {objective.map((obj) => (
          <input
            key={obj.id}
            type="text"
            placeholder="Example: Able to build full stack applications"
            className="py-[10px] px-4 outline-none border-2"
          />
        ))}
        <button
          className="mt-4 py-3 px-[30px] bg-[#3949AB] text-white rounded font-semibold w-fit"
          onClick={() => addObj()}
        >
          Add new batch
        </button>
      </div>
    </div>
  );
}

export default IntendedLearners;
