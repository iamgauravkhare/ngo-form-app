import React from "react";

const NormalInput = ({ title, type }) => {
  return (
    <div className="flex gap-10 text-sm items-start">
      <label
        htmlFor={title.split(" ").join("").toLowerCase()}
        className="font-semibold w-[200px] capitalize"
      >
        {title}
        <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center gap-2">
        <span>:</span>
        <input
          type={type}
          name={title.split(" ").join("").toLowerCase()}
          id={title.split(" ").join("").toLowerCase()}
          className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
        />
      </div>
    </div>
  );
};

export default NormalInput;
