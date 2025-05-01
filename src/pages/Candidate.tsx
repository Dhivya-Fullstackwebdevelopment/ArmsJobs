// components/Dashboard/Dashboard.tsx
import { CandidateTable } from "../pages/Candidate/Candidatetable"

export const Candidate = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* <Header /> */}
            <CandidateTable />
        </div>
    );
}