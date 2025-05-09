import { useEffect, useState } from "react";
import { InputField } from "../../common/InputField";
import { Button } from "../../common/Button";
import profileimg from "../../assets/images/profileimg.jpg"
import { IoDocumentText } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { AddCandidatePopup } from "./AddCandidatePopup";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdDelete, MdModeEdit, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { EditCandidatePopup } from "./EditCandidatePopup";
import { Pagination } from "../../common/Pagination";
import { fetchCandidatesList } from "../../Commonapicall/Candidateapicall/Candidateapis";
import { NotifyError } from "../../common/Toast/ToastMessage";
import { CandidateTableShimmer } from "../../components/ShimmerLoading/ShimmerTable/CommonTableShimmer";
import { DeleteCandidatePopup } from "./DeleteCandidatePopup";

interface CandidatesApiResponse {
  status: string;
  message: string;
  data: CandidateList[];
  count: number;
  next: string | null;
  previous: string | null;
  results: CandidatesApiResponse; // <- this is the real structure of the response
}

// Define a Candidate type
interface CandidateList {
  id:number;
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
  remarks: {
    id: number;
    remark: string;
    candidate_full_name: string;
    created_at: string;
    updated_at: string;
  }[];
  languages_spoken: string;
  preferred_work_type: string;
  currently_employed: boolean;
  additional_notes: string;
  referral_name: string;
  referral_contact: string;
}

