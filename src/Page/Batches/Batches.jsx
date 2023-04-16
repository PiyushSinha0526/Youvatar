import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const initialBatch = { batch: 1, startTime: "", students: 0 };
const optionList = [
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
  { value: "sunday", label: "Sunday" },
];

function Batches() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [count, setCount] = useState(1);
  const [bats, setBats] = useState([initialBatch]);
  const [selectedOptions, setSelectedOptions] = useState();

  const addbatch = () => {
    setCount((prev) => ++prev);
    setBats((prev) => [
      ...prev,
      { batch: count + 1, startTime: "", students: 0 },
    ]);
  };

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  const colorStyles = {
    control: (styles) => ({
      ...styles,
      padding: "12px 4px",
      marginTop: "5px",
    }),
  };

  return (
    <div>
      <h3>Organise your batches</h3>
      {/* configure your batch */}
      <div className=" p-4 border-2 rounded-lg">
        <h3 className="text-black text-base">Configure your batch</h3>
        <div className="mt-2 flex flex-col gap-7">
          <div className="w-full flex gap-7">
            <label
              htmlFor="languages"
              className="flex flex-col text-sm w-full text-[#3949AB]"
            >
              Class Duration
              <div className="w-full relative text-black">
                <select
                  name="languages"
                  id="languages"
                  className=" py-[18px] px-4 w-full text-base mt-[6px] rounded-lg outline-none border-2 appearance-none"
                >
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                  <option value="4">4 hours</option>
                </select>

                <IoIosArrowDown
                  size={25}
                  className="absolute right-4 top-6 border-l-2 text-[#808080] pointer-events-none"
                />
              </div>
            </label>
            <label className="flex flex-col text-sm w-full text-[#3949AB]">
              Week Off
              <div className="w-full relative">
                <Select
                  options={optionList}
                  placeholder="Select Day"
                  value={selectedOptions}
                  onChange={() => handleSelect()}
                  isSearchable={false}
                  isMulti
                  styles={colorStyles}
                />
              </div>
            </label>
          </div>
          <div className="w-full flex gap-7">
            <label
              htmlFor="languages"
              className=" w-full flex flex-col text-sm text-[#3949AB]"
            >
              {" "}
              Application End Date
              <DatePicker
                className="py-4 px-[18px] mt-1 border-2 w-full rounded-lg outline-none text-base text-black font-medium"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </label>
            <label
              htmlFor="languages"
              className="flex flex-col text-sm w-full text-[#3949AB]"
            >
              Class Start Date
              <DatePicker
                className="py-4 px-[18px] mt-1 border-2 w-full rounded-lg outline-none text-base text-black font-medium"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </label>
          </div>
        </div>
      </div>
      {/* BatchList */}
      {bats.map((bat) => (
        <div className="mt-4 border-2 p-4 rounded-lg relative" key={bat?.batch}>
          <h3 className="font-semibold">Batch No: {bat?.batch}</h3>
          <div className="flex gap-7">
            <label
              htmlFor="languages"
              className="flex flex-col text-sm w-full text-[#3949AB]"
            >
              Class Duration
              <div className="w-full relative">
                <select
                  name="languages"
                  id="languages"
                  className="py-[18px] px-4 mt-[6px] w-full text-base rounded-lg outline-none border-2 appearance-none"
                >
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="03:00PM">03:00 PM</option>
                </select>

                <IoIosArrowDown
                  size={25}
                  className="absolute right-4 top-6 border-l-2 text-[#808080] pointer-events-none"
                />
              </div>
            </label>
            <label
              htmlFor="languages"
              className="flex flex-col text-sm w-full text-[#3949AB]"
            >
              No. of Students
              <input
                type="text"
                className="py-[18px] px-4 mt-[6px] w-full outline-none border-2 rounded-lg text-base"
              />
            </label>
          </div>
        </div>
      ))}
      <button
        className="mt-4 py-3 px-[30px] bg-[#3949AB] text-white rounded font-semibold"
        onClick={() => addbatch()}
      >
        Add new batch
      </button>
    </div>
  );
}

export default Batches;
