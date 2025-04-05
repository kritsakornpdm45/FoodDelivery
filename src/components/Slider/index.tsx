"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { popitems } from "@/utils/Fourthblog";
import { IFourthprops } from "@/interfaces/components/Fourthblog";
import Image from "next/image";
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper";

// Import Swiper styles correctly
import "swiper/css"; // Import Swiper core styles
import "swiper/css/navigation"; // Import navigation module styles

const SimpleSlider: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );

  // Function to handle next slide
  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  // Function to handle previous slide
  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <div className=" container mx-auto p-5">
      <h2 className="text-center text-4xl font-bold mb-15 text-gray-900">
        Popular items
      </h2>

      <div className="relative px-12 ">
        <Swiper
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          speed={600}
          onSwiper={(swiper) => {
            setSwiperInstance(swiper);
            console.log("Swiper instance initialized", swiper);
          }}
          navigation={false} // Disable default navigation
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="custom-swiper"
        >
          {popitems.map((item: IFourthprops) => (
            <SwiperSlide key={item.id}>
              <div className="h-full w-full  bg-white   ">
                <div className="relative  h-69 w-69 overflow-auto gap-2 ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
                <div className="mt-2">
                  <h5 className="text-lg font-bold text-gray-900 truncate mb-1">
                    {item.title}
                  </h5>
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-4 h-4 text-yellow-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                    </svg>
                    <span className="text-yellow-500 text-sm">
                      {item.location}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    ${item.price.toFixed(2)}
                  </p>
                  <button
                    className="w-full h-11 bg-[#F17228] text-white py-2 rounded-md hover:bg-[#c15b20] transition text-sm font-semibold"
                    onClick={() => alert(`Ordering ${item.title}`)}
                  >
                    Order now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next button with inline SVG instead of component */}
        <button
          onClick={goNext}
          className="absolute top-1/2 right-0 z-20 transform -translate-y-1/2 bg-[#ffba26] rounded-full p-2 shadow-lg cursor-pointer border border-yellow-200 w-10 h-10 flex items-center justify-center "
        >
          <div className="h-9 w-9 absolute left-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </button>

        {/* Previous button with inline SVG instead of component */}
        <button
          onClick={goPrev}
          className="absolute top-1/2 left-0 z-20 transform -translate-y-1/2 bg-[#ffba26] rounded-full p-2 shadow-lg cursor-pointer border border-yellow-200 w-10 h-10 flex items-center justify-center "
        >
          <div className="h-9 w-9 absolute left-[-1] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SimpleSlider;
