import React from "react";
import { IFifthprops } from "@/interfaces/components/Fifthblog/index";
import Image from "next/image";
import { PricetagLogo } from "@/assets/Svgs/Icons/Pricetag";
import { ClockProvideLogo } from "@/assets/Svgs/Icons/ClockProvide";
import { StarLogo } from "@/assets/Svgs/Icons/Star";

const Featcard = (props: IFifthprops) => {
  const { image, title, location, status, discount, starpoint, logo, id } =
    props;
  return (
    <div className=" flex flex-col  overflow-hidden gap-4 ">
      {/* Image Container */}
      <div className="relative w-[365px] h-[300px]  ">
        <Image
          key={id}
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl "
        />
        <div className="absolute top-4 left-4">
          <div className=" flex flex-row gap-2">
            <div className=" flex flex-row items-center gap-2 bg-[#f27229] rounded-md h-9 px-2 py-3 text-white text-sm font-semibold ">
              <PricetagLogo width="16" height="16" color="white" />
              <p>{discount}</p>
            </div>
            <div className=" flex flex-row items-center gap-2 bg-[#ffb30f] rounded-md h-9 px-2 py-3 text-white text-md font-semibold">
              <ClockProvideLogo width="16" height="16" color="white" />
              <p>Fast</p>
            </div>
          </div>
        </div>
      </div>

      {/* second blog */}
      <div className="flex flex-row items-center gap-2">
        <div>
          <Image src={logo} alt="logo" width={64} height={64} />
        </div>
        <div className=" flex flex-col">
          <p className="font-bold">{location}</p>
          <div className="flex items-center px-1 py-1 gap-2 text-sm text-[#ffb30f]">
            <StarLogo width="16" height="16" color="#ffb30f" />
            <p>{starpoint}</p>
          </div>
        </div>
      </div>

      {/* third blog */}
      <div className="flex items-center shrink-0 font-bold text-md">
        <div
          className={`${
            status
              ? "bg-[#ecf5e2] text-[#7fb34e]"
              : "bg-[#fceade] text-[#f27229]"
          } px-3 py-1 rounded-md `}
        >
          <p>{status ? "Opens Now" : "Open Tomorrow"}</p>
        </div>
      </div>
    </div>
  );
};

export default Featcard;
