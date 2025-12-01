import React, { useEffect, useState } from "react";
import Hero from "../Component/MenuComponent/Hero";
import Cake26 from "../Component/MenuComponent/WesternWeets/Cake26";
import Cake20 from "../Component/MenuComponent/WesternWeets/Cake20";
import NavItem from "../Component/MenuComponent/NavItem";
import { Cake18 } from "../Component/MenuComponent/WesternWeets/Cake18";
import { AssortedCakes } from "../Component/MenuComponent/WesternWeets/AssortedCakes";
import { Gato } from "../Component/MenuComponent/WesternWeets/Gato";
import { IoArrowUp } from "react-icons/io5";
import Chocolate from "../Component/MenuComponent/Chocolate/Chocolate";
import { CakeLayers } from "../Component/MenuComponent/WesternWeets/CakeLayers";
const Menu = () => {
  let idCake26 = "idCake26";
  let idCake20 = "idCake20";
  let idCake18 = "idCake18";
  let idMixed = "idMixed";
  let idGato = "idGato";
  let idChocolate = "idChocolate";
  let idLayers = "idLayers";


    const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Hero />

      <NavItem
        id26={idCake26}
        id20={idCake20}
        id18={idCake18}
        idMixed={idMixed}
        idGato={idGato}
        idChocolate={idChocolate}
        idLayers={idLayers}
      />

      <section id={idCake26} className=" max-w-[1920px] mx-auto px-1 py-7 md:px-5 md:py-12 scroll-mt-24">
        <Cake26 />
      </section>

      <section id={idCake20} className=" max-w-[1920px] mx-auto px-1 py-7 md:px-5 md:py-12 scroll-mt-24">
        <Cake20 />
      </section>

      <section id={idCake18} className=" max-w-[1920px] mx-auto px-1 py-7 md:px-5 md:py-12 scroll-mt-24">
        <Cake18 />
      </section>

      <section id={idMixed} className=" max-w-[1920px] mx-auto px-1 py-7 md:px-5 md:py-12 scroll-mt-24">
        <AssortedCakes />
      </section>
      <section id={idLayers} className=" max-w-[1920px] mx-auto px-1 py-7 md:px-5 md:py-12 scroll-mt-24">
        <CakeLayers />
      </section>
      <section id={idGato} className=" max-w-[1920px] mx-auto px-1 py-7 md:px-5 md:py-12 scroll-mt-24">
        <Gato />
      </section>
      <section id={idChocolate} className=" max-w-[1920px] mx-auto px-1 py-7 md:px-5 md:py-12 scroll-mt-24">
        <Chocolate />
      </section>




      {/* Button Scroll */}
      {/* Button Scroll */}
      {/* Button Scroll */}
      {/* Button Scroll */}
       {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 text-2xl md:text-3xl bg-cyan-600 text-white hover:bg-cyan-700 cursor-pointer p-3 rounded-full shadow-xl transition z-50"
        >
           <IoArrowUp />
        </button>
      )}
    </div>
  );
};

export default Menu;
