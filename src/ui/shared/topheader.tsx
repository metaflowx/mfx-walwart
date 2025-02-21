"use client";

import Logo from "@/components/ui/logo";
import MarqueHeader from "@/components/marketing/MarqueHeader";
import Wrapper from "@/components/global/wrapper";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import MobileMenu from "@/components/marketing/mobileFooter";

declare global {
  interface Window {
    googleTranslateLoaded?: boolean;
    googleTranslateElementInit?: () => void;
  }
}

const Topheader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // useEffect(() => {
  //   const addGoogleTranslate = () => {
  //     if (typeof window !== "undefined" && !window.googleTranslateLoaded) {
  //       window.googleTranslateElementInit = () => {
  //         new window.google.translate.TranslateElement(
  //           { pageLanguage: "en", autoDisplay: false },
  //           "google_translate_element"
  //         );
  //       };

  //       const script = document.createElement("script");
  //       script.src =
  //         "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //       script.async = true;
  //       document.body.appendChild(script);

  //       window.googleTranslateLoaded = true; // Ensure it loads only once
  //     }
  //   };

  //   addGoogleTranslate();
  // }, []);

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    setTimeout(() => {
      const selectElement = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = lang;
        selectElement.dispatchEvent(new Event("change"));
      }
    }, 1000); // Delay ensures dropdown is ready
  };

  return (
    <>
      <header className="sticky top-0 w-full bg-transparent backdrop-blur-[10px] z-50">
        <MarqueHeader />
        <Wrapper className="h-full p-2">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-2 sm:mt-1 mt-0">
              <Logo />
            </div>

            <div className=" xl:flex items-center gap-4 " >
              <ul className="hidden xl:flex items-center gap-8">
                {NAV_LINKS.map((link, index) => (
                  <li
                    style={{ fontFamily: "Prompt" }}
                    key={index}
                    className="text-[14px] text-black xl:text-[16px] object-contain font-[400]"
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2">
                <img
                  src="/images/home/notification.png"
                  className="w-[40px] h-[40px] "
                />

                <img
                  src="/images/auth/help.png"
                  className="w-[40px] h-[40px]"
                  
                />

                <div className="relative ">
                
                  <select
                    value={selectedLanguage}
                    onChange={(e) => changeLanguage(e.target.value)}
                    className="bg-[#0071CE] flex justify-center items-center text-white text-[15px] font-[600] border-none rounded-[8px] max-w-fit h-[40px] cursor-pointer appearance-none pl-4 pr-8"
                  >
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                    {/* other options */}
                    <option value="zh">Chinese</option>
                  </select>
                  <img
                    src="/images/auth/arrow.png"
                    alt="Language Selector"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[15px] object-contain"
                  />
                </div>
              </div>
            </div>

            {/* <div className="xl:hidden">
              <MobileMenu />
            </div> */}
            
          </div>
        </Wrapper>
      </header>
    </>
  );
};

export default Topheader;
