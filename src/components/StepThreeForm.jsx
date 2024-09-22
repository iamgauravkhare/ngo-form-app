import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";
import NormalInput from "./NormalInput";
import SubHeading from "./SubHeading";
import SelectFile from "./SelectFile";
import Dropdown from "./Dropdown";

const StepThreeForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCurrentStep(4));
    scrollTo(0, 0);
  };
  const backBtnHandler = () => {
    dispatch(updateCurrentStep(2));
    scrollTo(0, 0);
  };
  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5">
        <form onSubmit={submitHandler} className="p-5 rounded-lg shadow-2xl">
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-5 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              Financial Details
            </legend>
            <div className="flex gap-10 text-sm items-start">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                (i) Current Activities in brief: (200-1000 Characters)
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <textarea
                  name="orgName"
                  id="orgName"
                  rows={5}
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <SelectFile
              data={{
                label:
                  "(ii) Audited Account of Last Year : (Receipt & Payment, Income and Expenditure and Balance Sheet)",
                name: "attachments31",
              }}
            />
            <NormalInput
              title={"Total Expense of the organization (INR)"}
              type={"number"}
            />
            <Dropdown
              title={"Certified by Chartered Accountant"}
              options={["Yes", "No"]}
            />
            <SelectFile
              data={{
                label:
                  "(iii) Audited Account of Before Last Year : (Receipt & Payment, Income and Expenditure and Balance Sheet)",
                name: "attachments31",
              }}
            />

            <NormalInput
              title={"Total Expense of the organization (INR)"}
              type={"number"}
            />
            <Dropdown
              title={"Certified by Chartered Accountant"}
              options={["Yes", "No"]}
            />
            <SubHeading heading={"(iv) Financial details (Last 2 years)"} />
            {[
              "a. Total grant from Govt. at Central / State / District level",
              "b. CSR from Private Sector",
              "c. CSR from Govt. Sector",
              "d. Donation from other sources",
              "e. Income from other sources",
              "f. Total income (a to e)",
            ].map((data, ind) => (
              <NormalInput title={data} type={"number"} key={ind} />
            ))}
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

export default StepThreeForm;
