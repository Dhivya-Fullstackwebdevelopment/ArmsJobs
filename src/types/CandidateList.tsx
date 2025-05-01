export interface Document {
    name: string;
    size: string;
  }
  
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
      cv: Document;
      passport: Document;
      insurance: Document;
      visa: Document;
    };
  }
  
  export interface CandidateRemark {
    id: string;
    userId: string;
    userName: string;
    timestamp: string;
    content: string;
  }
  
  export interface JobHistory {
    jobId: string;
    companyName: string;
    positionApplyingFor: string;
    remarks: string;
    status: string;
    dateTime: string;
  }