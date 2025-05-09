import { apiAxios } from '../apiUrl';

// Get CandidateList
export const fetchCandidatesList = async () => {
  try {
    const response = await apiAxios.get('/api/candidates/');

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

//Add Candidate
export const AddCandidateList = async (
  FullName: string, 
  MobileNumber: string, 
  WhatsappNumber: string, 
  Email:string, 
  Nationality:string,
  CurrentLocation:string,
  VisaType:string,
  AvailabilitytoJoin:string,
  PositionApplyingFor:string,
  Category:string,
  UAEexperience:string,
  SkillsTasks:string,
  PreferredWorkLocation:string,
  ExpectedSalary:string,
  VisaExpiryDate:string,
  OtherCategory:string,
  LanguagesSpoken:string,
  PreferredWorkType:string,
  CurrentlyEmployed:string,
  AdditionalNotes:string,
  ReferralName:string,
  ReferralContact:string
 ) => {
  try {
    const formData = new FormData();
    formData.append('full_name', FullName);
    formData.append('mobile_number',MobileNumber);
    formData.append('whatsapp_number', WhatsappNumber);
    formData.append('email', Email);
    formData.append('nationality', Nationality);
    formData.append('current_location', CurrentLocation);
    formData.append('visa_type', VisaType);
    formData.append('availability_to_join',AvailabilitytoJoin);
    formData.append('position_applying_for', PositionApplyingFor);
    formData.append('category', Category);
    formData.append('uae_experience_years', UAEexperience);
    formData.append('skills_tasks', SkillsTasks);
    formData.append('preferred_work_location', PreferredWorkLocation);
    formData.append('expected_salary', ExpectedSalary);
    formData.append('visa_expiry_date', VisaExpiryDate);
    formData.append('other_category', OtherCategory);
    formData.append('languages_spoken', LanguagesSpoken);
    formData.append('preferred_work_type', PreferredWorkType);
    formData.append('currently_employed', CurrentlyEmployed);
    formData.append('additional_notes', AdditionalNotes);
    formData.append('referral_name', ReferralName);
    formData.append('referral_contact',ReferralContact)

    const response = await apiAxios.post('/api/candidates/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.status !== 201) {
      throw new Error('Failed to submit candidate data');
    }

    console.log('Candidate submitted successfully:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error submitting candidate:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Submission failed. Please try again.');
  }
};

//EditCandidate
export const EditCandidateList = async (
  id: number,
  FullName: string, 
  MobileNumber: string, 
  WhatsappNumber: string, 
  Email:string, 
  Nationality:string,
  CurrentLocation:string,
  VisaType:string,
  AvailabilitytoJoin:string,
  PositionApplyingFor:string,
  Category:string,
  UAEexperience:string,
  SkillsTasks:string,
  PreferredWorkLocation:string,
  ExpectedSalary:string,
  VisaExpiryDate:string,
  OtherCategory:string,
  LanguagesSpoken:string,
  PreferredWorkType:string,
  CurrentlyEmployed:string,
  AdditionalNotes:string,
  ReferralName:string,
  ReferralContact:string
 ) => {
  try {
    const formData = new FormData();
    formData.append('full_name', FullName);
    formData.append('mobile_number',MobileNumber);
    formData.append('whatsapp_number', WhatsappNumber);
    formData.append('email', Email);
    formData.append('nationality', Nationality);
    formData.append('current_location', CurrentLocation);
    formData.append('visa_type', VisaType);
    formData.append('availability_to_join',AvailabilitytoJoin);
    formData.append('position_applying_for', PositionApplyingFor);
    formData.append('category', Category);
    formData.append('uae_experience_years', UAEexperience);
    formData.append('skills_tasks', SkillsTasks);
    formData.append('preferred_work_location', PreferredWorkLocation);
    formData.append('expected_salary', ExpectedSalary);
    formData.append('visa_expiry_date', VisaExpiryDate);
    formData.append('other_category', OtherCategory);
    formData.append('languages_spoken', LanguagesSpoken);
    formData.append('preferred_work_type', PreferredWorkType);
    formData.append('currently_employed', CurrentlyEmployed);
    formData.append('additional_notes', AdditionalNotes);
    formData.append('referral_name', ReferralName);
    formData.append('referral_contact',ReferralContact)
    const response = await apiAxios.patch(`/api/candidates/update/${id}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    if (response.status !== 200) {
      throw new Error('Failed to submit candidate data');
    }
    console.log('Candidate updated successfully:', response.data);3
    return response.data;
  } catch (error: any) {
    console.error('Error submitting candidate:', error.response?.message || error.message);
    throw new Error(error.response?.message || 'Submission failed. Please try again.');
  }
};

//DeleteCandidate
export const deleteCandidate = async (Id: number): Promise<boolean> => {
  try {
    const response = await apiAxios.delete(`/api/candidates/delete/${Id}/`);
    if (response.status === 200) {
      return true; // Success
    }
    throw new Error("Failed to delete Candidate");
  } catch (error: any) {
    console.error("Error deleting Candidatre:", error);
    throw new Error(
      error.response?.data?.message || 
      error.message || 
      "Failed to delete Candidate. Please try again."
    );
  }
};

// Get Candidate Names List
export const fetchCandidateNames = async () => {
  try {
    const response = await apiAxios.get('/api/candidates/names/');

    if (response.status !== 200 || !response.data) {
      throw new Error('Failed to fetch candidate names');
    }
    console.log('Candidate Names List:', response.data); // Optional
    return response.data;
  } catch (error: any) {
    console.error('Error fetching candidate names:', error.response?.data?.message || error.message);
    throw new Error(error.response?.data?.message || 'Unable to fetch candidate names.');
  }
};

//ViewCandidateNamw
export const ViewCandidateName = async (
  id: number,
 ) => {
  try {
    const response = await apiAxios.patch(`/api/candidates/update/${id}/`)
    if (response.status !== 200) {
      throw new Error('Failed to submit candidate data');
    }
    console.log('Candidate updated successfully:', response.data);3
    return response.data;
  } catch (error: any) {
    console.error('Error submitting candidate:', error.response?.message || error.message);
    throw new Error(error.response?.message || 'Submission failed. Please try again.');
  }
};
