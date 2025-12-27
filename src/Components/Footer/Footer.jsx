import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#38b29b] rounded-lg flex items-center justify-center shadow-sm">
            <i className="fa-solid fa-feather-pointed text-white text-xs"></i>
          </div>
          <span className="font-bold text-gray-800">Notes App</span>
        </div>
        
        <p className="text-gray-400 text-sm font-medium">
          © {new Date().getFullYear()} Designed with <i className="fa-solid fa-heart text-red-400 mx-1"></i> for better productivity.
        </p>

        <div className="flex gap-4 text-gray-400 text-lg">
          <i className="fa-brands fa-github hover:text-[#38b29b] cursor-pointer transition-colors"></i>
          <i className="fa-brands fa-linkedin hover:text-[#38b29b] cursor-pointer transition-colors"></i>
        </div>
      </div>
    </footer>
  );
}