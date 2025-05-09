//import React from 'react';

export const AgentSupplierViewShimmer = () => {
  return (
    <div className="p-4">
      <div className="bg-white px-5 py-1 rounded-lg shadow-sm">
        {/* Header Shimmer */}
        <div className="flex justify-between items-center p-1">
          <div className="flex items-center p-3">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="p-3">
            <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="flex gap-4">
          {/* Left Column - Candidate Names Shimmer */}
          <div className="w-1/4 border-armsBlack border-1 rounded">
            <div className="bg-white rounded shadow-sm">
              <div className="bg-main text-armsWhite p-4">
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="p-4">
                <div className="h-8 w-full bg-gray-200 rounded animate-pulse mb-4"></div>
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="p-3 border-b">
                    <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Details Shimmer */}
          <div className="flex-[3] p-2">
            <div className="bg-white border border-armsBlack rounded shadow-sm p-4">
              {/* Company Details Shimmer */}
              <div className="mb-6">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(4)].map((_, index) => (
                    <div key={index}>
                      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility & History Shimmer */}
              <div className="mb-6">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(3)].map((_, index) => (
                    <div key={index}>
                      <div className="h-4 w-40 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Manpower info Shimmer */}
              <div className="mb-6">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(3)].map((_, index) => (
                    <div key={index}>
                      <div className="h-4 w-40 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional info Shimmer */}
              <div className="mb-6">
                <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div>
                  <div className="h-4 w-64 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Remarks Shimmer */}
          <div className="flex-[1.5] p-2">
            <div className="bg-gray-100 rounded shadow-sm">
              <div className="bg-main text-armsWhite p-3 rounded-t">
                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="p-4">
                <div className="h-32 w-full bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="h-10 w-20 bg-gray-200 rounded animate-pulse mb-4"></div>
                {[...Array(2)].map((_, index) => (
                  <div key={index} className="border-b pb-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 