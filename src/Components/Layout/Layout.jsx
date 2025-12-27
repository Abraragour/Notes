import React, { useEffect } from 'react'
import Style from './Layout.module.css'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';
export default function Layout() {
    const [state, setstate] = useState(0);
    useEffect(() => {}, []);
  return (
    <div>
      <Navbar/>
      <div className="container  py-16 bg-[#f0f2f5]  mx-auto">
              <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  )
}
