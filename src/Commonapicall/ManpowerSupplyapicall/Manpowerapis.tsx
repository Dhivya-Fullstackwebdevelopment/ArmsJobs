import { apiAxios } from "../apiUrl";

// Get ManpowerList
export const fetchCandidatesList = async () => {
  try {
    const response = await apiAxios.get('/api/manpower-suppliers/');

    if (!response.data || response.status !== 200) {
      throw new Error("Failed to fetch candidates");
    }
    console.log("Candidates API response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching candidates:", error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || "Unable to fetch candidates. Please try again later.");
  }
};