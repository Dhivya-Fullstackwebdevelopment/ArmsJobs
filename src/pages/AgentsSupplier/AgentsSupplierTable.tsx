

import { useState } from "react";
import { InputField } from "../../common/InputField";
import { Button } from "../../common/Button";
import { FaUser } from "react-icons/fa6";
// import { FaEdit, FaSearch } from "react-icons/fa";
import { MdDelete, MdModeEdit, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Pagination } from "../../common/Pagination";
import { IoMdSearch } from "react-icons/io";
import { AddAgentsSupplierPopup } from "./AddAgentsSupplierPopup";
import { EditAgentsSupplierPopup } from "./EditAgentSupplierPopup";
import { useNavigate } from "react-router-dom";



// Define a Candidate type
interface AgentSupplier {

  id: string;
  fullName: string;
  mobile: string;
  whatsapp: string;
  email: string;
  nationality: string;
  currentLocation: string;
  visaType: string;
  visaExpiryDate: string;
  availabilityToJoin: string;
  positionApplyingFor: string;
  category: string;
  otherCategory?: string;
  uaeExperience: string;
  skills: string[];
  tasksCanPerform: string[];
  preferredWorkLocation: string[];
  expectedSalary: string;
  cvUrl: string;
  relevantDocsUrl: string;
  status: string;
  createdAt: string;
  availableForHire: boolean;
  preferredJobRoles: string[];
  UploadReleventDoc: string;
  AdditionalNotes: string;
  RefferalContact: string;
  Status: string;
  dateTime: string;
}

// Define mock data for candidates
const MOCK_AgentSupplier_DATA: AgentSupplier[] = [
  {
    id: "CND001",
    fullName: "Alice Johnson",
    mobile: "+971 55 111 2233",
    whatsapp: "+971 55 111 2233",
    email: "alice@example.com",
    nationality: "Canadian",
    currentLocation: "Dubai",
    visaType: "N/A",
    visaExpiryDate: "2025-12-31",
    availabilityToJoin: "Immediately",
    positionApplyingFor: "Frontend Developer",
    category: "IT",
    uaeExperience: "5 years",
    skills: ["React", "Node.js", "JavaScript"],
    tasksCanPerform: ["UI Development", "API Integration"],
    preferredWorkLocation: ["Dubai", "Abu Dhabi"],
    expectedSalary: "15,000 AED",
    cvUrl: "https://example.com/resume/alice.pdf",
    relevantDocsUrl: "https://example.com/docs/alice.zip",
    status: "Active",
    createdAt: "2023-05-15T10:30:00",
    UploadReleventDoc: "",
    AdditionalNotes: "",
    RefferalContact: "",
    Status: "",
    dateTime: "",
    availableForHire: true,
    preferredJobRoles: ["Frontend Developer", "UI/UX Designer"]
  },
  {
    id: "CND001",
    fullName: "Alice ",
    mobile: "+971 55 111 2233",
    whatsapp: "+971 55 111 2233",
    email: "alice@example.com",
    nationality: "Canadian",
    currentLocation: "Dubai",
    visaType: "N/A",
    visaExpiryDate: "2025-12-31",
    availabilityToJoin: "Immediately",
    positionApplyingFor: "Frontend Developer",
    category: "IT",
    uaeExperience: "5 years",
    skills: ["React", "Node.js", "JavaScript"],
    tasksCanPerform: ["UI Development", "API Integration"],
    preferredWorkLocation: ["Dubai", "Abu Dhabi"],
    expectedSalary: "15,000 AED",
    cvUrl: "https://example.com/resume/alice.pdf",
    relevantDocsUrl: "https://example.com/docs/alice.zip",
    status: "Active",
    createdAt: "2023-05-15T10:30:00",
    UploadReleventDoc: "",
    AdditionalNotes: "",
    RefferalContact: "",
    Status: "",
    dateTime: "",
    availableForHire: true,
    preferredJobRoles: ["Frontend Developer", "UI/UX Designer"]
  },
  {
    id: "CND001",
    fullName: " Johnson",
    mobile: "+971 55 111 2233",
    whatsapp: "+971 55 111 2233",
    email: "alice@example.com",
    nationality: "Canadian",
    currentLocation: "Dubai",
    visaType: "N/A",
    visaExpiryDate: "2025-12-31",
    availabilityToJoin: "Immediately",
    positionApplyingFor: "Frontend Developer",
    category: "IT",
    uaeExperience: "5 years",
    skills: ["React", "Node.js", "JavaScript"],
    tasksCanPerform: ["UI Development", "API Integration"],
    preferredWorkLocation: ["Dubai", "Abu Dhabi"],
    expectedSalary: "15,000 AED",
    cvUrl: "https://example.com/resume/alice.pdf",
    relevantDocsUrl: "https://example.com/docs/alice.zip",
    status: "Active",
    createdAt: "2023-05-15T10:30:00",
    UploadReleventDoc: "",
    AdditionalNotes: "",
    RefferalContact: "",
    Status: "",
    dateTime: "",
    availableForHire: true,
    preferredJobRoles: ["Frontend Developer", "UI/UX Designer"]
  },
];

