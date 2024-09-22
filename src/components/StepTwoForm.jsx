import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";

const StepTwoForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCurrentStep(3));
  };
  const backBtnHandler = () => {
    dispatch(updateCurrentStep(1));
  };
  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5 rounded-lg shadow-2xl">
        <form onSubmit={submitHandler}>
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-5 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              General Details
            </legend>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Name of Organization<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                PAN of Organization<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Address<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                State<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                District<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Pin Code:<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Email ID<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Landline Number<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Name of the Head of Organization
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Gender<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value=""></option>
                </select>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Designation<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Mobile Number<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
                <div>
                  <button className="px-6 py-2 bg-green-500 text-white rounded-md text-sm font-semibold">
                    Verify
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Enter OTP<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
                <div>
                  <button className="px-6 py-2 bg-green-500 text-white rounded-md text-sm font-semibold">
                    Submit OTP
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Aadhar Number<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-9  text-sm font-semibold rounded-md cursor-pointer"
                onClick={backBtnHandler}
              >
                Back
              </button>
              <input
                type="submit"
                className="bg-blue-500 text-white py-3 px-9  text-sm font-semibold rounded-md cursor-pointer"
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
