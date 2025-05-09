export interface Candidate {
    id: string;
    name: string;
    candidateId: string;
    isActive: boolean;
    mobileNumber: string;
    whatsappNumber: string;
    emailId: string;
    nationality: string;
    currentLocation: string;
    visaType: string;
    availabilityToJoinDate: string;
    availabilityToJoinPeriod: string;
    positionApplyingFor: string;
    category: string;
    otherCategory: string;
    yearsOfUAEExperience: string;
    skillsAndTasks: string;
    preferredWorkLocation: string;
    expectedSalary: string;
    documents: {
        cv: { name: string; size: string };
        passport: { name: string; size: string };
        insurance: { name: string; size: string };
        visa: { name: string; size: string };
    };
}

export interface CandidateRemark {
    id: string;
    userId: string;
    userName: string;
    timestamp: string;
    content: string;
} 

// Interface for individual candidate name
export interface CandidateName {
    id: number;  // Note: This is number in the API response
    full_name: string;
}