export const CandidateTable = () => {
  const [candidatesData, setCandidatesData] = useState<CandidateList[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddCandidatePopup, setShowAddCandidatePopup] = useState(false);
  const [showEditCandidatePopup, setShowEditCandidatePopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastCandidate = currentPage * itemsPerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - itemsPerPage;
  const currentCandidate = candidatesData.slice(indexOfFirstCandidate, indexOfLastCandidate);
  const [showDeleteCandidatePopup, setShowDeleteCandidatePopup] = useState(false);
  const [candidateToDelete, setcandidateToDelete] = useState<{ id: number, name: string } | null>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        setLoading(true);
        const response = await fetchCandidatesList() as CandidatesApiResponse;
        setCandidatesData(response.results.data);
      } catch (err) {
        NotifyError("Failed to fetch candidates");
        console.log("Error fetching candidates:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCandidate();
  }, []);


  const refreshCandidateList = async () => {
    try {
      setLoading(true);
      const response = await fetchCandidatesList() as CandidatesApiResponse;
      setCandidatesData(response?.results?.data);
    } catch (err) {
      NotifyError(err instanceof Error ? err.message : "Failed to fetch agents");
    } finally {
      setLoading(false);
    }
  };

  const openAddCandidatePopup = () => {
    setShowAddCandidatePopup(true);
  }

  const closeAddCategoryPopup = () => {
    setShowAddCandidatePopup(false)
  }

  const openEditCandidatePopup = (candidate:any) => {
    setShowEditCandidatePopup(true);
    setSelectedCandidate(candidate);
  }

  const closeEditCategoryPopup = () => {
    setShowEditCandidatePopup(false)
  }

  const openDeleteCandidatePopup = (candidate: CandidateList, e: React.MouseEvent) => {
    e.stopPropagation();
    setcandidateToDelete({ id: candidate.id, name: candidate.full_name });
    setShowDeleteCandidatePopup(true);
  };

  const closeDeleteAgentsPopup = () => {
    setShowDeleteCandidatePopup(false);
    setcandidateToDelete(null);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1); // Reset to the first page when items per page changes
  };



  return (
    <div className="p-6">
      <div className="bg-white px-5 py-1 rounded-lg shadow-sm ">
        {/* Header Section */}
        <div className="flex flex-wrap items-center justify-between pb-2 py-2 gap-y-4">
          <div className="flex flex-wrap items-center">
            <span className="text-3xl font-bold">Candidate</span>
            <span className="mx-2 pt-2 text-xl"><MdOutlineKeyboardArrowRight /></span>
            <span className="text-gray-500 pt-2 text-sm font-medium underline">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              buttonType="button"
              buttonTitle="Candidate"
              onClick={openAddCandidatePopup}
              icon={
                <div className="flex items-center gap-1">
                  <div className="relative w-4 h-4">
                    <FaUser className="w-4 h-4 text-current" />
                    <span className="absolute -top-1.5 -left-2 text-current text-[15px] font-bold">+</span>
                  </div>
                </div>
              }
              className="flex items-center gap-2 bg-armsjobslightblue text-armsWhite border border-armsjobslightblue rounded px-4 py-2 font-bold  hover:text-armsjobslightblue hover:bg-armsWhite transition-colors duration-200 cursor-pointer"
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
            <select className="w-[170px] rounded-[5px] border-[1px] border-armsgrey px-2 py-1.5 focus-within:outline-none cursor-pointer">
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
        {loading ? (
          <CandidateTableShimmer />
        ) : (
          <div className="w-full overflow-x-auto">
            {currentCandidate.length === 0 ? (
              <div className="text-center py-4">No candidates found</div>
            ) : (
              <table className="w-full table-auto text-sm ">
                <thead className="bg-main text-left">
                  <tr className="bg-main text-left text-armsWhite whitespace-nowrap">
                    <th className="bg-main px-2 py-3  ">Candidate ID</th>
                    <th className="bg-main px-2 py-3 ">Photo Upload</th>
                    <th className="bg-main px-2 py-3 ">Full Name</th>
                    <th className="bg-main px-2 py-3 ">Mobile No</th>
                    <th className="bg-main px-2 py-3 ">WhatsApp No</th>
                    <th className="bg-main px-2 py-3 ">Email ID</th>
                    <th className="bg-main px-2 py-3 ">Nationality</th>
                    <th className="bg-main px-2 py-3 ">Current Location</th>
                    <th className="bg-main px-2 py-3 ">Visa Type</th>
                    <th className="bg-main px-2 py-3 ">Visa Expiry Date</th>
                    <th className="bg-main px-2 py-3 ">Availability to join</th>
                    <th className="bg-main px-2 py-3 ">Position Applying For</th>
                    <th className="bg-main px-2 py-3 ">Category</th>
                    <th className="bg-main px-2 py-3 ">Years of UAE Experience</th>
                    <th className="bg-main px-2 py-3 ">Skills & Tasks You can Perform</th>
                    <th className="bg-main px-2 py-3 ">Preferred Work Location</th>
                    <th className="bg-main px-2 py-3 ">Expected Salary (AED)</th>
                    <th className="bg-main px-2 py-3 ">Upload CV</th>
                    <th className="bg-main px-2 py-3 ">Upload Relevant Docs</th>
                    <th className="bg-main px-2 py-3 ">Status</th>
                    <th className="bg-main px-2 py-3 ">Created At</th>
                    <th className="bg-main px-2 py-3 sticky right-0 z-10">Actions</th>
                  </tr>
                </thead>
                <tbody className="whitespace-nowrap ">
                  {currentCandidate.map((candidate) => (
                    <tr key={candidate.candidate_id}
                      onClick={() => navigate(`/Candidate/${candidate.id}`)}
                      className="border-b-2 border-armsgrey hover:bg-gray-100 cursor-pointer">
                      <td className="px-2 py-7">{candidate.candidate_id}</td>
                      <td className="px-2 py-1">
                        {candidate.photo_upload ? (
                          <img src={candidate.photo_upload}
                            alt={candidate.photo_upload}
                            className="w-10 h-10 rounded-full"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-armsgrey flex items-center justify-center">
                            <img
                              src={profileimg}
                              alt="profileImg"
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                        )}
                      </td>
                      <td className="px-2 py-1">{candidate.full_name}</td>
                      <td className="px-2 py-1">{candidate.mobile_number}</td>
                      <td className="px-2 py-1">{candidate.whatsapp_number}</td>
                      <td className="px-2 py-1">{candidate.email}</td>
                      <td className="px-2 py-1">{candidate.nationality}</td>
                      <td className="px-2 py-1">{candidate.current_location}</td>
                      <td className="px-2 py-1">{candidate.visa_type}</td>
                      <td className="px-2 py-1">{candidate.visa_expiry_date}</td>
                      <td className="px-2 py-1">{candidate.availability_to_join}</td>
                      <td className="px-2 py-1">{candidate.position_applying_for}</td>
                      <td className="px-2 py-1">
                        {candidate.category}
                        {candidate.other_category && ` (${candidate.other_category})`}
                      </td>
                      <td className="px-2 py-1">{candidate.uae_experience_years}</td>
                      <td className="px-2 py-1">{candidate.skills_tasks}</td>
                      <td className="px-2 py-1">{candidate.preferred_work_location}</td>
                      <td className="px-2 py-1">{candidate.expected_salary}</td>
                      <td className="px-2 py-1">
                        <a href={candidate.upload_cv} target="_blank" className="text-armsjobslightblue flex text-lg items-center gap-1">
                          <IoDocumentText /> 2
                        </a>
                      </td>
                      <td className="px-2 py-3">
                        {candidate.relevant_docs2 ? (
                          <a
                            href={candidate.relevant_docs2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-armsjobslightblue text-lg flex items-center gap-1"
                          >
                            <IoDocumentText /> 2
                          </a>
                        ) : (
                          <span className="text-gray-400 text-sm">No Doc</span>
                        )}
                      </td>
                      <td className="px-2 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${candidate.status === 'Active' ? 'bg-green-100 text-green-800' :
                          candidate.status === 'Hired' ? 'bg-blue-100 text-blue-800' :
                            candidate.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                              'bg-gray-100 text-gray-800'
                          }`}>
                          {candidate.status}
                        </span>
                      </td>
                      <td className="px-2 py-3">{new Date(candidate.created_at).toLocaleString()}</td>
                      <td className="px-2 py-3 sticky right-0 z-10 bg-armsWhite border-b-2 border-armsgrey">
                        <div className="flex items-center space-x-2">
                          {/* Edit Button */}
                          <div className="relative flex items-center justify-center border-[1px] border-armsjobslightblue rounded-full px-2 py-2 cursor-pointer group bg-armsjobslightblue hover:bg-white hover:border-armsjobslightblue transition-all duration-200"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent row navigation
                              openEditCandidatePopup(candidate); // Open the popup
                            }}>
                            <MdModeEdit className="text-white group-hover:text-armsjobslightblue text-xl" />
                            {/* Tooltip */}
                            <div
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent row navigation
                                openEditCandidatePopup(candidate); // Open the popup
                              }}
                              className="absolute -top-6.5 bg-armsjobslightblue  text-armsWhite text-xs font-semibold px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-200">
                              Edit
                            </div>
                          </div>

                          {/* Delete Button */}
                          <div className="relative flex items-center justify-center border-[1px] border-armsjobslightblue rounded-full px-2 py-2 cursor-pointer group bg-armsjobslightblue hover:bg-white hover:border-armsjobslightblue transition-all duration-200">
                            <MdDelete
                              onClick={(e) => openDeleteCandidatePopup(candidate, e)}
                              className="text-white group-hover:text-armsjobslightblue text-xl" />
                            {/* Tooltip */}
                            <div
                              onClick={(e) => openDeleteCandidatePopup(candidate, e)}
                              className="absolute -top-6.5 bg-armsjobslightblue  text-armsWhite text-xs font-semibold px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-200">
                              Delete
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalItems={candidatesData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
      {showAddCandidatePopup && <AddCandidatePopup closePopup={closeAddCategoryPopup} refreshData={refreshCandidateList} />}
      {showEditCandidatePopup && selectedCandidate && (
      <EditCandidatePopup 
      closePopup={closeEditCategoryPopup} 
      editCandidate={selectedCandidate}
      refreshData={refreshCandidateList}
      />)}
      {showDeleteCandidatePopup && candidateToDelete && (<DeleteCandidatePopup closePopup={closeDeleteAgentsPopup} CandidateData={candidateToDelete} refreshData={refreshCandidateList} />)}
    </div>
  );
};

