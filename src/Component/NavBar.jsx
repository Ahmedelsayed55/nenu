import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png";
const NavBar = () => {
  return (
    <div className='container mx-auto'>
        <header className="flex justify-between items-center py-4 rounded-b-2xl shadow-yellow-700 shadow-md md:px-5" >
          <nav className="flex gap-1 md:gap-3">
            <Link className='text-[14px] md:text-2xl p-3 border-b-0 transition  hover:border-b-2 border-yellow-700' to="/">الرئيسية</Link>
            <Link className='text-[14px] md:text-2xl p-3 border-b-0 transition  hover:border-b-2 border-yellow-700' to="/contact">تواصل معنا</Link>
            <Link className='text-[14px] md:text-2xl p-3 border-b-0 transition  hover:border-b-2 border-yellow-700' to="/about">المزيد عنا </Link>
          </nav>
          <img className="w-15 h-12 md:w-18 md:h-15" src={logo} alt="Logo" />
        </header>
    </div>
  )
}

export default NavBar
