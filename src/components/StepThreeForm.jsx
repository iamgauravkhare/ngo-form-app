import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";

const StepThreeForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCurrentStep(4));
  };
  const backBtnHandler = () => {
    dispatch(updateCurrentStep(2));
  };
  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5 rounded-lg shadow-2xl">
        <form onSubmit={submitHandler}>
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-5 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              Financial Details
            </legend>
            <div className="flex gap-10 text-sm items-start">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                (i) Current Activities in brief: (200-1000 Characters)
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-start gap-2">
                <span>:</span>
                <textarea
                  name="orgName"
                  id="orgName"
                  rows={5}
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="disCer" className="font-semibold w-[200px]">
                (ii) Audited Account of Last Year: (Ask for Attachment in PDF
                which should include Receipt & Payment, Income and Expenditure
                and Balance Sheet)
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="file"
                  id="desCer"
                  name="desCer"
                  className="border border-gray-300 rounded-md p-2 outline-none"
                  // {...register(data.name, { required: true })}
                />
                {/* 
                {errors?.data?.name && (
                  <p className="text-red-600">This field is required.</p>
                )} */}
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Total Expense of the organization (INR)
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="number"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Certified by Chartered Accountant
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="disCer" className="font-semibold w-[200px]">
                (iii) Audited Account of Before Last Year: Ask for Attachment in
                PDF
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="file"
                  id="desCer"
                  name="desCer"
                  className="border border-gray-300 rounded-md p-2 outline-none"
                  // {...register(data.name, { required: true })}
                />
                {/* 
                {errors?.data?.name && (
                  <p className="text-red-600">This field is required.</p>
                )} */}
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Total Expense of the organization (INR)
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="number"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Certified by Chartered Accountant
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value="">Yes</option>
                  <option value="">No</option>
                </select>
              </div>
            </div>
            <h2>(iv) Financial details (Last 2 years) </h2>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Total grant from Govt. at Central / State / District level
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="number"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                CSR from Private Sector
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="number"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                CSR from Govt. Sector / Central or State PSUs
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="number"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Donation from other sources
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="number"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Income from other sources
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="number"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Total income (a to e)
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="number"
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

export default StepThreeForm;
