import React from "react";

const SelectFile = ({ data, width }) => {
  return (
    <div className="flex gap-10 text-sm items-start">
      <label
        htmlFor={data.name}
        className={`font-semibold ${width ? width : "w-[200px]"}`}
      >
        {data.label}
        <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center gap-2">
        <span>:</span>
        <input
          type="file"
          id={data.name}
          name={data.name}
          className="border border-gray-300 rounded-md p-2 outline-none shadow-inner"
        />
      </div>
    </div>
  );
};

export default SelectFile;
