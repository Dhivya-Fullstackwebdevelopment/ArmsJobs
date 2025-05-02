

import { useState } from "react";
import { InputField } from "../../common/InputField";
import { Button } from "../../common/Button";
//import profileimg from "../../assets/images/profileimg.jpg"
import { FaUser } from "react-icons/fa6";
//import { FaSearch } from "react-icons/fa";
import { MdDelete, MdModeEdit, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Pagination } from "../../common/Pagination";
import { IoMdSearch } from "react-icons/io";
import { OverSeasAddPopup } from "./AddOverSeasRecruitmentPopup";
import { EditOverSeasPopup } from "./EditOverSeasRecruitment";

// Define a Candidate type
interface OverseasRecruitmentAgency {
  id: string;
  companyName: string;
  country: string;
  contactPersonName: string;
  mobileNo: string;
  whatsappNo: string;
  emailId: string;
  categoriesProvided: string;
  nationalityOfWorkers: string;
  mobilizationTime: string;
  uaeDeploymentExperience: string;
  relevantDocsUrl: string;
  comments: string;
  status: string;
  createdDateTime: string;
}

// Define mock data for candidates
const MOCK_RECRUITMENT_AGENCIES: OverseasRecruitmentAgency[] = [
  {
    id: "OR001",
    companyName: "Global Recruiters Ltd.",
    country: "India",
    contactPersonName: "Rahul Sharma",
    mobileNo: "+91 98765 43210",
    whatsappNo: "+91 98765 43210",
    emailId: "rahul@globalrecruiters.com",
    categoriesProvided: "Construction, Hospitality",
    nationalityOfWorkers: "Indian",
    mobilizationTime: "30 Days",
    uaeDeploymentExperience: "10 Years",
    relevantDocsUrl: "https://example.com/docs/rahul.zip",
    comments: "Trusted agency for skilled workers.",
    status: "Active",
    createdDateTime: "2024-04-26T09:00:00"
  },
  {
    id: "OR002",
    companyName: "universe Recruiters Ltd.",
    country: "India",
    contactPersonName: "Rahul Sharma",
    mobileNo: "+91 98765 43210",
    whatsappNo: "+91 98765 43210",
    emailId: "rahul@globalrecruiters.com",
    categoriesProvided: "Construction, Hospitality",
    nationalityOfWorkers: "Indian",
    mobilizationTime: "30 Days",
    uaeDeploymentExperience: "10 Years",
    relevantDocsUrl: "https://example.com/docs/rahul.zip",
    comments: "Trusted agency for skilled workers.",
    status: "Active",
    createdDateTime: "2024-04-26T09:00:00"
  },
  {
    id: "OR003",
    companyName: "indian Recruiters Ltd.",
    country: "India",
    contactPersonName: "Rahul Sharma",
    mobileNo: "+91 98765 43210",
    whatsappNo: "+91 98765 43210",
    emailId: "rahul@globalrecruiters.com",
    categoriesProvided: "Construction, Hospitality",
    nationalityOfWorkers: "Indian",
    mobilizationTime: "30 Days",
    uaeDeploymentExperience: "10 Years",
    relevantDocsUrl: "https://example.com/docs/rahul.zip",
    comments: "Trusted agency for skilled workers.",
    status: "Active",
    createdDateTime: "2024-04-26T09:00:00"
  },

];


