import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";
import SelectFile from "./SelectFile";
import toast from "react-hot-toast";
// import { useForm } from "react-hook-form";

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
      label: "Copy of Aadhar Card of Governing Body/Managing Body members",
      name: "doc8",
    },
  ];
  const dispatch = useDispatch();
  // const {
  //   register,
  //   reset,
  //   handleSubmit,
  //   formState: { errors, isSubmitSuccessful },
  // } = useForm();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCurrentStep(7));
    scrollTo(0, 0);
  };
  const backBtnHandler = () => {
    dispatch(updateCurrentStep(5));
    scrollTo(0, 0);
  };
  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5">
        <form onSubmit={submitHandler} className="p-5 rounded-lg shadow-2xl">
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-5 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              Attachments
            </legend>
            {data.map((data, ind) => (
              <SelectFile data={data} key={ind} width={"w-[400px]"} />
            ))}
            <div className="flex gap-10 text-sm items-start">
              <label htmlFor="doc9" className="font-semibold w-[400px]">
                Copy of Form E signed and stamped by authorized signatory in
                each page<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span>:</span>
                <input
                  type="file"
                  id="doc9"
                  name="doc9"
                  className="border border-gray-300 rounded-md p-2 outline-none shadow-inner"
                />
                <button
                  type="button"
                  className="bg-green-500 text-white py-[10.75px] px-9 text-sm font-semibold rounded-md cursor-pointer hover:bg-green-600 ms-5"
                  onClick={() => toast.success("Form Dowloaded")}
                >
                  Download Form E
                </button>
              </div>
            </div>
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

export default StepSixForm;
