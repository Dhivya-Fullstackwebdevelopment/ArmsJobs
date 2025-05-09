import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Candidate, CandidateRemark } from "../../types/CandidateList";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Profileimg from "../../assets/images/profileimg.jpg"
import { Button } from "../../common/Button";
import { ClientEnquiry } from "../../types/ClientEnquiryList";
import { FaArrowLeft } from "react-icons/fa6";
import { EditClientEnquiryPopup } from "./EditClientEnquiryPopup";
// import { CandidateViewShimmer } from "../../components/ShimmerLoading";

export const ClientEnquiryView = () => {
    const { id } = useParams<{ id: string }>();
    const [candidate, setCandidate] = useState<Candidate | null>(null);
    const [ClientEnquiry, setClientEnquiry] = useState<ClientEnquiry | null>(null)
    const [remarks, setRemarks] = useState<CandidateRemark[]>([]);
    const [newRemark, setNewRemark] = useState("");
    const [candidateList, setCandidateList] = useState<Candidate[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
     const [showEditClientEnquiryPopup, setShowEditClientEnquiryPopup] = useState<boolean>(false)
    // const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    // Mock data for demonstration
    useEffect(() => {
        // setIsLoading(true);
        // Simulate API delay
        const timer = setTimeout(() => {
            const mockCandidate: Candidate = {
                id: "1",
                name: "Babu Mayan",
                candidateId: "AJ247",
                isActive: true,
                mobileNumber: "+91 9884719615",
                whatsappNumber: "+91 9551688774",
                emailId: "kbalaganesh@gmail.com",
                nationality: "Indian",
                currentLocation: "Dubai",
                visaType: "Freelance",
                availabilityToJoinDate: "25/05/2025",
                availabilityToJoinPeriod: "1 Week",
                positionApplyingFor: "N/A",
                category: "N/A",
                otherCategory: "N/A",
                yearsOfUAEExperience: "N/A",
                skillsAndTasks: "N/A",
                preferredWorkLocation: "N/A",
                expectedSalary: "N/A",
                documents: {
                    cv: { name: "Babu.doc", size: "470 KB" },
                    passport: { name: "passport", size: "150 KB" },
                    insurance: { name: "insurance", size: "145 KB" },
                    visa: { name: "visa", size: "421 KB" }
                }
            };
            setCandidate(mockCandidate);

            // Generate mock candidate list
            const mockCandidateList = Array(13).fill(null).map((_, index) => ({
                ...mockCandidate,
                id: String(index + 1),
                name: index === 0 ? "Babu Mayan" : `Srinithi Ravi ${index + 1}`,
                candidateId: `AJ${247 + index}`
            }));
            setCandidateList(mockCandidateList);
            // setIsLoading(false);
        }, 1500); // 1.5 second delay to show loading state

        return () => clearTimeout(timer);
    }, [id]);


    useEffect(() => {


        const ClientEnquiry: ClientEnquiry = {
            CompanyName: "Global BuildCorp Ltd.",
            EmailID: "contact@buildcorp.com",
            ContactPersonName: "Emily Roberts",
            MobileNumber: "+1-202-555-0147",
            NatureOfWork: "Construction and Civil Engineering",
            ProjectLocation: "Doha, Qatar",
            CategoriesRequired: "Masons, Electricians, Welders",
            QuantityRequiredPerCategory: "Masons: 20, Electricians: 10, Welders: 15",
            ProjectDuration: "18 Months",
            ProjectStartDate: "2025-06-01",
            KitchenFacilitiesProvided: "Yes",
            TransportationProvided: "Yes",
            AccommodationProvided: "Yes",
            QueryType: "Manpower Requirement",
            RemarksNotes: "Workers should have GCC experience. Preferably English-speaking."
        };



        setClientEnquiry(ClientEnquiry);
    }, []);

    const handleAddRemark = () => {
        if (newRemark.trim()) {
            const remark: CandidateRemark = {
                id: Date.now().toString(),
                userId: "current-user-id",
                userName: "Amjad",
                timestamp: new Date().toLocaleString(),
                content: newRemark
            };
            setRemarks([...remarks, remark]);
            setNewRemark("");
        }
    };

    // Filter candidates based on search query
    const filteredCandidates = candidateList.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.candidateId.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // if (isLoading) {
    //   return (
    //     <div className="min-h-screen bg-gray-100">
    //       <Header />
    //       <CandidateViewShimmer />
    //     </div>
    //   );
    // }

    const openEditClientEnquiryPopup = () => {
        setShowEditClientEnquiryPopup(true)
      }
    
      const closeEditClientEnquiryPopup = () => {
        setShowEditClientEnquiryPopup(false)
      }

    if (!candidate) {
        return <div>Loading...</div>;
    }

    return (
        // <div className="min-h-screen bg-gray-100">
        <div className="p-4">
            <div className="bg-white px-5 py-1 rounded-lg shadow-sm ">
                {/* Header */}
                <div className="flex justify-between items-center p-1">
                    <div className="flex items- p-3">
                        <span className="text-2xl font-bold">Client Enquiry</span>
                        <span className="mx-2 pt-2 text-xl"><MdOutlineKeyboardArrowRight /></span>
                        <span className="text-gray-500 pt-2 text-sm font-medium underline">Dashboard</span>
                        <span className="mx-2 pt-2 text-sm">{"/"}</span>
                        <span className="text-gray-500 pt-2 text-sm font-medium ">Client Enquiry</span>
                    </div>
                    <div className="flex items-center space-x-4 p-3">
                        <Button
                            buttonType="button"
                            buttonTitle="Back"
                            onClick={() => navigate(-1)}
                            icon={
                                <FaArrowLeft />
                            }
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
                                    {filteredCandidates.map((c) => (
                                        <Link
                                            key={c.id}
                                            // to={`/Candidate/${id}/${c.id}`}
                                            to={`/Candidate/${c.id}`}
                                            className={`block p-3 border-b ${c.id === id} hover:bg-gray-100
                                                    `}
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex-grow">
                                                    <div className="text-sm font-medium">{c.name}</div>
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
                            <div className="p-0">
                                {/* Company Details*/}
                                <div className="mb-6 ">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Company Details</h2>
                                    </div>
                                    <div className="flex justify-start  ">
                                        <div className="grid grid-cols-3 gap-4 pt-2 w-full max-xl:!grid-cols-2">
                                            <div>
                                                <p className="text-xs text-gray-600">Company Name</p>
                                                <p className="text-sm font-bold mt-1">{ClientEnquiry?.CompanyName}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Email ID</p>
                                                <p className="text-sm font-bold mt-1">{ClientEnquiry?.EmailID}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Contact Person Name</p>
                                                <p className="text-sm font-bold mt-1">{ClientEnquiry?.ContactPersonName}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Mobile Number</p>
                                                <p className="text-sm font-bold mt-1">{ClientEnquiry?.MobileNumber}</p>
                                            </div>
                                        </div>
                                        <Button
                                            onClick={openEditClientEnquiryPopup}
                                            buttonType="button"
                                            buttonTitle="Edit"
                                            className="px-4 py-1 bg-armsjobslightblue text-sm text-armsWhite font-semibold border-[1px] rounded-sm cursor-pointer hover:bg-armsWhite hover:text-armsjobslightblue hover:border-armsjobslightblue"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6 ">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Personal information</h2>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-2">
                                        <div>
                                            <p className="text-xs text-gray-600">Nature of Work</p>
                                            <p className="text-sm font-bold mt-1">{ClientEnquiry?.NatureOfWork}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Project Location</p>
                                            <p className="text-sm font-bold mt-1">{ClientEnquiry?.ProjectLocation}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Project Duration</p>
                                            <p className="text-sm font-bold mt-1">{ClientEnquiry?.ProjectDuration}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Categories Required</p>
                                            <p className="text-sm font-bold mt-1">{ClientEnquiry?.CategoriesRequired}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Quantity Required (per category)</p>
                                            <p className="text-sm font-bold mt-1">{ClientEnquiry?.QuantityRequiredPerCategory}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Project Start Date</p>
                                            <p className="text-sm font-bold mt-1">{ClientEnquiry?.ProjectStartDate}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6 ">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Facility info</h2>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-2">
                                        <div>
                                            <p className="text-xs text-gray-600">Kitchen Facilities Provided?</p>
                                            <p className="text-sm font-bold mt-1">{ClientEnquiry?.KitchenFacilitiesProvided}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Transportation Provided</p>
                                            <p className="text-sm font-bold mt-1">{ClientEnquiry?.TransportationProvided}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Accommodation Provided?</p>
                                            <p className="text-sm font-bold mt-1">{ClientEnquiry?.AccommodationProvided}</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="mb-6 ">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Remarks / Notes</h2>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 pt-2">
                                        <div>
                                            <p className="text-xs text-gray-600">Query Type</p>
                                            <p className="text-sm font-bold mt-1">{ClientEnquiry?.QueryType}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Remarks / Notes</p>
                                            <p className="text-sm font-bold mt-1">{ClientEnquiry?.RemarksNotes}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Job Information */}
                                {/* <div className="mb-6">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Recruitment Info</h2>
                                    </div>

                                    <div className="grid grid-cols-3 gap-x-8 gap-y-4 pt-2">
                                        <div>
                                            <p className="text-xs text-gray-600">Categories You Can Provide</p>
                                            <p className="text-sm font-bold mt-1">{overSeasDetail?.CatogoryYouCanProvide}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Nationality of Workers</p>
                                            <p className="text-sm font-bold mt-1">{overSeasDetail?.NationalityOfWorker}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Mobilization Time
                                            </p>
                                            <p className="text-sm font-bold mt-1">{overSeasDetail?.MobilizationTime}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">UAE Deployment Experience</p>
                                            <p className="text-sm font-bold mt-1">{overSeasDetail?.UAEDeploymentExperience}</p>
                                        </div>
                                      
                                    </div>
                                </div>

                             */}


                                {/* Job History */}
                                {/* <div className="w-full border border-main rounded-t-lg p-0 min-h-[300px] bg-white">
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
                                           
                                        </tbody>
                                    </table>
                                </div> */}
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
                                        onClick={handleAddRemark}
                                        buttonType="button"
                                        buttonTitle="Add"
                                        className="mx-auto px-4 py-1 bg-armsjobslightblue text-sm text-armsWhite font-semibold border-[1px] rounded-sm cursor-pointer hover:bg-armsWhite hover:text-armsjobslightblue hover:border-armsjobslightblue"
                                    />
                                    <div className="mt-4 space-y-4 max-h-[calc(100vh-400px)] overflow-y-auto">
                                        {/* Static remarks data */}
                                        <div className="border-b pb-4">
                                            <div className="flex  max-xl:flex-col items-center justify-between mb-2">
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
                                                <div className="flex   max-xl:flex-col items-center gap-2">
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
            {showEditClientEnquiryPopup && (<EditClientEnquiryPopup closePopup={closeEditClientEnquiryPopup} />)}
        </div>
        // </div>
    );
};