export const OverSeasRecruitmentTable = () => {

  // const [recruitmentAgencies, setRecruitmentAgencies] = useState<OverseasRecruitmentAgency[]>(MOCK_RECRUITMENT_AGENCIES);
  const [recruitmentAgencies] = useState<OverseasRecruitmentAgency[]>(MOCK_RECRUITMENT_AGENCIES);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default 10 items per page
  const indexOfLastRecruitment = currentPage * itemsPerPage;
  const indexOfFirstRecruitment = indexOfLastRecruitment - itemsPerPage;
  const currentRecruitmentAgencies = recruitmentAgencies.slice(indexOfFirstRecruitment, indexOfLastRecruitment);
  const [showOverSeasPopup, setShowOverSeasPopup] = useState<boolean>(false)
  const [showEditOverSeasPopup, setShowEditOverSeasPopup] = useState<boolean>(false)

  const openOverseasPopup = () => {
    setShowOverSeasPopup(true)
  }

  const closeOverseasPopup = () => {
    setShowOverSeasPopup(false)
  }

  const openEditOverseasPopup = () => {
    setShowEditOverSeasPopup(true)
  }

  const closeEditOverseasPopup = () => {
    setShowEditOverSeasPopup(false)
  }

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
            <span className="text-2xl font-bold">Overseas Recruitment</span>
            <span className="mx-2 pt-2 text-xl"><MdOutlineKeyboardArrowRight /></span>
            <span className="text-gray-500 pt-2 text-sm font-medium underline">Dashboard</span>
            <span className="mx-2 pt-2 text-sm">{"/"}</span>
            <span className="text-gray-500 pt-2 text-sm font-medium">Overseas Recruitment</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={openOverseasPopup}
              buttonType="button"
              buttonTitle="Overseas Recruitment"
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
                <th className="bg-main px-2 py-3  ">Overseas<br /> Recruitment ID</th>
                <th className="bg-main px-2 py-3 ">company Name </th>
                <th className="bg-main px-2 py-3 ">Country</th>
                <th className="bg-main px-2 py-3 ">Cantact Person<br />Name</th>
                <th className="bg-main px-2 py-3 ">Mobile No</th>
                <th className="bg-main px-2 py-3 ">WhatsApp No</th>
                <th className="bg-main px-2 py-3 ">Email ID</th>
                <th className="bg-main px-2 py-3 ">Catogories you<br /> can Provide</th>
                <th className="bg-main px-2 py-3 ">Nationality of <br />Workers</th>
                <th className="bg-main px-2 py-3 ">Mobilization
                  <br />Time</th>
                <th className="bg-main px-2 py-3 ">UAE Deployment
                  <br />
                  Experience</th>
                <th className="bg-main px-2 py-3 ">Upload Relevent Documents( License Copy
                  <br />
                  / profile/ Exp Certificate etc)
                </th>

                <th className="bg-main px-2 py-3 ">Comments</th>
                <th className="bg-main px-2 py-3 ">Status</th>
                <th className="bg-main px-2 py-3 ">Created Date&Time</th>
                <th className="bg-main px-2 py-3 sticky right-0 z-10">Actions</th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap">
              {currentRecruitmentAgencies.map((agency) => (
                <tr key={agency.id} className="border-b-2 border-armsgrey">
                  <td className="px-2 py-7">{agency.id}</td>
                  <td className="px-2 py-7">{agency.companyName}</td>
                  <td className="px-2 py-7">{agency.country}</td>
                  <td className="px-2 py-7">{agency.contactPersonName}</td>
                  <td className="px-2 py-7">{agency.mobileNo}</td>
                  <td className="px-2 py-7">{agency.whatsappNo}</td>
                  <td className="px-2 py-7">{agency.emailId}</td>
                  <td className="px-2 py-7">{agency.categoriesProvided}</td>
                  <td className="px-2 py-7">{agency.nationalityOfWorkers}</td>
                  <td className="px-2 py-7">{agency.mobilizationTime}</td>
                  <td className="px-2 py-7">{agency.uaeDeploymentExperience}</td>
                  <td className="px-2 py-7">
                    <a href={agency.relevantDocsUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      View Docs
                    </a>
                  </td>
                  <td className="px-2 py-7">{agency.comments}</td>
                  <td className="px-2 py-7">{agency.status}</td>
                  <td className="px-2 py-7">{new Date(agency.createdDateTime).toLocaleString()}</td>
                  <td className="px-2 py-3 sticky right-0 z-10 bg-armsWhite border-b-2 border-armsgrey">
                    <td className="px-2 py-3">
                      <div className="flex items-center space-x-2">
                        {/* Edit Button */}
                        <div
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent row navigation
                          openEditOverseasPopup(); // Open the popup
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
          totalItems={recruitmentAgencies.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
      {showOverSeasPopup&&<OverSeasAddPopup closePopup={closeOverseasPopup}/>}
      {showEditOverSeasPopup&&<EditOverSeasPopup closePopup={closeEditOverseasPopup}/>}
    </div>
  );
};
