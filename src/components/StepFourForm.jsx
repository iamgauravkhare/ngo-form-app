import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";
import Dropdown from "./Dropdown";
import SubHeading from "./SubHeading";
import SelectFile from "./SelectFile";
import NormalInput from "./NormalInput";

const StepFourForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCurrentStep(5));
    scrollTo(0, 0);
  };
  const backBtnHandler = () => {
    dispatch(updateCurrentStep(3));
    scrollTo(0, 0);
  };
  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5">
        <form onSubmit={submitHandler} className="p-5 rounded-lg shadow-2xl">
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-5 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              Establishment Details
            </legend>
            <Dropdown
              title={"Category of Building"}
              options={["Own", "Rented"]}
            />
            <SubHeading heading={"If, own building Attach proof (any one)"} />
            <Dropdown
              title={"Document Type"}
              options={[
                "Electicity Bill",
                "Water Connection Bill",
                "Landline Telephone Bill",
                "Any Other",
              ]}
            />
            <SelectFile
              data={{
                label: "Attachment - Only PDF document",
                name: "attachment",
              }}
            />
            <SubHeading heading={"If, rented"} />
            <NormalInput title={" Valid Till"} type={"date"} />
            <SelectFile
              data={{
                label: "Attach Rent Agreement - Only PDF document",
                name: "rent-aggrement",
              }}
            />
            <SubHeading
              heading={"Enter details of Governing Body/Managing Body Member"}
            />
            <NormalInput title={"Name"} type={"text"} />
            <Dropdown title={"Gender"} options={["Male", "Female", "Other"]} />
            <NormalInput title={"Aadhar Number"} type={"text"} />
            <Dropdown
              title={"Qualification"}
              options={["Graduate", "Post Graduate", "Professional"]}
            />
            <NormalInput title={"Address"} type={"text"} />
            <Dropdown
              title={"State"}
              options={[
                "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttar Pradesh",
                "Uttarakhand",
                "West Bengal",
              ]}
            />
            <Dropdown
              title={"District"}
              options={[
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Prakasam",
                "Srikakulam",
                "Sri Potti Sriramulu Nellore",
                "Visakhapatnam",
                "Vizianagaram",
                "West Godavari",
                "YSR Kadapa",
                "Tawang",
                "West Kameng",
                "East Kameng",
                "Papum Pare",
                "Kurung Kumey",
                "Kra Daadi",
                "Lower Subansiri",
                "Upper Subansiri",
                "West Siang",
                "East Siang",
                "Siang",
                "Upper Siang",
                "Lower Siang",
                "Lower Dibang Valley",
                "Upper Dibang Valley",
                "Anjaw",
                "Lohit",
                "Namsai",
                "Changlang",
                "Tirap",
                "Longding",
                "Baksa",
                "Barpeta",
                "Biswanath",
                "Bongaigaon",
                "Cachar",
                "Charaideo",
                "Chirang",
                "Darrang",
                "Dhemaji",
                "Dhubri",
                "Dibrugarh",
                "Goalpara",
                "Golaghat",
                "Hailakandi",
                "Hojai",
                "Jorhat",
                "Kamrup",
                "Kamrup Metropolitan",
                "Karbi Anglong",
                "Karimganj",
                "Kokrajhar",
                "Lakhimpur",
                "Majuli",
                "Morigaon",
                "Nagaon",
                "Nalbari",
                "Sivasagar",
                "Sonitpur",
                "South Salmara-Mankachar",
                "Tinsukia",
                "Udalguri",
                "West Karbi Anglong",
                "Araria",
                "Arwal",
                "Aurangabad",
                "Banka",
                "Begusarai",
                "Bhagalpur",
                "Bhojpur",
                "Buxar",
                "Darbhanga",
                "East Champaran",
                "Gaya",
                "Gopalganj",
                "Jamui",
                "Jehanabad",
                "Kaimur",
                "Katihar",
                "Khagaria",
                "Lakhisarai",
                "Madhepura",
                "Madhubani",
                "Munger",
                "Muzaffarpur",
                "Nalanda",
                "Nawada",
                "Patna",
                "Purnia",
                "Rohtas",
                "Saharsa",
                "Samastipur",
                "Saran",
                "Sheikhpura",
                "Sheohar",
                "Sitamarhi",
                "Supaul",
                "Vaishali",
                "West Champaran",
              ]}
            />
            <Dropdown
              title={"Occupation"}
              options={["Business", "Profession", "Employment"]}
            />
            <Dropdown
              title={"ARE YOU, PARENT OR PERSON WITH DISABILITY ?"}
              options={["PARENT", "PERSON WITH DISABILITY"]}
            />
            <NormalInput
              title={"IF PARENT, THEN NAME OF THE PWD"}
              type={"text"}
            />
            <Dropdown title={"DISABILITY OF PWD"} options={[]} />
            <div className="w-full flex justify-between py-5">
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-9  text-sm font-semibold rounded-md cursor-pointer hover:bg-blue-600"
              >
                Add More
              </button>
            </div>
            <SubHeading heading={"Enter details of Staff"} />
            <NormalInput title={"CRR No., if available"} type={"text"} />

            <Dropdown title={"JOB TYPE"} options={["Full Time", "Part Time"]} />

            <NormalInput
              title={"If Part Time, frequency of visits per week"}
              type={"text"}
            />
            <NormalInput title={"Name"} type={"text"} />
            <NormalInput title={"Aadhar Number"} type={"text"} />
            <NormalInput title={"Designation"} type={"text"} />
            <NormalInput title={"Date of Birth"} type={"date"} />
            <Dropdown
              title={"QUALIFICATION"}
              options={[
                "Post Graduate",
                "Graduate",
                "Senior Secondary",
                "High School",
              ]}
            />
            <NormalInput
              title={"DATE OF JOINING THE ORGANIZATION"}
              type={"date"}
            />
            <NormalInput
              title={"SALARY / HONORARIUM (MONTHLY)"}
              type={"text"}
            />
            <NormalInput
              title={"DATE OF JOINING THE ORGANIZATION"}
              type={"date"}
            />

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

export default StepFourForm;
