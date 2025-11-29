import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
const Home = () => {
  return (
    <div className="bg-gray-200 h-dvh flex items-center justify-center ">
      <div className="container mx-auto ">
        <div className=" flex items-center justify-center rounded-2xl">
          <div className="flex flex-col items-center gap-5">
            <img className="w-60" src={logo} alt="Logo" />
            <h1 className="text-3xl font-bold text-center mb-3">
              حلواني ريتاج-Retaj pastry
            </h1>
            <Link className="btn btn-warning p-5 text-2xl" to="/menu">
              قائمة الاسعار
            </Link>
            <Link className="btn btn-warning p-5 text-2xl" to="/contact">
              للتواصل معنا
            </Link>
            <div className="flex gap-5 mt-5">
              <a href="https://www.facebook.com/retajpastry" target="_blank" className=" hover:scale-125 transition-transform duration-300">
                <FaFacebook className="text-4xl text-yellow-500" />
              </a>
              <a
                href="https://www.instagram.com/retajpastry"
                target="_blank"
                className=" hover:scale-125 transition-transform duration-300"
              >
                <FaInstagram className="text-4xl text-yellow-500" />
              </a>
              <a
                href="https://wa.me/201090222129?text=Hello"               
                target="_blank"
                rel="noopener noreferrer"
className=" hover:scale-125 transition-transform duration-300"
              >
                <FaWhatsapp className="text-4xl text-yellow-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
