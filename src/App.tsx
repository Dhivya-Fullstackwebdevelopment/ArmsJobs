import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login/Login'
import "./index.css"
import { Dashboard } from './pages/Dashboard';
import { Candidate } from './pages/Candidate'
import { AgentsSupplier } from './pages/AgentsSupplier';
import { ManpowerSupply } from './pages/ManPowerSupply';
import { OverseasRecruitment } from './pages/OverseasRecruitment';
import { ClientEnquiry } from './pages/ClientEnquiry';
import { Reports } from './pages/Reports';
import { CandidateView } from './pages/Candidate/CandidateView';
import { LoginLayout } from './layout/LoginLayout';
//import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/Context/AuthContext';
import { ClientEnquiryView } from './pages/ClientEnquiry/ClientEnquiryView';
import { OverSeasRecruitmentView } from './pages/OverSeasRecruitment/OverSeasRecruitmentView';
import { AgentSupplyView } from './pages/AgentsSupplier/AgentSupplierView';
import { ManPowerSupplyView } from './pages/ManPowerSupply/ManPowerSupplyView';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<ProtectedRoute><LoginLayout /></ProtectedRoute>}> */}
          <Route path="/" element={<LoginLayout />}>
          {/* <Route path="/" element={<LoginLayout />}> */}
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Candidate" element={<Candidate />} />
            <Route path="/AgentsSupplier" element={<AgentsSupplier />} />
            <Route path="/ManpowerSupply" element={<ManpowerSupply />} />
            <Route path="/OverseasRecruitment" element={<OverseasRecruitment />} />
            <Route path="/ClientEnquiry" element={<ClientEnquiry />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Candidate/:id" element={<CandidateView />} />
            <Route path="/ClientEnquiry/:id" element={<ClientEnquiryView />} />
            <Route path="/OverSeasRecruitment/:id" element={<OverSeasRecruitmentView />} />
            <Route path="/ManPowerSupplyView/:id" element={<ManPowerSupplyView />} />
            <Route path="/AgentSupplyView/:id" element={<AgentSupplyView />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
