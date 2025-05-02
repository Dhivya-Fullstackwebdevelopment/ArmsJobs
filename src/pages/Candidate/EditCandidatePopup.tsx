// AddCandidateModal.tsx
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import DefaultProfile from "../../assets/images/DefaultProfile.jpg"
import { Button } from "../../common/Button"
import { InputField } from "../../common/InputField";
import { SelectField } from "../../common/SelectField";
import { FaCloudUploadAlt } from "react-icons/fa";

interface EditCandidatePopupProps {
    // isOpen: boolean;
    closePopup: () => void;
}

export const EditCandidatePopup: React.FC<EditCandidatePopupProps> = ({
    // isOpen,
    closePopup,
}) => {
    //   if (!isOpen) return null;
    const [activeTab, setActiveTab] = useState("Personal Information");
    const tabs = ["Personal Information", "Visa & Work Eligibility", "Job Infor/Work Preferences", "Documents Upload", "Other Information"];

    return (
        <div className="fixed inset-0 bg-armsAsh bg-opacity-70 flex justify-center items-start pt-25 z-50">

            <div className="bg-white rounded-lg shadow-lg w-24/25 h-[75%] p-6 relative">
                {/* Heading */}
                <div className="relative mb-5">
                    <h2 className="text-xl font-bold mb-4 border-b-2 border-armsgrey pb-3">
                        Edit Candidate
                    </h2>
                </div>
                <div
                    onClick={closePopup}
                    className="absolute top-2 right-2 text-gray-500 cursor-pointer"
                >
                    <IoCloseOutline size={24} />
                </div>
                {/* Tabs */}
                <div className="flex gap-1 border-b-3 border-armsgrey mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 text-sm font-bold ${activeTab === tab
                                ? "bg-main text-white"
                                : "text-black"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {/* Content */}
                {activeTab === "Personal Information" && (
                    <div className="max-w-full mx-auto p-0 pl-1">
                        <form className="flex flex-row gap-1 items-start">

                            {/* Photo Upload */}
                            <div className="flex gap-6 w-full">
                                <div className="flex flex-col items-center pt-5">
                                    <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded">
                                        <img
                                            src={DefaultProfile}
                                            alt="Uploaded"
                                            className="w-44 h-44 object-cover mb-2"
                                        />
                                        <div className="absolute text-black text-center text-sm font-semibold">
                                            <span>Photo Upload</span><br /><span>(Optional)</span>
                                        </div>
                                    </div>
                                    <label className="mt-5 px-4 py-2  text-armsjobslightblue rounded cursor-pointer border-2 b-armsjobslightblue ml-1">
                                        Upload
                                        <InputField
                                            type="file"
                                            name="photo"
                                            accept="image/*"
                                            className="hidden"
                                            label={""}
                                        />
                                    </label>
                                </div>

                                {/* Form Fields */}
                                <div className="flex flex-col gap-4 flex-1">
                                    {/* First Row - 4 fields */}
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex-1 min-w-[200px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Full Name
                                            </label>
                                            <InputField
                                                type="text"
                                                name="fullName"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div className="flex-1 min-w-[210px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Mobile Number <span className="text-red-500">*</span>
                                            </label>
                                            <InputField
                                                type="text"
                                                name="mobileNumber"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div className="flex-1 min-w-[220px]">
                                            <label className="text-sm font-semibold mb-1">
                                                WhatsApp Number <span className="text-red-500">*</span>
                                            </label>
                                            <InputField
                                                type="text"
                                                name="whatsappNumber"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div className="flex-1 min-w-[220px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Email ID <span className="text-red-500">*</span>
                                            </label>
                                            <InputField
                                                type="email"
                                                name="email"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                    </div>

                                    {/* Second Row - 2 fields */}
                                    <div className="flex flex-wrap gap-4">
                                        <div className="w-1/5 min-w-[295px]">
                                            <label className="text-sm font-semibold mb-1">Nationality</label>
                                            <InputField
                                                type="text"
                                                name="nationality"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div className="w-1/5 min-w-[295px]">
                                            <label className="text-sm font-semibold mb-1">Current Location</label>
                                            <InputField
                                                type="text"
                                                name="currentLocation"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
                {activeTab === "Visa & Work Eligibility" && (
                    <div className="flex flex-wrap gap-4 px-4 ">
                        <div className="flex-1 max-w-[250px]">
                            <label className="text-sm font-semibold mb-1 block">
                                Visa Type
                            </label>
                            <SelectField
                                label={""}
                                options={[
                                    { value: "", label: "Select VisaType" },
                                    { value: "UARE Employment", label: "UAE Employment" },
                                    { value: "Visit", label: "Visit" },
                                    { value: "Cancelled", label: "Cancelled" },
                                    { value: "Freelaunce", label: "Freelaunce" },
                                    { value: "Dependent", label: "Dependent" },
                                ]}
                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                            />
                        </div>

                        <div className="flex-1 max-w-[250px]">
                            <label className="text-sm font-semibold mb-1 block">
                                Visa Expiry Date
                            </label>
                            <InputField
                                type="date"
                                name="VisaExpiryDate"
                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                label={""}
                            />
                        </div>

                        <div className="flex-1 max-w-[250px]">
                            <label className="text-sm font-semibold mb-1 block">
                                Availability to join
                            </label>
                            <SelectField
                                label={""}
                                options={[
                                    { value: "", label: "Select Availability to Join" },
                                    { value: "Immediate", label: "Immediate" },
                                    { value: "1 week", label: "1 week" },
                                    { value: "2 weeks", label: "2 weeks" },
                                ]}
                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                            />
                        </div>
                    </div>
                )}
                {activeTab === "Job Infor/Work Preferences" && (
                    <div className="max-w-full mx-auto p-0 pl-1">
                        <form className="flex flex-row gap-1 items-start">
                            <div className="flex gap-6 w-full">
                                {/* Form Fields */}
                                <div className="flex flex-col gap-5 flex-1">
                                    {/* First Row - 4 fields */}
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex-1 min-w-[210px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Position Applying For
                                            </label>
                                            <InputField
                                                type="text"
                                                name="PositionApplyingFor"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div className="flex-1 min-w-[210px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Category
                                            </label>
                                            <InputField
                                                type="text"
                                                name="Category"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div className="flex-1 min-w-[220px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Any Other Category
                                            </label>
                                            <InputField
                                                type="text"
                                                name="AnyOtherCategory"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div className="flex-1 min-w-[220px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Years of UAE Experience
                                            </label>
                                            <InputField
                                                type="email"
                                                name="yearsofUAEExperience"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-[220px]">
                                            <label className="text-sm font-semibold mb-1">Expected Salary (AED)</label>
                                            <InputField
                                                type="text"
                                                name="expectedsalary"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                    </div>

                                    {/* Second Row - 2 fields */}
                                    {/* <div className="flex flex-wrap gap-4">
                                                        <div className="w-1/5 min-w-[250px]"> */}
                                    <div className="flex flex-col gap-5 flex-1">
                                        <div className="flex flex-wrap gap-4">
                                            <div className="flex-1 min-w-[210px]">
                                                <label className="text-sm font-semibold mb-1">Preferred Work Location</label>
                                                <SelectField
                                                    label={""}
                                                    options={[
                                                        { value: "", label: "Select work location" },
                                                        { value: "Dubai", label: "Dubai" },
                                                        { value: "Abu Dubai", label: "Abu Dubai" },
                                                        { value: "Open to All UAE ", label: "Coimbatore" },
                                                    ]}
                                                    className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-[220px]">
                                                <label className="text-sm font-semibold mb-1">Skills & Tasks You can Perform</label>
                                                <textarea
                                                    name="skills"
                                                    className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-[220px]">
                                                <label className="text-sm font-semibold mb-1">Language Spoken</label>
                                                <InputField
                                                    type="text"
                                                    name="LanguageSpoken"
                                                    className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                    label={""}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-[220px]">
                                                <label className="text-sm font-semibold mb-1">Preferred Work Type</label>
                                                <SelectField
                                                    label={""}
                                                    options={[
                                                        { value: "", label: "Select Work Type" },
                                                        { value: "Full-time", label: "Full-time" },
                                                        { value: "Part-time", label: "Part-time" },
                                                        { value: "Monthly Contract ", label: "Monthly Contract" },
                                                        { value: "Yearly Contract", label: "Yearly Contract" },
                                                    ]}
                                                    className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                />
                                            </div>
                                            <div className="flex-1 min-w-[220px]">
                                                <label className="text-sm font-semibold mb-1">Currently Employed</label>
                                                <div className="flex gap-4 pt-1.5">
                                                    <label className="flex items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            name="currentlyemployed"
                                                            value="yes"
                                                            className="w-5 h-5 "
                                                        />
                                                        Yes
                                                    </label>
                                                    <label className="flex items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            name="currentlyemployed"
                                                            value="no"
                                                            className="w-5 h-5"
                                                        />
                                                        No
                                                    </label>
                                                    {/* <label className="relative flex items-center gap-2 pl-7 text-gray-600 cursor-pointer">
                                                                        <input
                                                                            type="radio"
                                                                            name="currentlyemployed"
                                                                            value="no"
                                                                            className="peer absolute left-[-9999px]"
                                                                        />
                                                                        <span className="absolute left-0 top-0 w-[18px] h-[18px] border border-armsBlack rounded-full bg-white"></span>
                                                                        <span className="after:content-[''] after:w-[12px] after:h-[12px] after:bg-armsjobslightblue after:absolute after:top-[4px] after:left-[4px] after:rounded-full after:transition-all after:scale-0 after:opacity-0 peer-checked:after:scale-100 peer-checked:after:opacity-100"></span>
                                                                        No
                                                                    </label> */}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}

                {activeTab === "Documents Upload" && (
                    <div className="max-w-full mx-auto p-0 pl-1">
                        <form className="flex flex-row gap-6 items-start">
                            <div className="flex gap-13 w-auto">
                                {/* First Upload Block */}
                                <div className="flex flex-col gap-2 flex-1">
                                    <label htmlFor="Uploadcv" className="text-sm font-semibold">
                                        Upload CV
                                    </label>
                                    <div className="flex flex-col items-center border-dashed border-2 border-armsjobslightblue p-1 w-72">
                                        <div className="text-gray-400 text-5xl mb-2">
                                            <FaCloudUploadAlt className="text-main" />
                                        </div>

                                        <div className="w-max-43 flex flex-col items-center">
                                            <p className="text-armsBlack text-xs mb-2 text-center">
                                                Drag and drop your file here
                                            </p>

                                            <div className="flex items-center w-full mb-2">
                                                <hr className="flex-grow border-t border-armsBlack" />
                                                <span className="px-2 text-armsBlack text-xs">or</span>
                                                <hr className="flex-grow border-t border-armsBlack" />
                                            </div>
                                        </div>

                                        <Button
                                            buttonType="button"
                                            buttonTitle="Browse Files"
                                            className="bg-armsjobslightblue text-armsWhite font-semibold px-4 py-1 rounded hover:bg-armsWhite hover:text-armsjobslightblue border border-armsjobslightblue mb-2"
                                        />

                                        <p className="text-xs text-gray-400 mb-5">Max file size 500KB.</p>
                                    </div>

                                </div>

                                {/* Second Upload Block */}
                                <div className="flex flex-col gap-2 flex-1">
                                    <label htmlFor="Uploadcv" className="text-sm font-semibold">
                                        Upload Relevant Documents
                                    </label>
                                    <div className="flex flex-col items-center border-dashed border-2 border-armsjobslightblue p-1 w-72">
                                        <div className="text-gray-400 text-5xl mb-2">
                                            <FaCloudUploadAlt className="text-main" />
                                        </div>

                                        <div className="w-max-43 flex flex-col items-center">
                                            <p className="text-armsBlack text-xs mb-2 text-center">
                                                Drag and drop your file here
                                            </p>

                                            <div className="flex items-center w-full mb-2">
                                                <hr className="flex-grow border-t border-armsBlack" />
                                                <span className="px-2 text-armsBlack text-xs">or</span>
                                                <hr className="flex-grow border-t border-armsBlack" />
                                            </div>
                                        </div>

                                        <Button
                                            buttonType="button"
                                            buttonTitle="Browse Files"
                                            className="bg-armsjobslightblue text-armsWhite font-semibold px-4 py-1 rounded hover:bg-armsWhite hover:text-armsjobslightblue border border-armsjobslightblue mb-2"
                                        />
                                        <p className="text-xs text-gray-400 mb-5">Max file size 500KB.</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
                {activeTab === "Other Information" && (
                    <div className="max-w-full mx-auto p-0 pl-1">
                        <form className="flex flex-col gap-1 items-start">

                            {/* Photo Upload */}
                            <div className="flex gap-6 w-full">
                                {/* Form Fields */}
                                <div className="flex flex-col gap-4 flex-1">
                                    {/* First Row*/}
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex-1 w-full flex flex-col gap-0">
                                            <label className="text-sm font-semibold pb-3">
                                                Additional Notes or Information
                                            </label>
                                            <textarea
                                                name="AdditionalNotes"
                                                className="w-full h-24 rounded-[5px] border-1 border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Referral Contact Details */}
                                    <div className="flex flex-row gap-4 flex-wrap">
                                        <div className="w-[550px] max-w-full">
                                            <label className="text-sm font-semibold ">
                                                Referral Contact Details
                                            </label>
                                            <div className="flex flex-row gap-4 max-w-full">
                                                {/* Name Field */}
                                                <div className="flex flex-col flex-1 min-w-[150px]">
                                                    <label className="text-sm font-semibold mb-1">
                                                        Name
                                                    </label>
                                                    <InputField
                                                        type="text"
                                                        name="name"
                                                        className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                        label={""}
                                                    />
                                                </div>
                                                <div className="flex flex-col flex-1 min-w-[150px]">
                                                    <label className="text-sm font-semibold mb-1">
                                                        Contact
                                                    </label>
                                                    <InputField
                                                        type="text"
                                                        name="contact"
                                                        className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                        label={""}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
                {/* Buttons */}
                <div className="absolute bottom-0 left-0 right-0 py-4 ">
                    <div className="flex justify-center gap-4 mt-8 ">
                        <div>
                            <Button
                                buttonType="button"
                                buttonTitle="Cancel"
                                className="px-6 py-2 text-armsBlack font-semibold"
                            />
                        </div>
                        <div>
                            <Button
                                buttonType="button"
                                buttonTitle="Submit"
                                className="bg-armsjobslightblue text-lg text-armsWhite font-bold border-[1px] rounded-sm px-8 py-2 cursor-pointer hover:bg-armsWhite hover:text-armsjobslightblue hover:border-armsjobslightblue"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
