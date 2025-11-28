import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="mt-10 bg-base-100 flex items-center justify-center rounded-2xl">
          <div className="flex flex-col items-center gap-5">
            <img className="w-60" src={logo} alt="Logo" />
            <h1 className="text-3xl font-bold -mt-5">
              حلواني ريتاج-Retaj pastry
            </h1>
            <Link className="btn btn-warning p-5 text-2xl" to="/menu">
              قائمة الاسعار
            </Link>
            <Link className="btn btn-warning p-5 text-2xl" to="/contact">
              للتواصل او الشكوي
            </Link>
            <div className="flex gap-5">
             
              <a href="https://www.facebook.com/retajpastry" target="_blank">
                <FaFacebook className="text-4xl text-yellow-500" />
              </a>
              <a
                href="https://www.instagram.com/retajpastry
"
                target="_blank"
              >
                <FaInstagram className="text-4xl text-yellow-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
