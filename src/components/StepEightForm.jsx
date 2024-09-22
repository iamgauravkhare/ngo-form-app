import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";
import toast from "react-hot-toast";

const StepEightForm = () => {
  const dispatch = useDispatch();
  const backBtnHandler = () => {
    dispatch(updateCurrentStep(7));
    scrollTo(0, 0);
  };

  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5">
        <form className="p-5 rounded-lg shadow-2xl">
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-10 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              Payment Gateway
            </legend>
            <h2>Click on pay now button to make payment.</h2>
            <div className="w-full flex justify-between py-5">
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-9  text-sm font-semibold rounded-md cursor-pointer hover:bg-blue-600"
                onClick={backBtnHandler}
              >
                Back
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-9  text-sm font-semibold rounded-md cursor-pointer hover:bg-blue-600"
                onClick={() => {
                  toast.success("Payment Success");
                }}
              >
                Pay Now
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default StepEightForm;
