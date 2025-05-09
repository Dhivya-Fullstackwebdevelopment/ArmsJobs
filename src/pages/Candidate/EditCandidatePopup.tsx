// AddCandidateModal.tsx
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import DefaultProfile from "../../assets/images/DefaultProfile.jpg"
import { Button } from "../../common/Button"
import { InputField } from "../../common/InputField";
import { SelectField } from "../../common/SelectField";
import { FaCloudUploadAlt } from "react-icons/fa";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditCandidateList } from "../../Commonapicall/Candidateapicall/Candidateapis";

interface EditCandidatePopupProps {
    // isOpen: boolean;
    closePopup: () => void;
    refreshData: () => void;
    editCandidate: {
        id: number;
        candidate_id: number;
        photo_upload?: string | null;
        full_name: string;
        mobile_number: string;
        whatsapp_number: string;
        email: string;
        nationality: string;
        current_location: string;
        visa_type: string;
        visa_expiry_date: string | null;
        availability_to_join: string;
        position_applying_for: string;
        category: string;
        other_category?: string | null;
        uae_experience_years: string;
        skills_tasks: string;
        preferred_work_location: string;
        expected_salary: string;
        upload_cv: string;
        relevant_docs1?: string | null;
        relevant_docs2?: string | null;
        relevant_docs3?: string | null;
        status: string;
        created_at: string;
        is_deleted: boolean;
        languages_spoken: string;
        preferred_work_type: string;
        currently_employed: boolean;
        additional_notes: string;
        referral_name: string;
        referral_contact: string;
    }
}

// Personal Information Schema
const personalInfoSchema = zod.object({
    full_name: zod.string().min(3, "Full name is required"),
    mobile_number: zod
        .string()
        .min(1, "Mobile number is required")
        .regex(/^[0-9]+$/, "Must be a valid phone number"),
    whatsapp_number: zod
        .string()
        .min(1, "WhatsApp number is required")
        .regex(/^[0-9]+$/, "Must be a valid phone number"),
    email: zod
        .string()
        .min(1, "Email is required")
        .email("Must be a valid email"),
    nationality: zod.string().optional(),
    current_location: zod.string().optional(),
});

// Visa & Work Eligibility Schema
const visaSchema = zod.object({
    visa_type: zod.string().optional(),
    visa_expiry_date: zod.string().optional(),
    availability_to_join: zod.string().optional(),
});

// Job Information Schema
const jobInfoSchema = zod.object({
    position_applying_for: zod.string().optional(),
    category: zod.string().optional(),
    other_category: zod.string().optional(),
    expected_salary: zod.string().optional(),
    preferred_work_location: zod.string().optional(),
    skills_tasks: zod.string().optional(),
    languages_spoken: zod.string().optional(),
    preferred_work_type: zod.string().optional(),
    currently_employed: zod.string().optional(),
    uae_experience_years: zod.string().optional(),
});

// Documents Schema
const documentsSchema = zod.object({
    cv: zod.any(), // Adjust based on your file validation needs
    relevantDocuments: zod.any(),
});

// Other Information Schema
const otherInfoSchema = zod.object({
    additional_notes: zod.string().optional(),
    referral_name: zod.string().optional(),
    referral_contact: zod.string().optional(),
});

// Combined Schema
const candidateSchema = personalInfoSchema
    .merge(visaSchema)
    .merge(jobInfoSchema)
    .merge(documentsSchema)
    .merge(otherInfoSchema);

type EditCandidateFormData = zod.infer<typeof candidateSchema>;


