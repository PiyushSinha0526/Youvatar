import React from "react";
import uploadicon from "../../assets/uploadicon.svg";
import { BiCaretDownCircle } from "react-icons/bi";
function LandingPageForm() {
  return (
    <>
      <form
        action=""
        className="w-full text-sm text-black flex flex-col gap-[22px]"
      >
        <label htmlFor="">
          Course Title
          <input
            type="text"
            placeholder="course title"
            className="py-[18px] px-4 mt-[6px] w-full outline-none text-base rounded-lg border-2"
          />
        </label>
        <label htmlFor="">
          Course Subtitle
          <input
            type="text"
            placeholder="Course subtile"
            className="py-[18px] px-4 mt-[6px] w-full  outline-none text-base rounded-lg border-2"
          />
        </label>
        <label htmlFor="">
          Course Description
          <textarea
            name=""
            id=""
            placeholder="Message : Congratulations in completing coursename."
            className="py-[18px] px-4 mt-[6px] w-full resize-none outline-none text-base rounded-lg border-2 h-[133px]"
          ></textarea>
        </label>
        <div className="flex justify-evenly gap-7 flex-wrap sm:flex-nowrap">
          <label htmlFor="languages" className="flex flex-col text-sm w-full">
            Language
            <div className="w-full relative">
              <select
                name="languages"
                id="languages"
                className="py-[18px] w-full px-4 text-base mt-[6px] rounded-lg outline-none border-2 appearance-none"
              >
                <option
                  value="Course levels"
                  disabled
                  defaultValue={"Course levels"}
                  className="text-[#808080]"
                >
                  Course levels
                </option>
                <option value="English">English</option>
                <option value="Tamil">Tamil</option>
                <option value="Hindi">Hindi</option>
              </select>

              <BiCaretDownCircle
                size={25}
                className="absolute right-4 top-6 text-[#808080] pointer-events-none"
              />
            </div>
          </label>
          <label htmlFor="languages" className="flex flex-col text-sm w-full">
            level
            <div className="w-full relative">
              <select
                name="languages"
                id="languages"
                className="py-[18px] w-full px-4 mt-[6px] text-base rounded-lg outline-none border-2 appearance-none"
              >
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
              </select>

              <BiCaretDownCircle
                size={25}
                className="absolute right-4 top-6 text-[#808080] pointer-events-none"
              />
            </div>
          </label>
          <label htmlFor="languages" className="flex flex-col text-sm w-full">
            category
            <div className="w-full relative">
              <select
                name="languages"
                id="languages"
                className="py-[18px] w-full px-4 mt-[6px] text-base rounded-lg outline-none border-2 appearance-none"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>

              <BiCaretDownCircle
                size={25}
                className="absolute right-4 top-6 text-[#808080] pointer-events-none"
              />
            </div>
          </label>
        </div>
        <div>
          <span className="text-sm leading-4">Upload Video or ppt</span>
          <label
            htmlFor="dropzone-file"
            className=" h-64 flex flex-col items-center justify-center w-full border-2 border-black border-dashed rounded-lg cursor-pointer "
          >
            <img src={uploadicon} alt="" />
            <p className="text-lg leading-5 mt-[14px] text-black">
              Browse to upload
            </p>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <div>
          <span className="text-sm leading-4">Uploading Landing photo</span>
          <label
            htmlFor="dropzone-file"
            className=" h-64 flex flex-col items-center justify-center w-full border-2 border-black border-dashed rounded-lg cursor-pointer "
          >
            <img src={uploadicon} alt="" />
            <p className=" mt-[14px] text-lg leading-5 text-black">
              Browse to upload
            </p>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </form>
    </>
  );
}

export default LandingPageForm;
