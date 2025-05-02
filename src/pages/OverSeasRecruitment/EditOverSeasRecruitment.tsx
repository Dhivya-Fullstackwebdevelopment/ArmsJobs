import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
//import DefaultProfile from "../../assets/images/DefaultProfile.jpg"
import { Button } from "../../common/Button"
import { InputField } from "../../common/InputField";
//import { SelectField } from "../../common/SelectField";
import { FaCloudUploadAlt } from "react-icons/fa";

interface OverSeasAddPopupProps {
    // isOpen: boolean;
    closePopup: () => void;
}

export const EditOverSeasPopup: React.FC<OverSeasAddPopupProps> = ({
    // isOpen,
    closePopup,
}) => {
    //   if (!isOpen) return null;
    const [activeTab, setActiveTab] = useState("Company Details");
    // const tabs = ["Personal Information", "Visa & Work Eligibility", "Job Information", "Documents Upload"];
    const tabs = ['Company Details', "Recruitment Info", "Documents & Notes"];
    return (
        <div className="fixed inset-0 bg-armsAsh bg-opacity-70 flex justify-center items-start pt-25 z-50">

            <div className="bg-white rounded-lg shadow-lg w-24/25 h-[75%] p-6 relative">
                {/* Heading */}
                <div className="relative mb-5">
                    <h2 className="text-xl font-bold mb-4 border-b-2 border-armsgrey pb-3">
                        Edit Overseas Recruitment
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

                {activeTab === "Company Details" && (
                    <div className="max-w-full mx-auto p-0 pl-1">
                        <form className="flex flex-row gap-1 items-start">
                            <div className="flex gap-6 w-3/4">
                                {/* Form Fields */}
                                <div className="flex flex-col gap-4 flex-1">
                                    {/* First Row - 4 fields */}
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex-1 min-w-[210px]">
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


                                        <div className="flex-1 min-w-[220px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Country
                                            </label>
                                            <InputField
                                                type="text"
                                                name="Contact Person Name"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div className="flex-1 min-w-[220px]">
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


                                        <div className="flex-1 min-w-[220px]">
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
                                    <div className="flex flex-wrap gap-4">


                                        <div className="w-1/5 min-w-[250px]">
                                            <label className="text-sm font-semibold mb-1 block">
                                                WhatsApp Number
                                            </label>
                                            <InputField
                                                type="tel"
                                                name="projectStartDate"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label=""
                                            />
                                        </div>
                                        <div className="w-1/5 min-w-[250px]">

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
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}
                {activeTab === "Recruitment Info" && (
                    <div className="max-w-full mx-auto p-0 pl-1">
                        <form className="flex flex-row gap-1 items-start">
                            <div className="flex gap-6 w-3/4">
                                {/* Form Fields */}
                                <div className="flex flex-col gap-4 flex-1">
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex-1 min-w-[220px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Categories You Can Provide
                                            </label>
                                            <InputField
                                                type="text"
                                                name="Categories You Can Provide"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-[220px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Nationality of Workers
                                            </label>
                                            <InputField
                                                type="text"
                                                name="Nationality of Workers"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-[220px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Mobilization Time
                                            </label>
                                            <InputField
                                                type="text"
                                                name="Mobilization Time"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 mt-2">
                                        <label className="text-sm font-semibold mb-1">
                                            UAE Deployment Experience
                                        </label>
                                        <div className="flex gap-6">
                                            <label className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="UAE Deployment Experience"
                                                    value="yes"
                                                    className="accent-blue-600"
                                                />
                                                Yes
                                            </label>
                                            <label className="flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="UAE Deployment Experience"
                                                    value="no"
                                                    className="accent-blue-600"
                                                />
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )}


                {activeTab === "Documents & Notes" && (
                    <div className="flex flex-wrap gap-2 px-4 w-1/2">

                        {/* <div className="flex flex-col gap-2">
                            <label htmlFor="uploadFile" className="text-sm font-semibold mb-1">
                                Upload Relevant Documents (License Copy / Profile / Exp Certificate etc)
                            </label>
                            <input
                                type="file"
                                id="uploadFile"
                                name="uploadFile"
                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 text-sm file:mr-4 file:py-1.5 file:px-4 file:rounded file:border-0 file:text-white file:bg-armblue hover:file:bg-blue-600"
                            />
                        </div> */}


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


                        <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="additionalDetails" className="text-sm font-semibold mb-1">
                                Additional Details
                            </label>
                            <textarea
                                id="additionalDetails"
                                name="additionalDetails"
                                rows={4}
                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus:outline-none resize-y"
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
