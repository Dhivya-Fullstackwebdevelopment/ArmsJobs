// AddCandidateModal.tsx
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import DefaultProfile from "../../assets/images/DefaultProfile.jpg"
import { Button } from "../../common/Button"
import { InputField } from "../../common/InputField";
import { SelectField } from "../../common/SelectField";

interface AddCandidatePopupProps {
    // isOpen: boolean;
    closePopup: () => void;
}

export const AddCandidatePopup: React.FC<AddCandidatePopupProps> = ({
    // isOpen,
    closePopup,
}) => {
    //   if (!isOpen) return null;
    const [activeTab, setActiveTab] = useState("Personal Information");
    const tabs = ["Personal Information", "Visa & Work Eligibility", "Job Information", "Documents Upload"];

    return (
        <div className="fixed inset-0 bg-armsAsh bg-opacity-70 flex justify-center items-start pt-25 z-50">

            <div className="bg-white rounded-lg shadow-lg w-24/25 h-[75%] p-6 relative">
                {/* Heading */}
                <div className="relative mb-5">
                    <h2 className="text-xl font-bold mb-4 border-b-2 border-armsgrey pb-3">
                        Add Candidate
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
                {activeTab === "Job Information" && (
                    <div className="max-w-full mx-auto p-0 pl-1">
                        <form className="flex flex-row gap-1 items-start">
                            <div className="flex gap-6 w-3/4">
                                {/* Form Fields */}
                                <div className="flex flex-col gap-4 flex-1">
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
                                    </div>

                                    {/* Second Row - 2 fields */}
                                    <div className="flex flex-wrap gap-4">
                                        <div className="w-1/5 min-w-[250px]">
                                            <label className="text-sm font-semibold mb-1">Expected Salary (AED)</label>
                                            <InputField
                                                type="text"
                                                name="expectedsalary"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div className="w-1/5 min-w-[250px]">
                                            <label className="text-sm font-semibold mb-1">Preferred Work Location</label>
                                            <InputField
                                                type="text"
                                                name="preferredworklocation"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                        <div className="w-1/5 min-w-[250px]">
                                            <label className="text-sm font-semibold mb-1">Skills& Tasks You can Perform</label>
                                            <InputField
                                                type="text"
                                                name="skills"
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
