import React from "react";

const Footer = () => {
  return (
    <div className=" flex justify-center items-center py-20 bg-gray-200">
      <h2 className="text-cyan-900 text-2xl text-center flex flex-row-reverse items-center gap-1">
        {" "}
        :Created by Ahmed Elsayed © 2025 Phone & Whatsapp
        <a
          className="flex text-[20px] mb-3 md:mb-0 md:text-[24px] font-bold gap-1 items-center transition hover:text-cyan-800 hover:scale-102"
          href="https://wa.me/201016223981?"
          target="_blank"
          rel="noopener noreferrer"
        >
          01016223981
        </a>
      </h2>
    </div>
  );
};

export default Footer;
