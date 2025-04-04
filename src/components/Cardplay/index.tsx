"use client";

import React, { useState } from "react";
import { ShopBagLogo } from "@/assets/Svgs/Icons/shopbag";
import { MotorcycleLogo } from "@/assets/Svgs/Icons/motorcycle";
import Input from "../Input";
import { LocateLogo } from "@/assets/Svgs/Icons/locate";

export default function Cardplay() {
  const [selectedButton, setSelectedButton] = useState("delivery");
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

  const handleMouseEnter = (button: string) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getSvgColor = (buttonType: string) => {
    if (selectedButton === buttonType) {
      return "#f27229"; // Orange when selected
    }
    return hoveredButton === buttonType ? "#000000" : "#757575"; // Black on hover, gray by default
  };

  return (
    <div>
      <div className="bg-white w-[530px] rounded-lg p-4 shadow-md">
        {/* Delivery/Pickup Toggle */}
        <div className="flex mb-4">
          <button
            onClick={() => handleButtonClick("delivery")}
            onMouseEnter={() => handleMouseEnter("delivery")}
            onMouseLeave={handleMouseLeave}
            className={`w-[115px] h-[42px] rounded-t-md ${
              selectedButton === "delivery"
                ? "text-[#f27229] bg-[#fde9de]"
                : "text-[#757575] hover:border hover:border-[#f5f5f5] hover:text-black"
            } flex items-center justify-center gap-2 group`}
          >
            <MotorcycleLogo width="19" height="19" color={getSvgColor("delivery")} />
            Delivery
          </button>
          <button
            onClick={() => handleButtonClick("pickup")}
            onMouseEnter={() => handleMouseEnter("pickup")}
            onMouseLeave={handleMouseLeave}
            className={`w-[115px] h-[42px] rounded-t-md ${
              selectedButton === "pickup"
                ? "text-[#f27229] bg-[#fde9de]"
                : "text-[#757575] hover:border hover:border-[#f5f5f5] hover:text-black"
            } flex items-center justify-center gap-2 group`}
          >
            <ShopBagLogo width="17" height="17" color={getSvgColor("pickup")} />
            Pickup
          </button>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-[#e0e0e0] mb-4"></div>

        {/* Search Input with Icon */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <LocateLogo color="#f27229" width="15" height="15" />
            </div>
            <Input
              type="search"
              placeholder="Enter Your Address"
              className="w-full h-9 pl-10 pr-4 border-none bg-[#f5f5f5] 
                        focus:ring-5 focus:ring-[#feefd0] focus:outline-none
                        rounded-sm text-gray-500 transition-colors"
            />
          </div>
          <button className="bg-[#f27229] text-sm font-semibold text-white px-4 py-3 rounded-sm hover:bg-[#c15b20] transition-colors">
            Find Food
          </button>
        </div>
      </div>
    </div>
  );
}
