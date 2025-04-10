import React from "react";
import Cardplay from "../../Cardplay";
import Image from "next/image";
import heroHeader from "@/assets/Images/hero-header.png";

export default function Firstblog() {
  return (
    <div className="w-full max-h-max mx-auto px-4 sm:px-6 pt-8 sm:pt-16 bg-[#ffb30f]">
      <div className="container mx-auto px-4 h-auto sm:h-[625px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-center py-8 sm:py-0 order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-white">
              Are you starving?
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10 text-[#616161]">
              Within a few clicks, find meals that <br className="hidden sm:block" />
              are accessible near you
            </h2>

            <Cardplay />
          </div>

          {/* Right Column - Image Container */}
          <div className="relative w-full h-64 sm:h-full sm:flex-1 overflow-hidden rounded-lg group order-1 md:order-2">
            <Image
              src={heroHeader}
              alt="Heroheader Food"
              width={645}
              height={645}
              className="object-cover transition-transform duration-600 
              sm:translate-y-[13%] 
              group-hover:sm:translate-y-[5%] "
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}