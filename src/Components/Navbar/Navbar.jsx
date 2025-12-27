import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  
  const userToken = localStorage.getItem('userToken');

  
  function handleLogOut() {
    localStorage.removeItem('userToken'); 
    localStorage.removeItem('myId');      
    navigate('/login');                 
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/40 backdrop-blur-xl shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-[#38b29b] to-[#248d7a] rounded-xl flex items-center justify-center shadow-lg shadow-[#38b29b]/20 
              group-hover:scale-110 group-hover:rotate-[12deg] transition-all duration-500 ease-in-out">
            <i className="fa-solid fa-feather-pointed text-white text-lg"></i>
          </div>
          <h3 className="text-[#38b29b] font-bold text-xl">
            Notes
          </h3>
        </div>

        <ul className="flex gap-6 items-center">
          
          {!userToken ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  className="text-[#38b29b] font-medium hover:text-[#2f9683] transition"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signUp"
                  className="text-[#38b29b] font-medium hover:text-[#2f9683] transition"
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <button
              onClick={handleLogOut}
              className="group flex items-center gap-2 bg-red-50 text-red-500 font-bold px-5 py-2.5 rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-red-200 active:scale-95"
            >
              <span>Logout</span>
              <i className="fa-solid fa-right-from-bracket text-sm group-hover:translate-x-1 transition-transform"></i>
            </button>
            </li>
          )}
          
        </ul>
      </div>
    </nav>
  );
}