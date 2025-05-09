// AddCandidateModal.tsx
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
//import DefaultProfile from "../../assets/images/DefaultProfile.jpg"
import { Button } from "../../common/Button"
import { InputField } from "../../common/InputField";
// import { SelectField } from "../../common/SelectField";
// import { FaCloudUploadAlt } from "react-icons/fa";

interface EditAgentsSupplierPopupProps {
    // isOpen: boolean;
    closePopup: () => void;
}

export const EditAgentsSupplierPopup: React.FC<EditAgentsSupplierPopupProps> = ({
    // isOpen,
    closePopup,
}) => {
    //   if (!isOpen) return null;
    const [activeTab, setActiveTab] = useState("Agent Details");
    const tabs = ["Agent Details", "Eligibility & History", "Manpower Info", "Additional Info"];

    return (
        <div className="fixed inset-0 bg-armsAsh bg-opacity-70 flex justify-center items-start pt-25 z-50">
            <div className="bg-white rounded-lg shadow-lg w-24/25 h-[75%] p-6 relative">
                {/* Heading */}
                <div className="relative mb-5">
                    <h2 className="text-xl font-bold mb-4 border-b-2 border-armsgrey pb-3">
                        Edit Agents/Supplier
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
                {/* Agent Details */}
                {activeTab === "Agent Details" && (
                    <div className="max-w-full mx-auto p-0 pl-1 ">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="grid w-3/4 md:grid-cols-2 lg:grid-cols-3 grid-cols-3 gap-4">
                                {/* Name of Agent */}
                                <div>
                                    <label className="text-sm font-semibold mb-1">
                                        Name of Agent<span className="text-red-500">*</span>
                                    </label>
                                    <InputField
                                        type="text"
                                        name="nameofagent"
                                        className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                        label={""}
                                    />
                                </div>
                                {/* Mobile Number */}
                                <div>
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
                                {/* WhatsApp Number */}
                                <div>
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
                                {/* Email ID  */}
                                <div >
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
                        </div>
                    </div>


                )}
                {/* Eligibility & History */}
                {activeTab === "Eligibility & History" && (
                    <div className="grid grid-cols-3 w-3/4">
                        <div>
                            <label className="text-sm font-semibold mb-1 block">
                                Can the agent do recruitment?
                            </label>
                            <div className="flex gap-4 pt-1.5">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="currentlyemployed"
                                        value="yes"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="currentlyemployed"
                                        value="no"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        <div className="pr-12">
                            <label className="text-sm font-semibold mb-1 block">
                                Have you been associated earlier with ARMSJOBS?
                            </label>
                            <div className="flex gap-4 pt-1.5">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="currentlyemployed"
                                        value="yes"
                                        className="w-5 h-5 cursor-pointer "
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="currentlyemployed"
                                        value="no"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold mb-1 block">
                                Can the agent do manpower supplying?
                            </label>
                            <div className="flex gap-4 pt-1.5">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="currentlyemployed"
                                        value="yes"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="currentlyemployed"
                                        value="no"
                                        className="w-5 h-5 cursor-pointer"
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                )}
                {/* Manpower Info */}
                {activeTab === "Manpower Info" && (
                    <div className="max-w-full mx-auto p-0 pl-1">
                        <div className="flex flex-row gap-1 items-start">
                            <div className="flex gap-6 w-3/4">
                                {/* Form Fields */}
                                <div className="flex flex-col gap-5 flex-1">
                                    {/* First Row - 4 fields */}
                                    <div className="flex flex-wrap gap-3">
                                        <div className="flex-1 min-w-[210px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Categories You Can Supply
                                            </label>
                                            <InputField
                                                type="text"
                                                name="categoriesyoucansupply"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div className="flex-1 min-w-[210px]">
                                            <label className="text-sm font-semibold mb-1">
                                                Quantity Estimates
                                            </label>
                                            <InputField
                                                type="text"
                                                name="quantituyestimates"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-[220px]" >
                                            <label className="text-sm font-semibold mb-1">
                                                Areas Covered (Emirates)
                                            </label>
                                            <textarea
                                                name="areascovered"
                                                className="w-full  h-9.5 rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* Additional Info */}
                {activeTab === "Additional Info" && (
                    <div className="max-w-full mx-auto p-0 pl-1">
                        <div className="flex flex-row gap-6 items-start">
                            <div className="flex gap-13 w-1/4">
                                <div className="flex-1 w-full">
                                    <label className="text-sm font-semibold mb-3 block">
                                        Additional Notes (Category Rates & Recruitment Rates)
                                    </label>
                                    <textarea
                                        name="areascovered"
                                        className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                    />
                                </div>
                            </div>
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
                                className="px-7 py-2.5  text-armsBlack rounded-sm font-semibold hover:bg-gray-200 cursor-pointer"
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
