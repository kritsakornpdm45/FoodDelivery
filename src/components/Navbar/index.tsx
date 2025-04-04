"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/assets/Svgs/logo.svg";
import locatelogo from "@/assets/Svgs/map-pin.svg";
import searchlogo from "@/assets/Svgs/search.svg";
import profilelogo from "@/assets/Svgs/user-round.svg";
import Input from "../Input";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full h-16 bg-[#fcfcfc] shadow-md z-50">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="FoodWagon Icon"
              className="h-8 w-auto"
            />
          </Link>
          <span className="font-bold text-[25px] ml-2 bg-gradient-to-r from-[#f54c03] to-[#f6a912] inline-block text-transparent bg-clip-text">
            foodwaGon
          </span>
        </div>

        {/* Location Section - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 whitespace-nowrap text-sm">
          <p className="font-semibold ">Deliver to:</p>
          <Image src={locatelogo} alt="Locate icon" className="w-5 h-5" />
          <span>Current Location</span>
          <span className="font-semibold">Pongyangkok Hangchat, Lampang</span>
        </div>

        {/* Action Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center ">
          <div className="relative w-60">
            {/* Search Icon */}
            <Image
              src={searchlogo}
              alt="Search icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />

            {/* Search Input */}
            <Input
              type="search"
              placeholder="Search Food"
              className="w-full h-9 border-none 
              hover:border-transparent focus:border-[#feefd0] 
              focus:outline-none focus:ring-5 focus:ring-[#feefd0] 
              transition-colors duration-200 rounded-md
               text-gray-500 placeholder:translate-x-2 pl-10
               bg-[#fcfcfc]"
            />
          </div>
          <div className="h-full border-10 border-[#f9f4e8]">
            <div className="flex items-center gap-2 w-30 h-10  px-2 ">
            <Image
              src={profilelogo}
              alt="User icon"
              width={20}
              height={20}
              className="w-5 h-5 mb-1"
            />
            <button
              type="button"
              className="font-bold font-sans text-[#fcb315]  "
            >
              Login
            </button>
          </div>
          </div>
          
        </div>

        {/* Mobile menu button - Only shown on mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-500 hover:text-orange-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {/* Mobile Search */}
          <div className="px-4 py-3">
            <div className="relative">
              <Image
                src={searchlogo}
                alt="Search icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              />
              <Input
                type="search"
                placeholder="Search Food"
                className="w-full h-10 border-none 
                hover:border-transparent focus:border-[#feefd0] 
                focus:outline-none focus:ring-2 focus:ring-[#feefd0] 
                transition-colors duration-200 rounded-md
                text-gray-500 placeholder:translate-x-2 pl-10"
              />
            </div>
          </div>
          
          {/* Mobile Location */}
          <div className="px-4 py-2 flex items-center gap-2 border-b border-gray-100">
            <p className="text-sm font-medium">Deliver to:</p>
            <Image src={locatelogo} alt="Locate icon" className="w-4 h-4" />
            <span className="text-sm font-semibold">Pongyangkok Hangchat, Lampang</span>
          </div>
          
          {/* Mobile Menu Links */}
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-orange-500 font-medium"
            >
              Home
            </Link>
            <Link
              href="/restaurants"
              className="block px-3 py-2 text-gray-600 font-medium hover:text-orange-500"
            >
              Restaurants
            </Link>
            <Link
              href="/menu"
              className="block px-3 py-2 text-gray-600 font-medium hover:text-orange-500"
            >
              Menu
            </Link>
            <Link
              href="/deals"
              className="block px-3 py-2 text-gray-600 font-medium hover:text-orange-500"
            >
              Deals
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-600 font-medium hover:text-orange-500"
            >
              Contact
            </Link>
            
            {/* Mobile Action Buttons */}
            <div className="flex items-center justify-between px-3 py-3 mt-2 border-t border-gray-100">
              <Link
                href="/login"
                className="text-gray-600 hover:text-orange-500 flex items-center"
              >
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Login
              </Link>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 flex items-center">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Cart (0)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;