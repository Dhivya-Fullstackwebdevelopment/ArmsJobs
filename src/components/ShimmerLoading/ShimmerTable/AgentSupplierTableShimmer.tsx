// import React from 'react';

export const AgentSupplierTableShimmer = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto text-sm">
        <thead className="bg-main text-left">
          <tr className="bg-main text-left text-armsWhite whitespace-nowrap">
            <th className="bg-main px-2 py-3">Agents /<br /> Supplier ID</th>
            <th className="bg-main px-2 py-3">Name of <br />Agent</th>
            <th className="bg-main px-2 py-3">Mobile No</th>
            <th className="bg-main px-2 py-3">WhatsApp No</th>
            <th className="bg-main px-2 py-3">Email ID</th>
            <th className="bg-main px-2 py-3">Can the agent do <br />Recruitment?</th>
            <th className="bg-main px-2 py-3">Have you been associated<br />earlier with ARMSJOBS?</th>
            <th className="bg-main px-2 py-3">Can the agent do<br />manpower supplying?</th>
            <th className="bg-main px-2 py-3">Catogory you<br />can supply</th>
            <th className="bg-main px-2 py-3">Quantity<br />Estimate</th>
            <th className="bg-main px-2 py-3">Area covered<br />(Emirates)</th>
            <th className="bg-main px-2 py-3">Additional notes(catogory<br />Rates & Recruitment Rates)</th>
            <th className="bg-main px-2 py-3">Status</th>
            <th className="bg-main px-2 py-3">Created Date&Time</th>
            <th className="bg-main px-2 py-3 sticky right-0 z-10">Actions</th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="border-b-2 border-armsgrey">
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-32"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div>
              </td>
              <td className="px-2 py-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div>
              </td>
              <td className="px-2 py-5 sticky right-0 z-10 bg-armsWhite">
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