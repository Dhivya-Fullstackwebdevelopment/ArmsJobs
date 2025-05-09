import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// import { Candidate, CandidateRemark } from "../../types/CandidateList";
//import {  CandidateRemark } from "../../types/CandidateList";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import DefaultProfile from "../../assets/images/DefaultProfile.jpg"
import Profileimg from "../../assets/images/profileimg.jpg"
import { IoDocumentText } from "react-icons/io5";
import { Button } from "../../common/Button";
import { FaArrowLeft } from "react-icons/fa6";
// import { EditCandidatePopup } from "./EditCandidatePopup";
import { fetchCandidateNames, ViewCandidateName } from "../../Commonapicall/Candidateapicall/Candidateapis";
import { AgentSupplierViewShimmer } from "../../components/ShimmerLoading/ShimmerViewpage/CommonViewShimmer";

interface CandidateNameResponse {
    status: string;
    message: string;
    data: {
        id: number;
        full_name: string;
    }[];
    count: number;
    next: string | null;
    previous: string | null;
}



// Define API response interfaces
interface ApiResponse<T> {
    status: string;
    message: string;
    data: T;
    count?: number;
    next?: string | null;
    previous?: string | null;
}

// API Response Data Interface
interface CandidateApiResponse {
    id: number;
    full_name: string;
    candidate_id?: string;
    mobile_number?: string;
    whatsapp_number?: string;
    email?: string;
    nationality?: string;
    current_location?: string;
    visa_type?: string;
    availability_to_join?: string;
    position_applying_for?: string;
    category?: string;
    other_category?: string;
    uae_experience_years?: string;
    skills_tasks?: string;
    preferred_work_location?: string;
    expected_salary?: string;
    languages_spoken?: string;
    preferred_work_type?: string;
    currently_employed?: string;
    additional_notes?: string;
    referral_name?: string;
    referral_contact?: string;
}

interface CandidateDetails {
    id: number;
    name: string;
    candidateId?: string;
    isActive?: boolean;
    mobileNumber?: string;
    whatsappNumber?: string;
    emailId?: string;
    nationality?: string;
    currentLocation?: string;
    visaType?: string;
    availabilityToJoinDate?: string;
    availabilityToJoinPeriod?: string;
    positionApplyingFor?: string;
    category?: string;
    otherCategory?: string;
    yearsOfUAEExperience?: string;
    skillsAndTasks?: string;
    preferredWorkLocation?: string;
    expectedSalary?: string;
    languagesSpoken?: string;
    preferredWorkType?: string;
    currentlyEmployed?: string;
    additionalNotes?: string;
    referralName?: string;
    referralContact?: string;
}

// Toggle Switch Component
const ToggleSwitch = ({ isActive, onToggle }: { isActive: boolean; onToggle: () => void }) => {
    ///const { id } = useParams<{ id: string }>();
    return (
        <div
            className="relative inline-flex items-center cursor-pointer"
            onClick={onToggle}
        >
            <div className={`w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${isActive ? 'bg-green-600' : 'bg-red-500'}`}>
                <div className={`absolute w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out transform ${isActive ? 'translate-x-6' : 'translate-x-1'} top-1`} />
            </div>
            <span className={`ml-2 text-xs ${isActive ? 'text-green-600' : 'text-red-500'}`}>
                {isActive ? 'Active' : 'Inactive'}
            </span>
        </div>
    );
};


