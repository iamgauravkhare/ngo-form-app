import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";

const Stepper = () => {
  const stepperData = [
    "General Details",
    "Affiliation Under Different Entity",
    "Financial Details",
    "Establishment Details",
    "Beneficiary Details",
    "Attachments",
    "Registration Fee",
    "Payment Gateway",
  ];
  const dispatch = useDispatch();
  const { currentStepNumber } = useSelector((state) => state.form);
  return (
    <div className="pb-12 fixed top-[80px] left-0 bg-white w-full z-[90]">
      <div className="max-w-[1440px] mx-auto px-5 py-8 md:px-20 flex items-center justify-center ">
        {stepperData.map((data, ind) => (
          <div className="flex items-center" key={ind}>
            <div
              className={`h-[40px] w-[40px] border border-gray-300 rounded-full flex items-center justify-center relative cursor-pointer ${
                ind + 1 == currentStepNumber &&
                "bg-[#3b82f6] text-white font-semibold"
              }`}
              onClick={() => {
                dispatch(updateCurrentStep(ind + 1));
                scrollTo(0, 0);
              }}
            >
              <p className="text-sm">{ind + 1}</p>
              <div className="absolute top-[120%] left-[50%] translate-x-[-50%] text-center text-xs text-gray-800">
                <p>{data}</p>
              </div>
            </div>
            {ind !== stepperData.length - 1 && (
              <div className="w-[75px] lg:w-[100px] border border-gray-400 border-dashed"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