export const AgentSupplierTable = () => {
  // const [agentSupplier, setAgentSupplier] = useState<AgentSupplier[]>(MOCK_AgentSupplier_DATA);
  const [agentSupplier] = useState<AgentSupplier[]>(MOCK_AgentSupplier_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default 10 items per page
  const indexOfLastCandidate = currentPage * itemsPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - itemsPerPage;
  const currentAgentSupplier = agentSupplier.slice(indexOfFirstCandidate, indexOfLastCandidate);
  const [showAddAgentsSupplierPopup, setShowAddAgentsSupplierPopup] = useState(false);
  const [showEditAgentsSupplierPopup, setShowEditAgentsSupplierPopup] = useState(false);
  const navigate = useNavigate()

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    //dispatch(setCurrentPage(page));
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1); // Reset to the first page when items per page changes
  };

  const openAddAgentsSupplierPopup = () => {
    setShowAddAgentsSupplierPopup(true);
  }

  const closeAddAgentsSupplierPopup = () => {
    setShowAddAgentsSupplierPopup(false)
  }

  const openEditAgentsSupplierPopup = () => {
    setShowEditAgentsSupplierPopup(true);
  }

  const closeEditAgentsSupplierPopup = () => {
    setShowEditAgentsSupplierPopup(false)
  }

  return (
    <div className="p-6">
      <div className="bg-white px-5 py-1 rounded-lg shadow-sm ">
        {/* Header Section */}
        <div className="flex flex-wrap items-center justify-between pb-2 py-2 gap-y-3">
          <div className="flex items-center">
            <span className="text-2xl font-bold">Agents/Supplier</span>
            <span className="mx-2 pt-2 text-xl"><MdOutlineKeyboardArrowRight /></span>
            <span className="text-gray-500 pt-2 text-sm font-medium underline">Dashboard</span>
            <span className="mx-2 pt-2 text-sm">{"/"}</span>
            <span className="text-gray-500 pt-2 text-sm font-medium">Agents/Supplier</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={openAddAgentsSupplierPopup}
              buttonType="button"
              buttonTitle="Agents/Supplier"
              icon={
                <div className="flex items-center gap-1">
                  <div className="relative w-4 h-4">
                    <FaUser className="w-4 h-4 text-current" />
                    <span className="absolute -top-1.5 -left-2 text-current text-[15px] font-bold">+</span>
                  </div>
                </div>
              }
              className="flex items-center gap-2 bg-armsjobslightblue text-armsWhite border border-armsjobslightblue rounded px-4 py-2 font-bold  hover:text-armsjobslightblue hover:bg-armsWhite transition-colors duration-200"
            />

            {/* Search Input */}
            <div className="relative w-[300px]">
              <InputField
                type="text"
                placeholder="Search"
                className="w-full rounded-[5px] border-[1px] border-armsgrey pl-2 pr-2 py-1.5 focus-within:outline-none"
                label=""
              />
              <IoMdSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-armsgrey text-[18px]" />
            </div>

            {/* Select Dropdown */}
            {/* <select className="border border-armsgrey px-3 py-2 rounded h-10 relative w-[170px]"> */}
            <select className="w-[170px] rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none">
              <option value="all">All</option>
              <option value="Today">Today</option>
              <option value="Yesterday">Yesterday</option>
              <option value="Last 7 days">Last 7 days</option>
              <option value="Last 30 days">Last 30 days</option>
              <option value="This Month">This Month</option>
              <option value="Last Year">Last Year</option>
            </select>
          </div>
        </div>
        {/* Table rendering */}
        <div className="w-full overflow-x-auto">
          <table className="w-full table-auto text-sm ">
            <thead className="bg-main text-left">
              <tr className="bg-main text-left text-armsWhite whitespace-nowrap">
                <th className="bg-main px-2 py-3  ">Agents /<br /> Supplier ID</th>
                <th className="bg-main px-2 py-3 ">Name of <br />Agent</th>
                <th className="bg-main px-2 py-3 ">Mobile No</th>
                <th className="bg-main px-2 py-3 ">WhatsApp No</th>
                <th className="bg-main px-2 py-3 ">Email ID</th>
                <th className="bg-main px-2 py-3 ">Can the agent do <br />Recruitment?</th>
                <th className="bg-main px-2 py-3 ">Have you been associated
                  <br />earlier with ARMSJOBS?</th>
                <th className="bg-main px-2 py-3 ">Can the agent do
                  <br />
                  manpower supplying?</th>
                <th className="bg-main px-2 py-3 ">Catogory you
                  <br />
                  can supply
                </th>
                <th className="bg-main px-2 py-3 ">Quantity
                  <br />Estimate
                </th>
                <th className="bg-main px-2 py-3 ">Area covered<br /> (Emirates)</th>
                <th className="bg-main px-2 py-3 ">Additional notes(catogory<br />Rates & Recruitment Rates)</th>

                <th className="bg-main px-2 py-3 ">Status</th>
                <th className="bg-main px-2 py-3 ">Created Date&Time</th>
                <th className="bg-main px-2 py-3 sticky right-0 z-10">Actions</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap ">
              {currentAgentSupplier.map((agent) => (
                <tr key={agent.id}
                  onClick={() => navigate(`/AgentSupplyView/${agent.id}`)}
                  className="border-b-2 border-armsgrey hover:bg-gray-100 ">
                  <td className="px-2 py-3">{agent.id}</td>
                  <td className="px-2 py-3">{agent.fullName}</td>
                  <td className="px-2 py-3">{agent.mobile}</td>
                  <td className="px-2 py-3">{agent.whatsapp}</td>
                  <td className="px-2 py-3">{agent.email}</td>
                  <td className="px-2 py-3">{agent.availableForHire ? "Yes" : "No"}</td>
                  <td className="px-2 py-3">{agent.status}</td>
                  <td className="px-2 py-3">{agent.uaeExperience}</td>
                  <td className="px-2 py-3">{agent.category}</td>
                  <td className="px-2 py-3">{agent.expectedSalary}</td>
                  <td className="px-2 py-3">{agent.preferredWorkLocation.join(", ")}</td>
                  <td className="px-2 py-3">{agent.AdditionalNotes || "-"}</td>
                  <td className="px-2 py-3">{agent.Status || "-"}</td>
                  <td className="px-2 py-3">{new Date(agent.createdAt).toLocaleString()}</td>
                  <td className="px-2 py-3 sticky right-0 z-10 bg-armsWhite border-b-2 border-armsgrey">
                    <td className="px-2 py-3">
                      <div className="flex items-center space-x-2">
                        {/* Edit Button */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row navigation
                            openEditAgentsSupplierPopup(); // Open the popup
                          }}
                          className="relative flex items-center justify-center border-[1px] border-armsjobslightblue rounded-full px-2 py-2 cursor-pointer group bg-armsjobslightblue hover:bg-white hover:border-armsjobslightblue transition-all duration-200">
                          <MdModeEdit className="text-white group-hover:text-armsjobslightblue text-xl" />
                          {/* Tooltip */}
                          <div className="absolute -top-6.5 bg-armsjobslightblue  text-armsWhite text-xs font-semibold px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-200">
                            Edit
                          </div>
                        </div>

                        {/* Delete Button */}
                        <div className="relative flex items-center justify-center border-[1px] border-armsjobslightblue rounded-full px-2 py-2 cursor-pointer group bg-armsjobslightblue hover:bg-white hover:border-armsjobslightblue transition-all duration-200">
                          <MdDelete className="text-white group-hover:text-armsjobslightblue text-xl" />
                          {/* Tooltip */}
                          <div className="absolute -top-6.5 bg-armsjobslightblue  text-armsWhite text-xs font-semibold px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-200">
                            Delete
                          </div>
                        </div>
                      </div>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={agentSupplier.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
      {showAddAgentsSupplierPopup && <AddAgentsSupplierPopup closePopup={closeAddAgentsSupplierPopup} />}
      {showEditAgentsSupplierPopup && <EditAgentsSupplierPopup closePopup={closeEditAgentsSupplierPopup} />}
    </div>
  );
};
