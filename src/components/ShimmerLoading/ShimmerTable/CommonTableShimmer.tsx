//import React from 'react';

export const CandidateTableShimmer = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto text-sm">
        <thead className="bg-main text-left">
          <tr className="bg-main text-left text-armsWhite whitespace-nowrap">
            <th className="bg-main px-2 py-3">Candidate ID</th>
            <th className="bg-main px-2 py-3">Photo Upload</th>
            <th className="bg-main px-2 py-3">Full Name</th>
            <th className="bg-main px-2 py-3">Mobile No</th>
            <th className="bg-main px-2 py-3">WhatsApp No</th>
            <th className="bg-main px-2 py-3">Email ID</th>
            <th className="bg-main px-2 py-3">Nationality</th>
            <th className="bg-main px-2 py-3">Current Location</th>
            <th className="bg-main px-2 py-3">Visa Type</th>
            <th className="bg-main px-2 py-3">Visa Expiry Date</th>
            <th className="bg-main px-2 py-3">Availability to join</th>
            <th className="bg-main px-2 py-3">Position Applying For</th>
            <th className="bg-main px-2 py-3">Category</th>
            <th className="bg-main px-2 py-3">Years of UAE Experience</th>
            <th className="bg-main px-2 py-3">Skills & Tasks</th>
            <th className="bg-main px-2 py-3">Preferred Work Location</th>
            <th className="bg-main px-2 py-3">Expected Salary</th>
            <th className="bg-main px-2 py-3">Upload CV</th>
            <th className="bg-main px-2 py-3">Upload Relevant Docs</th>
            <th className="bg-main px-2 py-3">Status</th>
            <th className="bg-main px-2 py-3">Created At</th>
            <th className="bg-main px-2 py-3 sticky right-0 z-10">Actions</th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="border-b-2 border-armsgrey">
              <td className="px-2 py-7">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-2 py-1">
                <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="px-2 py-1">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </td>
              <td className="px-2 py-1 sticky right-0 z-10 bg-armsWhite">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 