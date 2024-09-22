import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";
import SubHeading from "./SubHeading";
import Dropdown from "./Dropdown";
import NormalInput from "./NormalInput";
import SelectFile from "./SelectFile";

const StepFiveForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCurrentStep(6));
    scrollTo(0, 0);
  };
  const backBtnHandler = () => {
    dispatch(updateCurrentStep(4));
    scrollTo(0, 0);
  };
  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5">
        <form onSubmit={submitHandler} className="p-5 rounded-lg shadow-2xl">
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-5 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              Beneficiary Details
            </legend>
            <SubHeading
              heading={
                "Enter details of Beneficiaries (Minimum 20 Beneficiary)"
              }
            />
            <Dropdown
              title={"Type of Proof"}
              options={["UDID", "Enrolment Number"]}
            />
            <NormalInput
              title={"Enter UDID / Enrolment Number"}
              type={"text"}
            />
            <SelectFile
              data={{
                label: "Disability Certificate",
                name: "disabilityCertificate",
              }}
            />
            <NormalInput title={"Name"} type={"text"} />
            <NormalInput title={"Aadhar Number"} type={"number"} />
            <NormalInput title={"Date of Birth"} type={"date"} />
            <Dropdown
              title={"Category of Disability"}
              options={[
                "Autism",
                "Cerebral Palsy",
                "Mental Retardation",
                "Multiple Disabilities",
              ]}
            />
            <div className="w-full flex justify-start py-5">
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-9  text-sm font-semibold rounded-md cursor-pointer hover:bg-blue-600"
              >
                Add More
              </button>
            </div>
            <SubHeading
              heading={"If hostel is maintained, then number of hostellers"}
            />
            {[
              "Autism",
              "Cerebral Palsy",
              "Intellectual Disability",
              "Multiple Disability",
            ].map((data, ind) => {
              return <NormalInput title={data} type={"number"} />;
            })}
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

export default StepFiveForm;
