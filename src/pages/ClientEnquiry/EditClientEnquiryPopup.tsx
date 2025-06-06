

import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
// import DefaultProfile from "../../assets/images/DefaultProfile.jpg"
import { Button } from "../../common/Button"
import { InputField } from "../../common/InputField";
import { SelectField } from "../../common/SelectField";

interface EditClientEnquiryAddPopupProps {
    // isOpen: boolean;
    closePopup: () => void;
}

export const EditClientEnquiryPopup: React.FC<EditClientEnquiryAddPopupProps> = ({
    // isOpen,
    closePopup,
}) => {
    //   if (!isOpen) return null;
    const [activeTab, setActiveTab] = useState("Company Details");
    const tabs = ['Company Details', "Personal Information", "Facility Info", "Remarks"];
    return (
        <div className="fixed inset-0 bg-armsAsh bg-opacity-70 flex justify-center items-start pt-25 z-50">
            <div className="bg-white rounded-lg shadow-lg w-24/25 h-[75%] p-6 relative">
                {/* Heading */}
                <div className="relative mb-5">
                    <h2 className="text-xl font-bold mb-4 border-b-2 border-armsgrey pb-3">
                        Edit Client Enquiry
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
                            className={`px-4 py-2 text-sm font-bold cursor-pointer ${activeTab === tab
                                ? "bg-main text-white"
                                : "text-black"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {/* Company Details */}
                {activeTab === "Company Details" && (
                    <div className="max-w-full mx-auto p-0 pl-1">
                        <div className="flex flex-row gap-1 items-start">
                            <div className="flex gap-6 w-3/4">
                                {/* Form Fields */}
                                <div className="flex flex-col gap-4 flex-1">
                                    <div className="grid grid-cols-4 gap-4 max-xl:!grid-cols-3">
                                        {/* Company Name */}
                                        <div>
                                            <label className="text-sm font-semibold mb-1">
                                                Company Name
                                            </label>
                                            <InputField
                                                type="text"
                                                name="Company Name"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                        {/* Email ID */}
                                        <div>
                                            <label className="text-sm font-semibold mb-1">
                                                Email ID
                                            </label>
                                            <InputField
                                                type="email"
                                                name="email"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                        {/* Contact Person Name */}
                                        <div>
                                            <label className="text-sm font-semibold mb-1">
                                                Contact Person Name
                                            </label>
                                            <InputField
                                                type="text"
                                                name="Contact Person Name"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                        {/* Mobile Number */}
                                        <div>
                                            <label className="text-sm font-semibold mb-1">
                                                Mobile Number
                                            </label>
                                            <InputField
                                                type="tel"
                                                name="Mobile Number"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Personal Information */}
                {activeTab === "Personal Information" && (
                    <div className="max-w-full mx-auto p-0 pl-1">
                        <div className="flex flex-row gap-1 items-start">
                            <div className="flex gap-6 max-lg:!w-full w-3/4">
                                <div className="flex flex-col gap-4 flex-1">
                                    <div className="grid grid-cols-4 max-xl:!grid-cols-3 gap-4">
                                        {/* Nature of Work */}
                                        <div>
                                            <label className="text-sm font-semibold mb-1 block">
                                                Nature of Work
                                            </label>
                                            <SelectField
                                                label={""}
                                                options={[
                                                    { value: "", label: "Select Nature of Work" },
                                                    { value: "Open space", label: "Open space" },
                                                    { value: "Closed space", label: "Closed space" },

                                                ]}
                                                className="w-full cursor-pointer rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                            />
                                        </div>
                                        {/* Project Location */}
                                        <div>
                                            <label className="text-sm font-semibold mb-1 block">
                                                Project Location
                                            </label>
                                            <SelectField
                                                label={""}
                                                options={[
                                                    { value: "", label: "Select Project Location" },
                                                    { value: "Emirates", label: "Emirates" },
                                                ]}
                                                className="w-full cursor-pointer rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                            />
                                        </div>
                                        {/* Project Duration */}
                                        <div>
                                            <label className="text-sm font-semibold mb-1 block">
                                                Project Duration
                                            </label>
                                            <SelectField
                                                label={""}
                                                options={[
                                                    { value: "", label: "Select Project Duration" },
                                                    { value: "0-1 months", label: "0-1 months" },
                                                    { value: " 2-3 months 2-3 months", label: " 2-3 months" },
                                                    { value: "3-6 months", label: "3-6 months" },
                                                    { value: "6 and above", label: "6 and above" },
                                                ]}
                                                className="w-full cursor-pointer rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                            />
                                        </div>
                                        {/* Categories Required */}
                                        <div>
                                            <label className="text-sm font-semibold mb-1">
                                                Categories Required
                                            </label>
                                            <InputField
                                                type="text"
                                                name="Categories Required"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                        {/* Quantity Required */}
                                        <div>
                                            <label className="text-sm font-semibold mb-1">
                                                Quantity Required (per category)
                                            </label>
                                            <InputField
                                                type="text"
                                                name="quantityRequiredPerCategory"
                                                placeholder=""
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label=""
                                            />
                                        </div>
                                        {/* Project Start Date */}
                                        <div>
                                            <label className="text-sm font-semibold mb-1 block">
                                                Project Start Date
                                            </label>
                                            <InputField
                                                type="date"
                                                name="projectStartDate"
                                                className="w-full cursor-pointer rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Facility Info" && (
                    <div className="flex flex-wrap gap-4 px-4 ">
                        {/* Kitchen Facilities Provided? */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold mb-1">
                                Kitchen Facilities Provided?
                            </label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="kitchenFacilities"
                                        value="yes"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="kitchenFacilities"
                                        value="no"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                        {/* Transportation Provided? */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold mb-1">
                                Transportation Provided?
                            </label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="Transportation Provided"
                                        value="yes"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="kitchenFacilities"
                                        value="no"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold mb-1">
                                Accommodation Provided?
                            </label>
                            <div className="flex gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="Accommodation Provided"
                                        value="yes"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="kitchenFacilities"
                                        value="no"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                )}
                {/* Remarks */}
                {activeTab === "Remarks" && (
                    <div className="grid grid-cols-2 max-lg:!w-full max-md:!grid-cols-1 max-xl:!grid-cols-2 gap-4 px-4 w-1/2">
                        <div>
                            <label className="text-sm font-semibold mb-1 mt-1 block">
                                Query Type
                            </label>
                            <SelectField
                                label={""}
                                options={[
                                    { value: "", label: "Select Project Duration" },
                                    { value: "Manpower Supply", label: "Manpower Supply" },
                                    { value: "Recruitment", label: "Recruitment" },
                                    { value: "Outsourcing", label: "Outsourcing" },
                                    { value: "Others", label: "Others" },
                                ]}
                                className="w-full cursor-pointer rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="additionalDetails" className="text-sm font-semibold">
                                Remarks / Notes
                            </label>
                            <textarea
                                id="additionalDetails"
                                name="additionalDetails"
                                rows={4}
                                className="w-full h-9.5 rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus:outline-none resize-y"
                                placeholder="Enter details here..."
                            />
                        </div>
                    </div>

                )}

                {/* Buttons */}
                <div className="absolute bottom-0 left-0 right-0 py-4 ">
                    <div className="flex justify-center gap-4 mt-8 ">
                        <div>
                            <Button
                                onClick={closePopup}
                                buttonType="button"
                                buttonTitle="Cancel"
                                className="px-7 py-2.5 cursor-pointer text-armsBlack rounded-sm font-semibold hover:bg-gray-200"
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