export const EditCandidatePopup: React.FC<EditCandidatePopupProps> = ({
    // isOpen,
    closePopup,
    editCandidate,
    refreshData
}) => {
    //   if (!isOpen) return null;
    const [activeTab, setActiveTab] = useState("Personal Information");
    const tabs = ["Personal Information", "Visa & Work Eligibility", "Job Infor/Work Preferences", "Documents Upload", "Other Information"];
    const [, setLoading] = useState(false);
    const [, setError] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<EditCandidateFormData>({
        resolver: zodResolver(candidateSchema),
        defaultValues: {
            currently_employed: "no", // Set default value for radio buttons
        },
    });

    useEffect(() => {
        if (editCandidate) {
            setValue("full_name", editCandidate.full_name);
            setValue("mobile_number", editCandidate.mobile_number);
            setValue("whatsapp_number", editCandidate.whatsapp_number);
            setValue("email", editCandidate.email);
            setValue("nationality", editCandidate.nationality || '');
            setValue("current_location", editCandidate.current_location || '');
            setValue("visa_type", editCandidate.visa_type || '');
            setValue("visa_expiry_date", editCandidate.visa_expiry_date || '');
            setValue("availability_to_join", editCandidate.availability_to_join || '');
            setValue("position_applying_for", editCandidate.position_applying_for || '');
            setValue("category", editCandidate.category || '');
            setValue("other_category", editCandidate.other_category || '');
            setValue("uae_experience_years", editCandidate.uae_experience_years || '');
            setValue("skills_tasks", editCandidate.skills_tasks || '');
            setValue("preferred_work_location", editCandidate.preferred_work_location || '');
            setValue("expected_salary", editCandidate.expected_salary || '');
            setValue("languages_spoken", editCandidate.languages_spoken || '');
            setValue("preferred_work_type", editCandidate.preferred_work_type || '');
            setValue("currently_employed", editCandidate.currently_employed ? 'yes' : 'no');
            setValue("additional_notes", editCandidate.additional_notes || '');
            setValue("referral_name", editCandidate.referral_name || '');
            setValue("referral_contact", editCandidate.referral_contact || '');
        }
    }, [editCandidate, setValue]);


    const onSubmit = async (data: EditCandidateFormData) => {
        setLoading(true);
        setError(null);
        try {
            // Call the API function with all the form data
            const response = await EditCandidateList(
                editCandidate.id,
                data.full_name || '',
                data.mobile_number || '',
                data.whatsapp_number || '',
                data.email || '',
                data.nationality || '', // Provide fallback empty string if optional
                data.current_location || '',
                data.visa_type || '',
                data.availability_to_join || '',
                data.position_applying_for || '',
                data.category || '',
                data.uae_experience_years || '',
                data.skills_tasks || '',
                data.preferred_work_location || '',
                data.expected_salary || '',
                data.visa_expiry_date || '',
                data.other_category || '',
                data.languages_spoken || '',
                data.preferred_work_type || '',
                data.currently_employed || 'no', // Default to 'no' if not provided
                data.additional_notes || '',
                data.referral_name || '',
                data.referral_contact || ''
            );
            // On success:
            console.log("Candidate Updated successfully", response);
            reset();
            closePopup();
            refreshData();
        } catch (error: any) {
            setError(error.message || "Failed to submit form");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-armsAsh bg-opacity-70 flex justify-center items-start pt-25 z-50">
            <div className="bg-white rounded-lg shadow-lg w-24/25 h-[75%] p-6 relative  max-xl:!h-[90%]">
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
                            className={`px-4 py-2 text-sm font-bold cursor-pointer ${activeTab === tab
                                ? "bg-main text-white"
                                : "text-black"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                {/* Content */}
                <form onSubmit={handleSubmit(onSubmit)} className="h-[calc(100%-150px)] overflow-y-auto">
                    {activeTab === "Personal Information" && (
                        <div className="max-w-full mx-auto p-0 pl-1">
                            <div className="flex flex-row gap-1 items-start">
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
                                                className="hidden  cursor-pointer"
                                                label={""}
                                            />
                                        </label>
                                    </div>
                                    {/* Form Fields */}
                                    <div className="flex flex-col gap-4 flex-1">
                                        <div className="grid grid-cols-4 md:!grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4 gap-6.5">
                                            <div>
                                                <label className="text-sm font-semibold mb-1">
                                                    Full Name<span className="text-red-500">*</span>
                                                </label>
                                                <InputField
                                                    type="text"
                                                    {...register("full_name")}
                                                    name="full_name"
                                                    className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                    label={""}
                                                />
                                                {errors.full_name && <p className="text-sm text-red-500">{errors.full_name.message}</p>}
                                            </div>

                                            <div>
                                                <label className="text-sm font-semibold mb-1">
                                                    Mobile Number <span className="text-red-500">*</span>
                                                </label>
                                                <InputField
                                                    type="text"
                                                    {...register("mobile_number")}
                                                    name="mobile_number"
                                                    className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                    label={""}
                                                />
                                                {errors.mobile_number && <p className="text-sm text-red-500">{errors.mobile_number.message}</p>}
                                            </div>
                                            <div>
                                                <label className="text-sm font-semibold mb-1">
                                                    WhatsApp Number <span className="text-red-500">*</span>
                                                </label>
                                                <InputField
                                                    type="text"
                                                    {...register("whatsapp_number")}
                                                    name="whatsapp_number"
                                                    className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                    label={""}
                                                />
                                                {errors.whatsapp_number && <p className="text-sm text-red-500">{errors.whatsapp_number.message}</p>}
                                            </div>
                                            <div>
                                                <label className="text-sm font-semibold mb-1">
                                                    Email ID <span className="text-red-500">*</span>
                                                </label>
                                                <InputField
                                                    type="email"
                                                    {...register("email")}
                                                    name="email"
                                                    className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                    label={""}
                                                />
                                                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                                            </div>
                                            <div>
                                                <label className="text-sm font-semibold mb-1">Nationality</label>
                                                <InputField
                                                    type="text"
                                                    {...register("nationality")}
                                                    name="nationality"
                                                    className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                    label={""}
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm font-semibold mb-1">Current Location</label>
                                                <InputField
                                                    type="text"
                                                    {...register("current_location")}
                                                    name="current_location"
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
                    {activeTab === "Visa & Work Eligibility" && (
                        <div className="flex flex-wrap gap-4 px-4 ">
                            <div className="flex-1 max-w-[250px]">
                                <label className="text-sm font-semibold mb-1 block">
                                    Visa Type
                                </label>
                                <SelectField
                                    label={""}
                                    {...register("visa_type")}
                                    options={[
                                        { value: "", label: "Select VisaType" },
                                        { value: "UARE Employment", label: "UAE Employment" },
                                        { value: "Visit", label: "Visit" },
                                        { value: "Cancelled", label: "Cancelled" },
                                        { value: "Freelaunce", label: "Freelaunce" },
                                        { value: "Dependent", label: "Dependent" },
                                    ]}
                                    className="w-full cursor-pointer rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                />
                            </div>

                            <div className="flex-1 max-w-[250px]">
                                <label className="text-sm font-semibold mb-1 block">
                                    Visa Expiry Date
                                </label>
                                <InputField
                                    type="date"
                                    {...register("visa_expiry_date")}
                                    name="visa_expiry_date"
                                    className="w-full cursor-pointer rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                    label={""}
                                />
                            </div>

                            <div className="flex-1 max-w-[250px]">
                                <label className="text-sm font-semibold mb-1 block">
                                    Availability to join
                                </label>
                                <SelectField
                                    label={""}
                                    {...register("availability_to_join")}
                                    options={[
                                        { value: "", label: "Select Availability to Join" },
                                        { value: "Immediate", label: "Immediate" },
                                        { value: "1 week", label: "1 week" },
                                        { value: "2 weeks", label: "2 weeks" },
                                    ]}
                                    className="w-full cursor-pointer rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab === "Job Infor/Work Preferences" && (
                        <div className="max-w-full mx-auto p-0 pl-1">
                            <div className="flex flex-row gap-1 items-start">
                                <div className="flex gap-6 w-full">
                                    {/* Form Fields */}
                                    {/* <div className="flex flex-col gap-5 flex-1"> */}
                                    {/* First Row - 4 fields */}
                                    <div className="grid  max-md:!grid-cols-2 max-lg:!grid-cols-3 max-xl:!grid-cols-4 grid-cols-5 gap-4">
                                        <div>
                                            <label className="text-sm font-semibold mb-1">
                                                Position Applying For
                                            </label>
                                            <InputField
                                                type="text"
                                                {...register("position_applying_for")}
                                                name="position_applying_for"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-semibold mb-1">
                                                Category
                                            </label>
                                            <InputField
                                                type="text"
                                                {...register("category")}
                                                name="category"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-semibold mb-1">
                                                Any Other Category
                                            </label>
                                            <InputField
                                                type="text"
                                                {...register("other_category")}
                                                name="other_category"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>

                                        <div>
                                            <label className="text-sm font-semibold mb-1">
                                                Years of UAE Experience
                                            </label>
                                            <InputField
                                                type="number"
                                                {...register("uae_experience_years")}
                                                name="uae_experience_years"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold mb-1">Expected Salary (AED)</label>
                                            <InputField
                                                type="text"
                                                {...register("expected_salary")}
                                                name="expected_salary"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>


                                        <div>
                                            <label className="text-sm font-semibold mb-1">Preferred Work Location</label>
                                            <SelectField
                                                label={""}
                                                {...register("preferred_work_location")}
                                                options={[
                                                    { value: "", label: "Select work location" },
                                                    { value: "Dubai", label: "Dubai" },
                                                    { value: "Abu Dubai", label: "Abu Dubai" },
                                                    { value: "Open to All UAE ", label: "Coimbatore" },
                                                ]}
                                                className="w-full cursor-pointer rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold mb-1">Skills & Tasks You can Perform</label>
                                            <textarea
                                                {...register("skills_tasks")}
                                                name="skills_tasks"
                                                className="w-full h-9.5 rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold mb-1">Language Spoken</label>
                                            <InputField
                                                type="text"
                                                {...register("languages_spoken")}
                                                name="languages_spoken"
                                                className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                label={""}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold mb-1">Preferred Work Type</label>
                                            <SelectField
                                                label={""}
                                                {...register("preferred_work_type")}
                                                options={[
                                                    { value: "", label: "Select Work Type" },
                                                    { value: "Full-time", label: "Full-time" },
                                                    { value: "Part-time", label: "Part-time" },
                                                    { value: "Monthly Contract ", label: "Monthly Contract" },
                                                    { value: "Yearly Contract", label: "Yearly Contract" },
                                                ]}
                                                className="w-full cursor-pointer rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-semibold mb-1">Currently Employed</label>
                                            <div className="flex space-x-6 pt-2">
                                                <label className="flex items-center cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        value="yes"
                                                        {...register("currently_employed")}
                                                        className="w-5 h-5 cursor-pointer "
                                                    />
                                                    Yes
                                                </label>
                                                <label className="flex items-center cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        value="no"
                                                        {...register("currently_employed")}
                                                        className="w-5 h-5 cursor-pointer"
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
                                        {/* </div> */}
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === "Documents Upload" && (
                        <div className="max-w-full mx-auto p-0 pl-1">
                            <div className="flex flex-row gap-6 items-start">
                                <div className="flex gap-13 w-auto">
                                    {/* First Upload Block */}
                                    <div className="flex flex-col gap-2 flex-1">
                                        <label htmlFor="Uploadcv" className="text-sm font-semibold ">
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
                                                className="bg-armsjobslightblue cursor-pointer text-armsWhite font-semibold px-4 py-1 rounded hover:bg-armsWhite hover:text-armsjobslightblue border border-armsjobslightblue mb-2"
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
                                                className="bg-armsjobslightblue cursor-pointer text-armsWhite font-semibold px-4 py-1 rounded hover:bg-armsWhite hover:text-armsjobslightblue border border-armsjobslightblue mb-2"
                                            />
                                            <p className="text-xs text-gray-400 mb-5">Max file size 500KB.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeTab === "Other Information" && (
                        <div className="max-w-full mx-auto p-0 pl-1">
                            <div className="flex flex-col gap-1 items-start">

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
                                                    {...register("additional_notes")}
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
                                                            {...register("referral_name")}
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
                                                            {...register("referral_contact")}
                                                            className="w-full rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none"
                                                            label={""}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </form>

                {/* Buttons */}
                <div className="absolute bottom-0 left-0 right-0 py-4 ">
                    <div className="flex justify-center gap-4 mt-8 ">
                        <div>
                            <Button
                                onClick={closePopup}
                                buttonType="button"
                                buttonTitle="Cancel"
                                className="px-6 py-2 cursor-pointer text-armsBlack font-semibold"
                            />
                        </div>
                        <div>
                            <Button
                                onClick={handleSubmit(onSubmit)}
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
