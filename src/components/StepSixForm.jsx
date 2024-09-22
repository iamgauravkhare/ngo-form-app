import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";
import { useForm } from "react-hook-form";

const StepSixForm = () => {
  const data = [
    {
      label:
        "Copy of Undertaking in letter head of Head of the NGO signed and stamped by authorized signatory",
      name: "doc1",
    },
    {
      label: "Memorandum of Association (MOA)",
      name: "doc2",
    },
    {
      label:
        "Copy of Certificate of Registration under Societies/Registration Act/Companies Act/Public Charitable Trust",
      name: "doc3",
    },
    {
      label:
        "Copy of Certificate under Rights of Persons with Disabilities Act, 2016",
      name: "doc4",
    },
    {
      label:
        "Copy of Certificate of Registration under National Trust Act, if registered earlier",
      name: "doc5",
    },
    {
      label: "Copy of PAN Card of Applicant Organization",
      name: "doc6",
    },
    {
      label: "Copy of Aadhar Card of Staff Members (If applicable)",
      name: "doc7",
    },
    {
      label: "Copy of Aadhar Card of Governing Body/Managing Body members ",
      name: "doc8",
    },
    {
      label:
        "Copy of Form E signed and stamped by authorized signatory in each page ",
      name: "doc9",
    },
  ];
  const dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCurrentStep(7));
  };
  const backBtnHandler = () => {
    dispatch(updateCurrentStep(5));
  };
  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5 rounded-lg shadow-2xl">
        <form onSubmit={submitHandler}>
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-5 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              Documentation
            </legend>
            {data.map((data, ind) => (
              <div className="flex gap-10 text-sm items-center" key={ind}>
                <label htmlFor={data.name} className="font-semibold w-[400px]">
                  {data.label}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <span>:</span>
                  <input
                    type="file"
                    id={data.name}
                    name={data.name}
                    className="border border-gray-300 rounded-md p-2 outline-none"
                    {...register(data.name, { required: true })}
                  />

                  {errors?.data?.name && (
                    <p className="text-red-600">This field is required.</p>
                  )}
                </div>
              </div>
            ))}
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

export default StepSixForm;
