import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {  CandidateRemark } from "../../types/CandidateList";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Profileimg from "../../assets/images/profileimg.jpg"
import { Button } from "../../common/Button";
//import { AgentOrSupply } from "../../types/AgentSupplyList";
import { FaArrowLeft } from "react-icons/fa6";
import { EditAgentsSupplierPopup } from "./EditAgentSupplierPopup";
import { AgentSupplierViewShimmer } from "../../components/ShimmerLoading/ShimmerViewpage/CommonViewShimmer";
import { fetchAgents, fetchAgentsList, fetchAgentsListById } from "../../Commonapicall/AgentsSupplierapicall/Agentsapis";
import { AgentSupplier, ApiResponse } from "./AgentsSupplierTable";

export interface Agent {
    id: number;
    name: string;
}
export interface AgentSearchResponse {
    status: string;
    message: string;
    data: Agent[];
    count: number;
    next: string | null;
    previous: string | null;
}

export const AgentSupplyView = () => {
    
    const { id } = useParams<{ id: string }>();
    const [remarks, setRemarks] = useState<CandidateRemark[]>([]);
    const [newRemark, setNewRemark] = useState("");
    const [agentSupplier, setAgentSupplier] = useState<AgentSupplier[]>([]);
    const [searchQuer, setSearchQuer] = useState("");
    const [showEditAgentsSupplierPopup, setShowEditAgentsSupplierPopup] = useState(false);
    const [agent, setAgent] = useState<AgentSupplier | null>(null);
    const navigate = useNavigate();
    const openEditAgentsSupplierPopup = () => {
        setShowEditAgentsSupplierPopup(true);
    }
    const closeEditAgentsSupplierPopup = () => {
        setShowEditAgentsSupplierPopup(false)
    }
    const [agents, setAgents] = useState<Agent[]>([]);
    const [loading, setLoading] = useState(false);
    
    const handleSearch = async (query: string) => {
        try {
            const result = await fetchAgents(query);
            setAgents(result);
        } catch (err) {
            console.error("Search error", err);
        } 
        // finally {
        //     setLoading(false);
        // }
    };


    useEffect(() => {
        if (searchQuer.trim().length > 0) {
            handleSearch(searchQuer);
        } else {
            setAgents([]); // Clear results if search is empty
        }
    }, [searchQuer]);


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


    const filteredCandidates = searchQuer.trim() ? agents : agentSupplier;


    useEffect(() => {
        const fetchAgent = async () => {
            setLoading(true);
            try {

                const response = await fetchAgentsList() as ApiResponse;
                console.log("response?.data?.data", response?.results?.data)
                setAgentSupplier(response?.results?.data);
                //setTotalItems(response.count);
            } catch (err) {

                console.error("Error fetching candidates:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchAgent();
    }, []);

    useEffect(() => {
        if (id) {
            fetchAgentsListById(Number(id))
                .then(setAgent)
                .catch(err => console.error(err.message));
        }
    }, [id]);

    if (loading) {
        return <AgentSupplierViewShimmer />;
    }

    return (
        // <div className="min-h-screen bg-gray-100">
        <div className="p-4">
            <div className="bg-white px-5 py-1 rounded-lg shadow-sm ">
                {/* Header */}
                <div className="flex justify-between items-center p-1">
                    <div className="flex items- p-3">
                        <span className="text-2xl font-bold">Agents/Supplier</span>
                        <span className="mx-2 pt-2 text-xl"><MdOutlineKeyboardArrowRight /></span>
                        <span className="text-gray-500 pt-2 text-sm font-medium underline">Dashboard</span>
                        <span className="mx-2 pt-2 text-sm">{"/"}</span>
                        <span className="text-gray-500 pt-2 text-sm font-medium ">Agents/Supplier</span>
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
                                    value={searchQuer}
                                    onChange={(e) => setSearchQuer(e.target.value)}
                                    className="w-full rounded-[5px] border-[1px] border-armsgrey pl-2 pr-2 py-1.5 focus-within:outline-none"
                                />
                                <div className="space-y-0 max-h-100% overflow-y-auto">
                                    {filteredCandidates.map((c) => (
                                        <Link
                                            key={c.id}
                                            // to={`/Candidate/${id}/${c.id}`}
                                            to={`/AgentSupplyView/${c.id}`}
                                            className={`block p-3 border-b ${c.id === Number(id)} hover:bg-gray-100
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
                                {/* Visa & Work Eligibility */}

                                <div className="mb-6  ">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Company Details</h2>
                                    </div>
                                    <div className="flex justify-start ">
                                        <div className="grid grid-cols-3 gap-4 pt-2 -full">
                                        <div>
                                                <p className="text-xs text-gray-600">Name of Agent</p>
                                                <p className="text-sm font-bold mt-1">{agent?.name}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600"> Mobile Number</p>
                                                <p className="text-sm font-bold mt-1">{agent?.mobile_no}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">WhatsApp Number</p>
                                                <p className="text-sm font-bold mt-1">{agent?.whatsapp_no}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600">Email ID</p>
                                                <p className="text-sm font-bold mt-1">{agent?.email}</p>
                                            </div>
                                        </div>
                                        <Button
                                            onClick={openEditAgentsSupplierPopup}
                                            buttonType="button"
                                            buttonTitle="Edit"
                                            className="px-4 py-1 bg-armsjobslightblue text-sm text-armsWhite font-bold border-[1px] rounded-sm cursor-pointer hover:bg-armsWhite hover:text-armsjobslightblue hover:border-armsjobslightblue"
                                        />
                                    </div>
                                </div>

                                {/* Eligibility & History */}
                                <div className="mb-6 ">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Eligibility & History</h2>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pt-2">
                                    <div>
                                            <p className="text-xs text-gray-600">Can the agent do recruitment?</p>
                                            <p className="text-sm font-bold mt-1">{agent?.can_recruit}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Have you been associated earlier with ARMSJOBS?</p>
                                            <p className="text-sm font-bold mt-1">{agent?.associated_earlier}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Can the agent do manpower supplying?</p>
                                            <p className="text-sm font-bold mt-1">{agent?.can_supply_manpower}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Manpower info */}
                                <div className="mb-6 ">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Manpower info</h2>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pt-2">
                                    <div>
                                            <p className="text-xs text-gray-600">Categories You Can Supply</p>
                                            <p className="text-sm font-bold mt-1">{agent?.supply_categories}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Quantity Estimates</p>
                                            <p className="text-sm font-bold mt-1">{agent?.quantity_estimates}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-600">Areas Covered</p>
                                            <p className="text-sm font-bold mt-1">{agent?.areas_covered}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Additional info */}
                                <div className="mb-6 ">
                                    <div className="flex items-center justify-between mb-1 border-b">
                                        <h2 className="text-xl font-bold">Additional info</h2>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pt-2">
                                        <div>
                                            <p className="text-xs text-gray-600">Additional Notes (Category Rates & Recruitment Rates)</p>
                                            <p className="text-sm font-bold mt-1">{agent?.additional_notes}</p>
                                        </div>
                                    </div>
                                </div>

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
                                            <div className="flex max-xl:flex-col  items-center justify-between mb-2">
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
                                            <div className="flex max-xl:flex-col items-center justify-between mb-2">
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
            {showEditAgentsSupplierPopup && <EditAgentsSupplierPopup closePopup={closeEditAgentsSupplierPopup} />}
        </div>
        // </div>
    );
};
