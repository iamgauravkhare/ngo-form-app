import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";

const StepFourForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCurrentStep(5));
  };
  const backBtnHandler = () => {
    dispatch(updateCurrentStep(3));
  };
  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5 rounded-lg shadow-2xl">
        <form onSubmit={submitHandler}>
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-5 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              Establishment Details
            </legend>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Category of Building<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value="online">Own</option>
                  <option value="Offline">Rented</option>
                </select>
              </div>
            </div>
            <p>If, own building Attach proof (any one):</p>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Document Type<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value="online"> Electicity Bill</option>
                  <option value="Offline"> Water Connection Bill</option>
                  <option value="Offline"> Landline Telephone Bill</option>
                  <option value="Offline"> Any Other</option>
                </select>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="disCer" className="font-semibold w-[200px]">
                Attachment: Only PDF document
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
            <p>if, Rented: </p>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Valid till
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
              <label htmlFor="disCer" className="font-semibold w-[200px]">
                Attach Rent Agreement: Only PDF document
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
            <h2>Enter details of Governing Body/Managing Body Member:</h2>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                Name
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
                  <option value="">Male</option>
                  <option value="">Female</option>
                  <option value="">Other</option>
                </select>
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
                QUALIFICATION<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value="">Graduate</option>
                  <option value="">Graduate</option>
                  <option value="">Professional</option>
                </select>
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
                OCCUPATION<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value="">Business</option>
                  <option value="">Profession</option>
                  <option value="">Employment</option>
                </select>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                ARE YOU, PARENT OR PERSON WITH DISABILITY ?
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value="">PARENT</option>
                  <option value="">PERSON WITH DISABILITY</option>
                </select>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                IF PARENT, THEN NAME OF THE PWD{" "}
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
                DISABILITY OF PWD
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  {/* <option value="">PARENT</option>
                  <option value="">PERSON WITH DISABILITY</option> */}
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

            <h2>Enter details of Staff </h2>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                CRR No., if available
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
                JOB TYPE<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value="online">Full Time</option>
                  <option value="Offline">Part Time</option>
                </select>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                If Part Time, frequency of visits per week
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
                DESIGNATION
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
                QUALIFICATION<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <select
                  name="orgName"
                  id="orgName"
                  className="border border-gray-200 rounded-md p-2 shadow-inner min-w-[400px]"
                >
                  <option value="online"> Post Graduate</option>
                  <option value="Offline">Graduate</option>
                  <option value="Offline">Senior Secondary</option>
                  <option value="Offline"> High School</option>
                </select>
              </div>
            </div>
            <div className="flex gap-10 text-sm items-center">
              <label htmlFor="orgName" className="font-semibold w-[200px]">
                DATE OF JOINING THE ORGANIZATION
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
                SALARY / HONORARIUM (MONTHLY)
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
                DATE OF JOINING THE ORGANIZATION
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

export default StepFourForm;
