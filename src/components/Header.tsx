// components/Header/Header.tsx
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ArmsLogo from "../assets/images/armslogo.jpg"
import Profile from "../assets/icons/Profile.png"
import Settings from '../assets/icons/Settings.jpg'
import NotificationBell from "../assets/icons/NotificationBell.jpg"
//import { useState } from 'react';

export const Header = () => {
  // const [profileHover, setProfileHover] = useState(false);
  // const [moreHover, setMoreHover] = useState(false);

  const navigate = useNavigate();

  // const handleMouseEnter = () => {
  //   setProfileHover(true);
  // };

  // const handleMouseLeave = () => {
  //   setProfileHover(false);
  // }

  // const handleMoreMouseEnter = () => {
  //   setMoreHover(true);
  // };

  // const handleMoreMouseLeave = () => {
  //   setMoreHover(false);
  // };

  const handleLogout = async () => {
    // dispatch(logout()); // Logout and clear token
    navigate("/");
    sessionStorage.clear();

    // // Purge persisted state (this will remove Redux Persist data, i.e., localStorage data)
    // await persistor.purge();  // This clears the persisted Redux state from localStorage
  }


  return (
    <header>
      <div className="backdrop-blur-lg bg-opacity-100 shadow-md px-10 py-5 pb-0 max-2xl:pb-5 max-xl:pb-5">
        <div className="flex justify-between items-center max-2xl:flex-wrap max-2xl:gap-x-12 max-2xl:gap-y-5 max-2xl:justify-between">
          <div className="flex justify-center items-center space-x-3 max-2xl:order-1">
            <Link to="/Dashboard">
              <img src={ArmsLogo} alt="Logo" className="h-15 pb-4" />
            </Link>
          </div>
          <div className=" max-2xl:order-3 max-2xl:mx-auto">
            <nav className="">
              <ul className="flex items-center space-x-8 max-xl:space-x-6">
                <NavLink
                  to="/Dashboard"
                  className="active-nav max-2xl:before:!-bottom-8"
                  aria-current="page"
                >
                  <li className="text-md max-xl:text-sm">Dashboard</li>
                </NavLink>
                <NavLink
                  to="/Candidate"
                  className="active-nav max-2xl:before:!-bottom-5"
                  aria-current="page"
                >
                  <li className="text-md max-xl:text-sm">Candidate(New/Own Visa)</li>
                </NavLink>
                {/* <li>
                <NavLink to="/UAEOwnFreeLauncerVisa" className="active-nav text-black font-bold">UAE Own/Freelancer Visa</NavLink>
              </li> */}
                  <NavLink
                  to="/AgentsSupplier"
                  className="active-nav max-2xl:before:!-bottom-5"
                  aria-current="page"
                >
                  <li className="text-md max-xl:text-sm">Agents/Supplier</li>
                </NavLink>

                <NavLink
                  to="/ManpowerSupply"
                  className="active-nav max-2xl:before:!-bottom-5"
                  aria-current="page"
                >
                  <li className="text-md max-xl:text-sm">Manpower Supply</li>
                </NavLink>

                <NavLink
                  to="/OverseasRecruitment"
                  className="active-nav max-2xl:before:!-bottom-5"
                  aria-current="page"
                >
                  <li className="text-md max-xl:text-sm">Overseas Recruitment</li>
                </NavLink>

                <NavLink
                  to="/ClientEnquiry"
                  className="active-nav max-2xl:before:!-bottom-5"
                  aria-current="page"
                >
                  <li className="text-md max-xl:text-sm">Client Enquiry</li>
                </NavLink>

                <NavLink
                  to="/Reports"
                  className="active-nav max-2xl:before:!-bottom-5"
                  aria-current="page"
                >
                  <li className="text-md max-xl:text-sm">Reports</li>
                </NavLink>
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-5 2xl:space-x-5 max-2xl:order-2">
            <button className="text-gray-700">
              <img
                src={Settings}
                alt="Settingsicon"
                className="w-5 h-5 object-cover"
              />
            </button>
            <button className="text-gray-700">
              <img
                src={NotificationBell}
                alt="notigication"
                className="w-4 h-4 object-cover"
              />
            </button>
            <div className="relative group cursor-pointer flex items-center justify-center">
              {/* Profile Button */}
              <div className="rounded-full flex items-center justify-center px-2 py-1">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-8 h-8 object-cover"
                />
                <span className="text-armsBlack font-bold ml-2">shana</span>
              </div>

              {/* Dropdown on Hover */}
              <div className="absolute right-0 mt-38 w-40 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="block px-4 py-2 text-sm text-armsBlack hover:bg-gray-100">My Profile</div>
                <div className="block px-4 py-2 text-sm text-armsBlack hover:bg-gray-100">Password Reset</div>
                <div
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-armsBlack hover:bg-gray-100">Sign Out</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}


