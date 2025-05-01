import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Candidate, CandidateRemark } from "../../types/CandidateList";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import DefaultProfile from "../../assets/images/DefaultProfile.jpg"
import Profileimg from "../../assets/images/profileimg.jpg"
import { IoDocumentText } from "react-icons/io5";
import { Button } from "../../common/Button";
// import { CandidateViewShimmer } from "../../components/ShimmerLoading";

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
    const [candidate, setCandidate] = useState<Candidate | null>(null);
    const [remarks, setRemarks] = useState<CandidateRemark[]>([]);
    const [newRemark, setNewRemark] = useState("");
    const [candidateList, setCandidateList] = useState<Candidate[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    // const [isLoading, setIsLoading] = useState(true);
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

    const handleStatusToggle = () => {
        if (candidate) {
            // Update local candidate state
            setCandidate({
                ...candidate,
                isActive: !candidate.isActive
            });

            // Update candidate in the list
            setCandidateList(prevList =>
                prevList.map(c =>
                    c.id === candidate.id ? { ...c, isActive: !candidate.isActive } : c
                )
            );

            // Here you would typically make an API call to update the status
            console.log(`Status updated to ${!candidate.isActive ? 'active' : 'inactive'}`);
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

    if (!candidate) {
        return <div>No candidate found</div>;
    }

    return (
        // <div className="min-h-screen bg-gray-100">
            <div className="p-4">
                <div className="bg-white px-5 py-1 rounded-lg shadow-sm ">
                    {/* Header */}
                    <div className="flex items- p-3">
                        <span className="text-2xl font-bold">Candidate</span>
                        <span className="mx-2 pt-2 text-xl"><MdOutlineKeyboardArrowRight /></span>
                        <span className="text-gray-500 pt-2 text-sm font-medium underline">Dashboard</span>
                        <span className="mx-2 pt-2 text-sm">{"/"}</span>
                        <span className="text-gray-500 pt-2 text-sm font-medium underline">Clients</span>
                        <span className="mx-2 pt-2 text-sm">{"/"}</span>
                        <span className="text-gray-500 pt-2 text-sm font-medium ">View</span>
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
                                <div className="flex justify-between items-center p-4">
                                    <div className="flex items-center gap-1">
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
                                                <h2 className="text-2xl font-bold">{candidate.name}</h2>
                                                <span className="text- font-bold">({candidate.candidateId})</span>
                                                <div className="scale-70">
                                                    <ToggleSwitch isActive={candidate.isActive} onToggle={handleStatusToggle} />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-3 gap-4 mt-4">
                                                <div>
                                                    <p className="text-xs text-gray-600">Mobile Number</p>
                                                    <p className="font-bold">{candidate.mobileNumber}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-600">Whatsapp Number</p>
                                                    <p className="font-bold">{candidate.whatsappNumber}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-600">Email ID</p>
                                                    <p className="font-bold">{candidate.emailId}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-600">Nationality</p>
                                                    <p className="font-bold">{candidate.nationality}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-600">Current Location</p>
                                                    <p className="font-bold">{candidate.currentLocation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        buttonType="button"
                                        buttonTitle="Edit"
                                        className="mb-30 px-4 py-1 bg-armsjobslightblue text-white rounded text-sm"
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
                                                <p className="text-sm font-bold mt-1">{candidate.visaType}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Availability to join</p>
                                                <p className="text-sm font-bold mt-1">{candidate.availabilityToJoinDate}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Notice Period</p>
                                                <p className="text-sm font-bold mt-1">{candidate.availabilityToJoinPeriod}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Job Information */}
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-1 border-b">
                                            <h2 className="text-xl font-bold">Job Information</h2>
                                        </div>

                                        <div className="grid grid-cols-4 gap-x-8 gap-y-4">
                                            <div>
                                                <p className="text-xs text-gray-600">Position Applying For</p>
                                                <p className="text-sm font-bold mt-1">{candidate.positionApplyingFor}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Category</p>
                                                <p className="text-sm font-bold mt-1">{candidate.category}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Any Other Category</p>
                                                <p className="text-sm font-bold mt-1">{candidate.otherCategory}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Years of UAE Experience</p>
                                                <p className="text-sm font-bold mt-1">{candidate.yearsOfUAEExperience}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Skills & Tasks You Can Perform</p>
                                                <p className="text-sm font-bold mt-1">{candidate.skillsAndTasks}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Preferred Work Location</p>
                                                <p className="text-sm font-bold mt-1">{candidate.preferredWorkLocation}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Expected Salary (AED)</p>
                                                <p className="text-sm font-bold mt-1">{candidate.expectedSalary}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Documents */}
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-1 border-b">
                                            <h2 className="text-xl font-bold">Documents</h2>
                                        </div>
                                        <div className="flex grid-cols-4 gap-4">
                                            {/* {Object.entries(candidate.documents).map(([key, doc]) => (
                                                <div key={key} className="flex flex-col items-center p-3 rounded hover:bg-gray-50 cursor-pointer">
                                                    <span className="text-2xl text-armsjobslightblue mb-1 "><IoDocumentText /></span>
                                                    <span className="text-xs text-gray-600">{doc.name}</span>
                                                    <span className="text-xs text-gray-400">{doc.size}</span>
                                                </div>
                                            ))} */}
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
                                            onClick={handleAddRemark}
                                            buttonType="button"
                                            buttonTitle="Add"
                                            className=" mx-auto px-4 py-1 bg-armsjobslightblue text-white rounded text-sm "
                                        />
                                        <div className="mt-4 space-y-4 max-h-[calc(100vh-400px)] overflow-y-auto">
                                            {/* Static remarks data */}
                                            <div className="border-b pb-4">
                                                <div className="flex items-center justify-between mb-2">
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
                                                    <div className="flex items-center gap-2">
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
            </div>
        // </div>
    );
};
