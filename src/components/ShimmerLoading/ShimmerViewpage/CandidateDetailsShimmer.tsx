//import React from 'react';

export const CandidateDetailsShimmer = () => {
  return (
    <div className="flex-[3] p-2">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-1 max-xl:flex-col max-md:flex-col">
          <div className="relative -top-2 -left-2">
            <div className="w-45 h-45 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
          <div className="pb-3.5">
            <div className="flex items-center gap-2">
              <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[...Array(5)].map((_, index) => (
                <div key={index}>
                  <div className="h-3 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
      </div>

      {/* Visa & Work Eligibility Section */}
      <div className="mb-6">
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="grid grid-cols-3 gap-4 pt-2">
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <div className="h-3 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Information Section */}
      <div className="mb-6">
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-4 pt-2">
          {[...Array(10)].map((_, index) => (
            <div key={index}>
              <div className="h-3 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Documents Section */}
      <div className="mb-6">
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="flex gap-4 pt-2">
          <div className="w-1/4">
            <div className="h-3 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded animate-pulse"></div>
              <div>
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="w-3/4">
            <div className="h-3 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="flex gap-6">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-12 h-12 bg-gray-200 rounded animate-pulse"></div>
                  <div>
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Other Information Section */}
      <div className="mb-6">
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4 pt-2">
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <div className="h-3 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Job History Section */}
      <div className="w-full border border-main rounded-t-lg p-0 min-h-[300px] bg-white">
        <div className="h-8 bg-gray-200 rounded-t-lg animate-pulse"></div>
        <div className="p-4">
          <div className="grid grid-cols-6 gap-4 mb-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-4 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="grid grid-cols-6 gap-4 mb-4">
              {[...Array(6)].map((_, colIndex) => (
                <div key={colIndex} className="h-4 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 