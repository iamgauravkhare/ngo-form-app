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
    "Beneficiary Details",
    "Registration Fee",
    "Payment Gateway",
  ];
  const dispatch = useDispatch();
  const { currentStepNumber } = useSelector((state) => state.form);
  return (
    <div className="pb-10 fixed top-[100px] left-0 bg-white w-full">
      <div className="max-w-[1440px] mx-auto px-5 py-10 md:px-20 flex items-center justify-center">
        {stepperData.map((data, ind) => (
          <div className="flex items-center" key={ind}>
            <div
              className={`h-[50px] w-[50px] border border-gray-300 rounded-full flex items-center justify-center relative cursor-pointer ${
                ind + 1 == currentStepNumber &&
                "bg-[#3b82f6] text-white font-semibold"
              }`}
              onClick={() => dispatch(updateCurrentStep(ind + 1))}
            >
              <p>{ind + 1}</p>
              <div className="absolute top-[120%] left-[50%] translate-x-[-50%] text-center text-xs text-gray-800">
                <p>{data}</p>
              </div>
            </div>
            {ind !== stepperData.length - 1 && (
              <div className="w-[100px] border border-gray-400 border-dashed"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
