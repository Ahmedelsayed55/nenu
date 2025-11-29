import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const NavItem = ({ id26, id20, id18, idMixed,idLux,idCarton }) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);
const sizes = [
  { id: id26, label: "تورته مقاس (26)" },
  { id: id20, label: "تورته مقاس (20)" },
  { id: id18, label: "تورته مقاس (18)" },
  { id: idMixed, label: "تورت مقاسات متنوعة" },
  { id: idLux, label: "جاتوه لوكس" },
  { id: idCarton, label: "تورت كارتينج" }
];
  return (
    <div className="sticky top-0 container mx-auto p-2 bg-amber-900 rounded-b-2xl my-3">
   <Swiper
  spaceBetween={10}
  slidesPerView="auto"
  freeMode={true}
>
  {sizes.map((item) => (
    <SwiperSlide key={item.id} className="!w-auto py-1">
      <a
        href={`#${item.id}`}
        className={`px-3 py-1 rounded-md transition whitespace-nowrap ${
          active === item.id
            ? "bg-yellow-300 text-yellow-800"
            : "text-gray-300"
        }`}
      >
        {item.label}
      </a>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
};

export default NavItem;
