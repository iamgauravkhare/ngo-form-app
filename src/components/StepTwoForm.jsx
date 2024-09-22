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
              Affiliation under different entity
            </legend>

            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                (i) Category of Registration
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value="">Voluntary Organization</option>
                  <option value=""> Association of Parents of PwDs </option>
                  <option value="">
                    Association of Persons with Disability
                  </option>
                </select>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                a. Registration Number
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
                b. Validity
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <h2>(ii) Registration under RPwD Act, 2016 </h2>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                a. Registration Number
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
                b. Validity
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
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
              <div className="flex items-center gap-2">
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
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                (iv) Act under which Organization Registered
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value=""> Society Act</option>
                  <option value=""> Company Act </option>
                  <option value="">Public Charitable Trust</option>
                </select>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                a. Registration Number
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
                b. Valid Till
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <h2>
              (v) If, registered under Foreign Contribution Regulation Act
              (FCRA)
            </h2>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                a. Registration Number
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
                b. Valid Till
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <h2>(vi) If earlier registered with National Trust</h2>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                a. Registration Number
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
                b. Validity
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
                <input
                  type="date"
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                />
              </div>
            </div>
            <h2>(vii) If Voluntary Organization, Submit </h2>

            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                a. Minimum income
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
                b. Minimum Expenditure
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
                c. Minimum donation & CSR fund
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
                d. 12 A & 80 G certificate (optional)
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

export default StepTwoForm;
