

import { useState } from "react";
import { InputField } from "../../common/InputField";
import { Button } from "../../common/Button";
//import profileimg from "../../assets/images/profileimg.jpg"
import { FaUser } from "react-icons/fa6";
// import { FaEdit, FaSearch } from "react-icons/fa";
import { MdDelete, MdModeEdit, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Pagination } from "../../common/Pagination";
import { IoMdSearch } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";

// Define a UAEOwnFreeLauncerVisa type
interface UAEOwnFreeLauncerVisa {
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
const MOCK_UAEOwnFreeLauncer_DATA: UAEOwnFreeLauncerVisa[] = [
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
  {
    id: "CND001",
    fullName: "Alice",
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

export const UAEOwnFreeLauncerVisaTable = () => {
  // const [uAEOwnFreeLauncer, setUAEOwnFreeLauncer] = useState<UAEOwnFreeLauncerVisa[]>(MOCK_UAEOwnFreeLauncer_DATA);
  const [uAEOwnFreeLauncer] = useState<UAEOwnFreeLauncerVisa[]>(MOCK_UAEOwnFreeLauncer_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default 10 items per page
  const indexOfLastFreeLaunceVisa = currentPage * itemsPerPage;
  const indexOfFirstFreeLaunceVisa = indexOfLastFreeLaunceVisa - itemsPerPage;
  const currentFreeLaunceVisa = uAEOwnFreeLauncer.slice(indexOfFirstFreeLaunceVisa, indexOfLastFreeLaunceVisa);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    //dispatch(setCurrentPage(page));
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1); // Reset to the first page when items per page changes
  };

  return (
    <div className="p-6">
      <div className="bg-white px-5 py-1 rounded-lg shadow-sm ">
        {/* Header Section */}
        <div className="flex items-center justify-between pb-2 py-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold">UAE Own/Freelancer Visa</span>
            <span className="mx-2 pt-2 text-xl"><MdOutlineKeyboardArrowRight /></span>
            <span className="text-gray-500 pt-2 text-sm font-medium underline">Dashboard</span>
            <span className="mx-2 pt-2 text-sm">{"/"}</span>
            <span className="text-gray-500 pt-2 text-sm font-medium">UAE Own/Freelancer Visa</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              buttonType="button"
              buttonTitle="UAE Own Visa/Freelancer"
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
                <th className="bg-main px-2 py-3  ">Candidate ID</th>
                <th className="bg-main px-2 py-3 ">Full Name</th>
                <th className="bg-main px-2 py-3 ">Mobile No</th>
                <th className="bg-main px-2 py-3 ">WhatsApp No</th>
                <th className="bg-main px-2 py-3 ">Email ID</th>
                <th className="bg-main px-2 py-3 ">Nationality</th>
                <th className="bg-main px-2 py-3 ">Current Residential
                  <br />Emirates</th>
                <th className="bg-main px-2 py-3 ">Visa Type
                  <br />
                  (optional)</th>
                <th className="bg-main px-2 py-3 ">Visa Copy
                  <br />
                  (optional)
                </th>
                <th className="bg-main px-2 py-3 ">Emirates ID Copy
                  <br />(mandatory)
                </th>
                <th className="bg-main px-2 py-3 ">Passport Copy<br /> (Mandatory)</th>
                <th className="bg-main px-2 py-3 ">Visa Expiry <br />Date</th>
                <th className="bg-main px-2 py-3 ">Position You're<br /> Seeking</th>
                <th className="bg-main px-2 py-3 ">Skills /Services <br />You Offer</th>
                <th className="bg-main px-2 py-3 ">Language Spoken</th>
                <th className="bg-main px-2 py-3 ">Years of UAE <br />Experience</th>
                <th className="bg-main px-2 py-3 ">Preferred Work<br />Type</th>
                <th className="bg-main px-2 py-3 ">Preferred Work<br />Location</th>
                <th className="bg-main px-2 py-3 ">Currently Employed?</th>
                <th className="bg-main px-2 py-3 ">Availability to join</th>
                <th className="bg-main px-2 py-3 ">Upload CV or<br />Work Portfolio</th>
                <th className="bg-main px-2 py-3 ">Upload Relevent<br />Docs</th>
                <th className="bg-main px-2 py-3 ">Additional Notes<br />Information</th>
                <th className="bg-main px-2 py-3 ">Referral Contact<br />Details</th>
                <th className="bg-main px-2 py-3 ">Status</th>
                <th className="bg-main px-2 py-3 ">Created Date&Time</th>
                <th className="bg-main px-2 py-3 sticky right-0 z-10">Actions</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap ">
              {currentFreeLaunceVisa.map((freelaunce) => (
                <tr key={freelaunce.id} className="border-b-2 border-armsgrey">
                  <td className="px-2 py-7">{freelaunce.id}</td>
                  <td className="px-2 py-1">{freelaunce.fullName}</td>
                  <td className="px-2 py-1">{freelaunce.mobile}</td>
                  <td className="px-2 py-1">{freelaunce.whatsapp}</td>
                  <td className="px-2 py-1">{freelaunce.email}</td>
                  <td className="px-2 py-1">{freelaunce.nationality}</td>
                  <td className="px-2 py-1">{freelaunce.currentLocation}</td>
                  <td className="px-2 py-1">{freelaunce.visaType}</td>
                  <td className="px-2 py-1">{freelaunce.visaExpiryDate}</td>
                  <td className="px-2 py-1">{freelaunce.availabilityToJoin}</td>
                  <td className="px-2 py-1">{freelaunce.positionApplyingFor}</td>
                  <td className="px-2 py-1">
                    {freelaunce.category}
                    {freelaunce.otherCategory && ` (${freelaunce.otherCategory})`}
                  </td>
                  <td className="px-2 py-1">{freelaunce.uaeExperience}</td>
                  <td className="px-2 py-1">{freelaunce.skills.join(", ")}</td>
                  <td className="px-2 py-1">{freelaunce.tasksCanPerform.join(", ")}</td>
                  <td className="px-2 py-1">{freelaunce.preferredWorkLocation.join(", ")}</td>
                  <td className="px-2 py-1">{freelaunce.expectedSalary}</td>
                  {/* <td className="px-2 py-1">
                    <a href={freelaunce.cvUrl} target="_blank" className="text-blue-600">
                      Download
                    </a>
                  </td> */}
                   <td className="px-2 py-1">
                    <a href={freelaunce.cvUrl} target="_blank" className="text-armsjobslightblue flex text-lg items-center gap-1">
                      <IoDocumentText /> 1
                    </a>
                  </td>
                  <td className="px-2 py-1">
                    <a href={freelaunce.cvUrl} target="_blank" className="text-armsjobslightblue flex text-lg items-center gap-1">
                      <IoDocumentText /> 2
                    </a>
                  </td>
                  <td className="px-2 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${freelaunce.status === 'Active' ? 'bg-green-100 text-green-800' :
                      freelaunce.status === 'Hired' ? 'bg-blue-100 text-blue-800' :
                        freelaunce.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                      }`}>
                      {freelaunce.status}
                    </span>
                  </td>
                  <td className="px-2 py-3">{new Date(freelaunce.createdAt).toLocaleString()}</td>
                  <td className="px-2 py-1">{freelaunce.UploadReleventDoc}</td>
                  <td className="px-2 py-1">{freelaunce.AdditionalNotes}</td>
                  <td className="px-2 py-1">{freelaunce.RefferalContact}</td>
                  <td className="px-2 py-1">{freelaunce.Status}</td>
                  <td className="px-2 py-1">{freelaunce.dateTime}</td>
                  <td className="px-2 py-3 sticky right-0 z-10 bg-armsWhite border-b-2 border-armsgrey">
                    <td className="px-2 py-3">
                      <div className="flex items-center space-x-2">
                        {/* Edit Button */}
                        <div className="relative flex items-center justify-center border-[1px] border-armsjobslightblue rounded-full px-2 py-2 cursor-pointer group bg-armsjobslightblue hover:bg-white hover:border-armsjobslightblue transition-all duration-200">
                          <MdModeEdit className="text-white group-hover:text-armsjobslightblue text-xl" />
                          {/* Tooltip */}
                          <div className="absolute -top-6 bg-armsjobslightblue  text-armsWhite text-xs font-semibold px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-200">
                            Edit
                          </div>
                        </div>

                        {/* Delete Button */}
                        <div className="relative flex items-center justify-center border-[1px] border-armsjobslightblue rounded-full px-2 py-2 cursor-pointer group bg-armsjobslightblue hover:bg-white hover:border-armsjobslightblue transition-all duration-200">
                          <MdDelete className="text-white group-hover:text-armsjobslightblue text-xl" />
                          {/* Tooltip */}
                          <div className="absolute -top-6 bg-armsjobslightblue  text-armsWhite text-xs font-semibold px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-200">
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
          totalItems={uAEOwnFreeLauncer.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </div>
  );
};

