// components/Dashboard/Dashboard.tsx
//import {Header} from "../components/Header"
import { ManPowerSupplyTable } from "./ManPowerSupply/ManPowerSupplyTable";

export const ManpowerSupply = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Header /> */}
      <ManPowerSupplyTable/>
    </div>
  );
}
