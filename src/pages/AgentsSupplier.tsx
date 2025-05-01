// components/Dashboard/Dashboard.tsx
import {  AgentSupplierTable } from "./AgentsSupplier/AgentsSupplierTable";

export const AgentsSupplier=()=>{
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Header /> */}
      <AgentSupplierTable/>
    </div>
  );
}