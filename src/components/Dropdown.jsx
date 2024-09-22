import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Dropdown = ({ title, options }) => {
  return (
    <div className="flex gap-10 text-sm items-start">
      <label htmlFor="orgName" className="font-semibold w-[200px]">
        {title}
        <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center gap-2 relative">
        <span>:</span>
        <select
          name={title.split(" ").join("").toLowerCase()}
          id={title.split(" ").join("").toLowerCase()}
          className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px] select-ctn"
        >
          <option value="" selected>
            Select
          </option>
          {options.map((data, i) => (
            <option value={data.split(" ").join("").toLowerCase()} key={i}>
              {data}
            </option>
          ))}
        </select>
        <span className="absolute top-[50%] right-[16px] translate-y-[-50%] text-black text-2xl pointer-events-none">
          <MdKeyboardArrowDown />
        </span>
      </div>
    </div>
  );
};

export default Dropdown;
