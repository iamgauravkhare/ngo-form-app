import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";
import SubHeading from "./SubHeading";
import NormalInput from "./NormalInput";
import Dropdown from "./Dropdown";

const StepTwoForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCurrentStep(3));
    scrollTo(0, 0);
  };
  const backBtnHandler = () => {
    dispatch(updateCurrentStep(1));
    scrollTo(0, 0);
  };
  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5">
        <form onSubmit={submitHandler} className="p-5 rounded-lg shadow-2xl">
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-5 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              Affiliation under different entity
            </legend>
            <Dropdown
              title={"(i) Category of Registration"}
              options={[
                "Voluntary Organization",
                "Association of Parents of PwDs",
                "Association of Persons with Disability",
              ]}
            />
            <NormalInput title={"a. Registration Number"} type={"text"} />
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                B. Validity
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-5">
                <span>:</span>
                <span>From</span>
                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
                <span>To</span>

                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <SubHeading heading={"(ii) Registration under RPwD Act, 2016"} />
            <NormalInput title={"a. Registration Number"} type={"text"} />
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                B. Validity
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-5">
                <span>:</span>
                <span>From</span>
                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
                <span>To</span>

                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <h3 className="font-semibold w-[200px]">
                (iii) Disability Dealt with
                <span className="text-red-500">*</span>
              </h3>
              <div className="flex items-center gap-5">
                <span>:</span>
                <div className="flex items-center gap-2">
                  <label htmlFor="">Autism</label>
                  <input type="checkbox" name="" id="" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <label htmlFor="">Cerebral Palsy </label>
                  <input type="checkbox" name="" id="" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <label htmlFor=""> Intellectual Disability </label>
                  <input type="checkbox" name="" id="" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <label htmlFor="">Multiple Disability</label>
                  <input type="checkbox" name="" id="" />
                </div>
              </div>
            </div>
            <Dropdown
              title={"(iv) Act under which Organization Registered"}
              options={[
                "Society Act",
                "Company Act",
                "Public Charitable Trust",
              ]}
            />
            <NormalInput title={"a. Registration Number"} type={"text"} />
            <NormalInput title={"b. Valid Till"} type={"date"} />
            <SubHeading
              heading={
                "(v) If, registered under Foreign Contribution Regulation Act (FCRA)"
              }
            />

            <NormalInput title={"a. Registration Number"} type={"text"} />
            <NormalInput title={"b. Valid Till"} type={"date"} />
            <SubHeading
              heading={"(vi) If earlier registered with National Trust"}
            />
            <NormalInput title={"a. Registration Number"} type={"text"} />
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                B. Validity
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-5">
                <span>:</span>
                <span>From</span>
                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
                <span>To</span>

                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>

            <SubHeading heading={"(vii) If Voluntary Organization, Submit"} />
            {[
              "a. Minimum income",
              "b. Minimum Expenditure",
              "c. Minimum donation & CSR fund",
              "d. 12 A & 80 G certificate (optional)",
            ].map((data, i) => (
              <NormalInput title={data} type={"number"} key={i} />
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

export default StepTwoForm;