export const CandidateView = () => {
    const { id } = useParams<{ id: string }>();
    const [candidates, setCandidates] = useState<CandidateDetails[]>([]);
    const [initialLoading, setInitialLoading] = useState(true); // For first load
    // const [detailsLoading, setDetailsLoading] = useState(false); // For candidate details
    const [, setDetailsLoading] = useState(false); // For candidate details
    const [selectedCandidate, setSelectedCandidate] = useState<CandidateDetails | null>(null);
    ///const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
   // const [remarks, setRemarks] = useState<CandidateRemark[]>([]);
    const [newRemark, setNewRemark] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    // Fetch all candidate names
    const loadCandidates = async () => {
        try {
            setInitialLoading(true);
            const response = await fetchCandidateNames() as CandidateNameResponse;

            // Transform the API response to match our CandidateDetails interface
            const transformedCandidates: CandidateDetails[] = response.data.map(candidate => ({
                id: candidate.id,
                name: candidate.full_name,
                // Initialize other fields as empty or undefined
                candidateId: '',
                isActive: true,
                mobileNumber: '',
                whatsappNumber: '',
                emailId: '',
                nationality: '',
                currentLocation: '',
                visaType: '',
                availabilityToJoinDate: '',
                availabilityToJoinPeriod: '',
                positionApplyingFor: '',
                category: '',
                otherCategory: '',
                yearsOfUAEExperience: '',
                skillsAndTasks: '',
                preferredWorkLocation: '',
                expectedSalary: '',
                languagesSpoken: '',
                preferredWorkType: '',
                currentlyEmployed: '',
                additionalNotes: '',
                referralName: '',
                referralContact: '',
            }));

            setCandidates(transformedCandidates);

            // If we have an ID in the URL, fetch and set that candidate's details
            if (id) {
                await fetchCandidateDetails(parseInt(id));
            }
        } catch (error) {
            console.error("Error fetching candidates:", error);
        } finally {
            setInitialLoading(false);
        }
    };


    // Fetch details for a specific candidate
    const fetchCandidateDetails = async (candidateId: number) => {
        try {
            setDetailsLoading(true);
            const response = await ViewCandidateName(candidateId) as ApiResponse<CandidateApiResponse>;
        
            if (!response.data) {
                throw new Error("No data received");
            }

            // Transform the API response to match our interface
            const candidateDetails: CandidateDetails = {
                id: response.data.id,
                name: response.data.full_name,
                candidateId: response.data.candidate_id,
                mobileNumber: response.data.mobile_number,
                whatsappNumber: response.data.whatsapp_number,
                emailId: response.data.email,
                nationality: response.data.nationality,
                currentLocation: response.data.current_location,
                visaType: response.data.visa_type,
                availabilityToJoinDate: response.data.availability_to_join,
                positionApplyingFor: response.data.position_applying_for,
                category: response.data.category,
                otherCategory: response.data.other_category,
                yearsOfUAEExperience: response.data.uae_experience_years,
                skillsAndTasks: response.data.skills_tasks,
                preferredWorkLocation: response.data.preferred_work_location,
                expectedSalary: response.data.expected_salary,
                languagesSpoken: response.data.languages_spoken,
                preferredWorkType: response.data.preferred_work_type,
                currentlyEmployed: response.data.currently_employed,
                additionalNotes: response.data.additional_notes,
                referralName: response.data.referral_name,
                referralContact: response.data.referral_contact,
                isActive: true // Default value since it's not in the API response
            };
            setSelectedCandidate(candidateDetails);
        } catch (error) {
            console.error("Error fetching candidate details:", error);
        } finally {
            setDetailsLoading(false);
        }
    };

    useEffect(() => {
        loadCandidates();
    }, [id]); // Reload when ID changes

    // const handleEditClick = (candidate: Candidate) => {
    //     setSelectedCandidate(candidate);
    //     setIsEditPopupOpen(true);
    // };

    // const handleCloseEditPopup = () => {
    //     setIsEditPopupOpen(false);
    //     setSelectedCandidate(null);
    // };

    // const handleRefreshData = () => {
    //     loadCandidates();
    // };

    // Filter candidates based on search query
    const filteredCandidates = candidates.filter(candidate =>
        candidate.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (initialLoading) {
        return <AgentSupplierViewShimmer />;
    }
    
    return (
        <div className="p-4">
            <div className="bg-white px-5 py-1 rounded-lg shadow-sm">
                {/* Header */}
                <div className="flex justify-between items-center p-1">
                    <div className="flex items-center p-3">
                        <span className="text-2xl font-bold">Candidate</span>
                        <span className="mx-2 pt-2 text-xl"><MdOutlineKeyboardArrowRight /></span>
                        <span className="text-gray-500 pt-2 text-sm font-medium underline">Dashboard</span>
                        <span className="mx-2 pt-2 text-sm">{"/"}</span>
                        <span className="text-gray-500 pt-2 text-sm font-medium underline">Clients</span>
                        <span className="mx-2 pt-2 text-sm">{"/"}</span>
                        <span className="text-gray-500 pt-2 text-sm font-medium">View</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3">
                        <Button
                            buttonType="button"
                            buttonTitle="Back"
                            onClick={() => navigate(-1)}
                            icon={<FaArrowLeft />}
                            className="px-4 py-2 bg-armsjobslightblue text-sm font-semibold text-armsWhite border-[1px] rounded-md cursor-pointer hover:bg-armsWhite hover:text-armsjobslightblue hover:border-armsjobslightblue"
                        />
                    </div>
                </div>

                <div className="flex gap-4">
                    {/* Left Column - Candidate Names */}
                    <div className="w-1/4 border-armsBlack border-1 rounded ">
                        <div className="bg-white rounded shadow-sm">
                            <div className="bg-main text-armsWhite p-4 ">
                                <h2 className="text-base font-semibold">Candidate Names ({filteredCandidates.length})</h2>
                            </div>
                            <div className="p-4">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full rounded-[5px] border-[1px] border-armsgrey pl-2 pr-2 py-1.5 focus-within:outline-none"
                                />
                                <div className="space-y-0 max-h-100% overflow-y-auto">
                                    {filteredCandidates.map((candidate) => (
                                        <Link
                                            key={candidate.id}
                                            // to={`/Candidate/${id}/${c.id}`}
                                            to={`/Candidate/${candidate.id}`}
                                            className={`block p-3 border-b ${candidate.id === Number(id)} hover:bg-gray-100`}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex-grow">
                                                    <div className="text-sm font-medium">{candidate?.name}</div>
                                                    {/* <div className="text-xs text-gray-500 mt-1">ID: {c.candidateId}</div> */}
                                                </div>
                                                {/* <div className={`w-2 h-2 rounded-full ${c.isActive ? 'bg-green-500' : 'bg-gray-400'}`} /> */}
                                            </div>
                                        </Link>
                                    ))}
                                    {filteredCandidates.length === 0 && (
                                        <div className="text-center py-4 text-gray-500">
                                            No candidates found
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full bg-white border border-armsBlack rounded shadow-sm">
                        {/* Middle Column - Candidate Details */}
                        <div className="flex-[3] p-2">
                            <div className="flex  justify-between items-center p-4">
                                <div className="flex items-center gap-1 max-xl:flex-col max-md:flex-col">
                                    <div className="relative -top-2 -left-2">
                                        <div className="max-w-45 max-h-45  bg-gray-200 rounded-lg flex items-center justify-center">
                                            <img
                                                src={DefaultProfile}
                                                alt="Candidate"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="pb-3.5">
                                        <div className="flex items-center gap-2">
                                            <h2 className="text-2xl font-bold">{selectedCandidate?.name}</h2>
                                            <span className="text- font-bold">({selectedCandidate?.candidateId})</span>
                                            <div className="scale-70">
                                                <ToggleSwitch isActive={selectedCandidate?.isActive || false} onToggle={() => { }} />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4 mt-4">
                                            <div>
                                                <p className="text-xs text-gray-600">Mobile Number</p>
                                                <p className="font-bold">{selectedCandidate?.mobileNumber}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Whatsapp Number</p>
                                                <p className="font-bold">{selectedCandidate?.whatsappNumber}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Email ID</p>
                                                <p className="font-bold">{selectedCandidate?.emailId}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Nationality</p>
                                                <p className="font-bold">{selectedCandidate?.nationality}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Current Location</p>
                                                <p className="font-bold">{selectedCandidate?.currentLocation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                  //  onClick={() => selectedCandidate && handleEditClick(selectedCandidate)}
                                    buttonType="button"
                                    buttonTitle="Edit"
                                    className="mb-30 px-4 py-1 bg-armsjobslightblue text-armsWhite font-semibol border-[1px] rounded-sm cursor-pointer hover:bg-armsWhite hover:text-armsjobslightblue hover:border-armsjobslightblue text-sm"
                                />
                            </div>

                            <div className="p-0">
                                {/* Visa & Work Eligibility */}
                                <div className="mb-6 ">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Visa & Work Eligibility</h2>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-2">
                                        <div>
                                            <p className="text-xs text-gray-600">Visa Type</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.visaType}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Availability to join</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.availabilityToJoinDate}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Notice Period</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.availabilityToJoinPeriod}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Information */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Job Information</h2>
                                    </div>

                                    <div className="grid grid-cols-4 gap-x-8 gap-y-4 pt-2">
                                        <div>
                                            <p className="text-xs text-gray-600">Position Applying For</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.positionApplyingFor}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Category</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.category}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Any Other Category</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.otherCategory}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Years of UAE Experience</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.yearsOfUAEExperience}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Skills & Tasks You Can Perform</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.skillsAndTasks}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Preferred Work Location</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.preferredWorkLocation}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Expected Salary (AED)</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.expectedSalary}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Language Spoken</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.languagesSpoken}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Preferred Work Type</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.preferredWorkType}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Currently Employed?</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.currentlyEmployed}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Documents */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Documents</h2>
                                    </div>
                                    <div className="flex grid-cols-4 gap-4 pt-2">
                                        {/* Upload CV Section */}
                                        <div>
                                            <h3 className="text-xs text-gray-600 mb-2">Upload CV</h3>
                                            <div className="flex items-start gap-3">
                                                <span className="text-3xl text-armsjobslightblue"><IoDocumentText /></span>
                                                <div>
                                                    <p className="text-sm font-bold">Babu.doc</p>
                                                    <p className="text-xs text-gray-400">470 KB</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Upload Relevant Docs Section */}
                                        <div>
                                            <h3 className="text-xs text-gray-600 mb-2">Upload Relevant Docs</h3>
                                            <div className="flex gap-6">
                                                {/* Each document */}
                                                <div className="flex items-start gap-2">
                                                    <span className="text-3xl text-armsjobslightblue"><IoDocumentText /></span>
                                                    <div>
                                                        <p className="text-sm font-bold">passport</p>
                                                        <p className="text-xs text-gray-400">350 KB</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <span className="text-3xl text-armsjobslightblue"><IoDocumentText /></span>
                                                    <div>
                                                        <p className="text-sm font-bold">Insurance</p>
                                                        <p className="text-xs text-gray-400">145 KB</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <span className="text-3xl text-armsjobslightblue"><IoDocumentText /></span>
                                                    <div>
                                                        <p className="text-sm font-bold">Visa</p>
                                                        <p className="text-xs text-gray-400">421 KB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Other Information */}
                                <div className="mb-6">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Other Information</h2>
                                    </div>

                                    <div className="grid grid-cols-3 gap-x-8 gap-y-4 pt-2">
                                        <div>
                                            <p className="text-xs text-gray-600">Additional Notes or Information</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.additionalNotes}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Referral Contact Details</p>
                                            <p className="text-xs text-gray-600">Name</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.referralName}</p>
                                        </div>
                                        <div className="pt-4">
                                            <p className="text-xs text-gray-600">Contact</p>
                                            <p className="text-sm font-bold mt-1">{selectedCandidate?.referralContact}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Job History */}
                                <div className="w-full border border-main rounded-t-lg p-0 min-h-[300px] bg-white">
                                    <h3 className="text-armsWhite font-bold bg-main py-2 px-4 rounded-t-lg">Job History</h3>
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-armsBlack">
                                                <th className="text-left p-3 text-sm font-bold">Job ID</th>
                                                <th className="text-left p-3 text-sm font-bold">Company Name</th>
                                                <th className="text-left p-3 text-sm font-bold">Position</th>
                                                <th className="text-left p-3 text-sm font-bold">Remarks</th>
                                                <th className="text-left p-3 text-sm font-bold">Status</th>
                                                <th className="text-left p-3 text-sm font-bold">Date & Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Add job history rows here */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Remarks */}
                        <div className="flex-[1.5] p-2 ">
                            <div className="bg-gray-100 rounded shadow-sm">
                                <div className="bg-main text-armsWhite p-3 rounded-t flex justify-between items-center">
                                    <h2 className="text-base font-semibold">Remarks</h2>
                                </div>
                                <div className="p-4">
                                    <textarea
                                        value={newRemark}
                                        onChange={(e) => setNewRemark(e.target.value)}
                                        className="w-full p-3 border-2 border-armsgrey rounded mb-2 text-sm bg-armsWhite"
                                        rows={4}
                                    // placeholder="Add a remark..."
                                    />
                                    <Button
                                        onClick={() => { }}
                                        buttonType="button"
                                        buttonTitle="Add"
                                        className="mx-auto px-4 py-1 bg-armsjobslightblue text-sm text-armsWhite font-semibold border-[1px] rounded-sm cursor-pointer hover:bg-armsWhite hover:text-armsjobslightblue hover:border-armsjobslightblue"
                                    />
                                    <div className="mt-4 space-y-4 max-h-[calc(100vh-400px)] overflow-y-auto">
                                        {/* Static remarks data */}
                                        <div className="border-b pb-4">
                                            <div className="flex max-xl:flex-col items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                        <img
                                                            src={Profileimg}
                                                            alt="profileImg"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium">Amjad</span>
                                                </div>
                                                <span className="text-xs text-gray-500">14-02-2025 10:25:12</span>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Quisque pharetra tempus lorem non tempus. In pulvinar arcu eget imperdiet finibus.
                                            </p>
                                        </div>

                                        <div className="border-b pb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex max-xl:flex-col items-center gap-2">
                                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                        <img
                                                            src={Profileimg}
                                                            alt="profileImg"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="text-sm font-medium">Swetha</span>
                                                </div>
                                                <span className="text-xs text-gray-500">13-02-2025 15:02:40</span>
                                            </div>
                                            <p className="text-sm text-gray-600">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Quisque pharetra tempus lorem non tempus. In pulvinar arcu eget imperdiet finibus.
                                            </p>
                                        </div>

                                        {/* {remarks.map((remark) => (
                                                <div key={remark.id} className="border-b pb-4">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                                <span className="text-xs">{remark.userName[0]}</span>
                                                            </div>
                                                            <span className="text-sm font-medium">{remark.userName}</span>
                                                        </div>
                                                        <span className="text-xs text-gray-500">{remark.timestamp}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600">{remark.content}</p>
                                                </div>
                                            ))} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {isEditPopupOpen && selectedCandidate && (
                <EditCandidatePopup
                    closePopup={handleCloseEditPopup}
                    refreshData={handleRefreshData}
                    //editCandidate={selectedCandidate}
                />
            )} */}
        </div>
    );
};
