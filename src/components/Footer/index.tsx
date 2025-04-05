import React from "react";
import Link from "next/link";
import {
  citiesByColumn,
  companyLinks,
  contactLinks,
  legalLinks,
  socialLinks,
} from "@/utils/Footer";
import { InstagramLogo } from "@/assets/Svgs/Icons/Instagram";
import { FacebookLogo } from "@/assets/Svgs/Icons/Facebook";
import { TwitterLogo } from "@/assets/Svgs/Icons/Twitter";
import Input from "../Input";
import { MailboxLogo } from "@/assets/Svgs/Icons/Mailbox";

const Footer: React.FC = () => {
  // Function to render social icon based on platform
  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <InstagramLogo width="20" height="23" color="#bdbdbd" />;
      case "facebook":
        return <FacebookLogo width="20" height="23" color="#bdbdbd" />;
      case "twitter":
        return <TwitterLogo width="20" height="23" color="#bdbdbd" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#212121] text-white py-12 px-4">
      <div className="container mx-auto">
        {/* Top Cities Section */}
        <div className="mb-12">
          <h3 className="text-lg font-bold mb-6">OUR TOP CITIES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-y-4 px-4">
            {citiesByColumn.map((column, colIndex) => (
              <div
                key={`column-${colIndex}`}
                className="flex flex-col items-stretch w-full lg:w-fit" // each box takes ~18% of width with spacing
              >
                {column.map((city, cityIndex) => (
                  <div
                    key={`city-${colIndex}-${cityIndex}`}
                    className="mb-2 truncate"
                  >
                    <Link href={city.url} className="text-white text-sm">
                      {city.name}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Links Section - Custom Grid with 15-15-15-15-40 split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 text-sm ">
          {/* Company Section - 15% */}
          <div className="lg:col-span-2 min-w-0">
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            <ul>
              {companyLinks.map((link, index) => (
                <li
                  key={`company-${index}`}
                  className="mb-4 overflow-hidden text-ellipsis"
                >
                  <Link
                    href={link.url}
                    className="text-white hover:text-white block truncate"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section - 15% */}
          <div className="lg:col-span-2 min-w-0">
            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
            <ul>
              {contactLinks.map((link, index) => (
                <li
                  key={`contact-${index}`}
                  className="mb-4 overflow-hidden text-ellipsis"
                >
                  <Link
                    href={link.url}
                    className="text-white hover:text-white block truncate"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section 1 - 15% */}
          <div className="lg:col-span-2 min-w-0">
            <h3 className="text-lg font-bold mb-4">LEGAL</h3>
            <ul>
              {legalLinks.slice(0, 4).map((link, index) => (
                <li
                  key={`legal1-${index}`}
                  className="mb-4 overflow-hidden text-ellipsis"
                >
                  <Link
                    href={link.url}
                    className="text-white hover:text-white block truncate"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section 2 - 15% */}
          <div className="lg:col-span-2 min-w-0">
            <h3 className="text-lg font-bold mb-4">LEGAL</h3>
            <ul>
              {legalLinks.slice(0, 2).map((link, index) => (
                <li
                  key={`legal2-${index}`}
                  className="mb-4 overflow-hidden text-ellipsis"
                >
                  <Link
                    href={link.url}
                    className="text-white hover:text-white block truncate"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us and Newsletter Section - 40% */}
          <div className="lg:col-span-4 min-w-0 text-[#bdbdbd]">
            <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={`social-${index}`}
                  href={social.url}
                  className=" hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {renderSocialIcon(social.platform)}
                </a>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-4 line-clamp-2">
                Receive exclusive offers <br />
                and discounts in your mailbox
              </h3>
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="relative">
                <MailboxLogo width="17" height="17" color="#bdbdbd" className="absolute top-3 left-3" />
                <Input
                  type="email"
                  placeholder="Enter Email"
                  className="w-65 h-10 border-none 
                hover:border-transparent focus:border-[#5C4511] 
                focus:outline-none focus:ring-4 focus:ring-[#5C4511] 
                transition-colors duration-200 rounded-xl
               placeholder-[#bdbdbd] placeholder:translate-x-2 pl-10
               bg-[#616161] "
                />
                </div>

                <button className="w-35 px-6 py-2 bg-[#ffb30f] text-white font-bold rounded whitespace-nowrap hover:text-black ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Credits Section */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-4 md:mb-0 text-center md:text-left">
            All rights Reserved © Your Company, 2021
          </div>
          <div className="text-white flex items-center">
            Made with <span className="text-[#ffb30f] mx-1">❤</span> by ThemeWagon
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
