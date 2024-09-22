import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentStep } from "../store/formSlice";
import Dropdown from "./Dropdown";
import NormalInput from "./NormalInput";

const StepOneForm = () => {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCurrentStep(2));
    scroll(0, 0);
  };

  return (
    <div className="pt-10 mb-20">
      <div className="max-w-[1440px] mx-auto p-5">
        <form onSubmit={submitHandler} className="p-5 rounded-lg shadow-2xl">
          <fieldset className="border border-gray-200 rounded-lg p-10 flex flex-col items-start gap-5 text-black">
            <legend className="py-3 px-9 border border-gray-200 rounded-lg text-blue-500 shadow-inner font-semibold">
              General Details
            </legend>
            <div className="flex gap-5">
              <NormalInput title={"Enter NGO Darpan ID"} type={"text"} />
              <div>
                <button className="px-6 py-2 bg-green-500 text-white rounded-md text-sm font-semibold">
                  Verify
                </button>
              </div>
            </div>

            <NormalInput title={"Name of Organization"} type={"text"} />
            <NormalInput title={"PAN of Organization"} type={"text"} />
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
            <NormalInput title={"Pin Code"} type={"number"} />
            <NormalInput title={"Email"} type={"email"} />
            <NormalInput title={"Landline Number"} type={"text"} />
            <NormalInput
              title={"Name of the Head of Organization"}
              type={"text"}
            />
            <Dropdown title={"Gender"} options={["Male", "Female", "Other"]} />
            <NormalInput title={"Designation"} type={"text"} />
            <div className="flex gap-5">
              <NormalInput title={"Mobile Number"} type={"text"} />
              <div>
                <button className="px-6 py-2 bg-green-500 text-white rounded-md text-sm font-semibold">
                  Verify
                </button>
              </div>
            </div>
            <div className="flex gap-5">
              <NormalInput title={"Enter OTP"} type={"text"} />

              <div>
                <button className="px-6 py-2 bg-green-500 text-white rounded-md text-sm font-semibold">
                  Submit OTP
                </button>
              </div>
            </div>

            <NormalInput title={"Aadhar Number"} type={"text"} />
            <div className="w-full flex justify-end py-5">
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

export default StepOneForm;
