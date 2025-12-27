import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFB] flex flex-center flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8">
        <h1 className="text-[12rem] font-black text-gray-100 leading-none">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <i className="fa-solid fa-ghost text-7xl text-[#38b29b] animate-bounce"></i>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Oops! Page not found.</h2>
      <p className="text-gray-400 max-w-md mb-10 font-medium">
        It looks like the note you are looking for has been moved or deleted. Let's get you back on track!
      </p>
      
      <Link 
        to="/" 
        className="bg-[#38b29b] text-white px-10 py-4 rounded-[2rem] font-bold shadow-xl shadow-[#38b29b]/30 hover:scale-105 active:scale-95 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}