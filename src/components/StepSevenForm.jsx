import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";
import Dropdown from "./Dropdown";

const StepSevenForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCurrentStep(8));
    scrollTo(0, 0);
  };
  const backBtnHandler = () => {
    dispatch(updateCurrentStep(6));
    scrollTo(0, 0);
  };
  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5 ">
        <form onSubmit={submitHandler} className="p-5 rounded-lg shadow-2xl">
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-5 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              Registration Fee
            </legend>
            <Dropdown title={"Choose Area"} options={["Urban", "Rural"]} />
            <Dropdown title={"Amount"} options={["2000", "1000"]} />
            {/* <div className="flex gap-10 text-sm items-start">
              <label htmlFor="amount" className="font-semibold w-[200px]">
                Amount<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div> */}
            <Dropdown
              title={"Choose Payment Mode"}
              options={["Online", "Offline by Challan"]}
            />
            <div className="w-full flex justify-between py-5">
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-9  text-sm font-semibold rounded-md cursor-pointer hover:bg-blue-600"
                onClick={backBtnHandler}
              >
                Back
              </button>
              <input
                type="submit"
                className="bg-blue-500 text-white py-3 px-9  text-sm font-semibold rounded-md cursor-pointer hover:bg-blue-600"
                value={"Save & Next"}
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default StepSevenForm;
