import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";

const StepFiveForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCurrentStep(6));
  };
  const backBtnHandler = () => {
    dispatch(updateCurrentStep(4));
  };
  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5 rounded-lg shadow-2xl">
        <form onSubmit={submitHandler}>
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-5 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              Beneficiary Details
            </legend>
            <div>
              <h2>If hostel is maintained, then number of hostellers</h2>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Type of Proof<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value="online">UDID</option>
                  <option value="Offline">Enrolment Number</option>
                </select>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Enter UDID/Enrolment Number
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
              <label htmlFor="disCer" className="font-semibold w-[200px]">
                Disability Certificate
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
                NAME
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
                AADHAR NUMBER
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
                Date of Birth
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
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Category of Disability<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value="online">Autism</option>
                  <option value="Offline">Cerebral Palsy</option>
                  <option value="Offline">Mental Retardation</option>
                  <option value="Offline">Multiple Disabilities</option>
                </select>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-9  text-sm font-semibold rounded-md cursor-pointer"
              >
                Add More
              </button>
            </div>
            <div>
              <h2>If hostel is maintained, then number of hostellers</h2>
            </div>
            {[
              "Autism",
              "Cerebral Palsy",
              "Intellectual Disability",
              "Multiple Disability",
            ].map((data, ind) => {
              return (
                <div className="flex gap-10 text-sm items-center" key={ind}>
                  <label htmlFor={data} className="font-semibold w-[200px]">
                    {data}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <span>:</span>
                    <input
                      type="number"
                      name={data}
                      id={data}
                      className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                    />
                  </div>
                </div>
              );
            })}
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

export default StepFiveForm;
