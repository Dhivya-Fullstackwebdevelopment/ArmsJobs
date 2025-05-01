// components/Dashboard/Dashboard.tsx
//import {Header} from "../components/Header"
import { ClientEnquiryTable } from "./ClientEnquiry/ClientEnquiryTable";

export const ClientEnquiry=()=>{
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Header /> */}
     <ClientEnquiryTable/>
    </div>
  );
}