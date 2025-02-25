"use client";
import Wrapper from "../global/wrapper";
import { useRouter } from "next/navigation";
import Logo from "../ui/logo";
import MarqueHeader from "./MarqueHeader";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    googleTranslateLoaded?: boolean;
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (options: object, elementId: string) => void;
      };
    };
  }
}
const Navbar = () => {
  const router = useRouter();


  const [selectedLanguage, setSelectedLanguage] = useState("en");
  useEffect(() => {
    const addGoogleTranslate = () => {
      if (typeof window !== "undefined" && !window.googleTranslateLoaded) {
        window.googleTranslateElementInit = () => {
          if (window.google && window.google.translate) {
            new window.google.translate.TranslateElement(
              { pageLanguage: "en", autoDisplay: false },
              "google_translate_element"
            );
          }
        };

        const script = document.createElement("script");
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateLoaded = true; // Ensure it loads only once
      }
    };

    addGoogleTranslate();
  }, []);

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
    <header className="sticky top-0 w-full  bg-transparent backdrop-blur-[10px] z-50">
       <MarqueHeader />
       <div id="google_translate_element"></div>
      <Wrapper className="h-full pt-2">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center sm:mt-1 mt-0">
          <Logo />
          </div>

          <div className="hidden xl:flex items-center gap-4">
          
           
          </div>
          <div className="flex items-center">
        
           <img src="/images/auth/help.png" className="w-[49px] h-[49px]" />

         

           <div className="language-selector relative pl-2 ">
                <select
                  value={selectedLanguage}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-[#0071CE] flex justify-center items-center text-white text-[16px] font-[600] border-none rounded-[12px] max-w-fit h-[49px] cursor-pointer appearance-none pl-8 pr-8"
                >
                  <option value="en">English</option>
                  <option value="ar">Arabic</option>

                  <option value="cs">Czech</option>
                  <option value="nl">Dutch</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="hu">Hungarian</option>
                  <option value="id">Indonesian</option>
                  <option value="it">Italian</option>
                  <option value="ja">Japanese</option>
                  <option value="ko">Korean</option>
                  <option value="pl">Polish</option>
                  <option value="pt">Portuguese</option>
                  <option value="ro">Romanian</option>
                  <option value="ru">Russian</option>
                  <option value="sk">Slovak</option>
                  <option value="es">Spanish</option>
                  <option value="th">Thai</option>
                  <option value="tr">Turkish</option>
                  <option value="vi">Vietnamese</option>
                  <option value="zh">Chinese</option>
                </select>

                <img
                  src="/images/auth/arrow.png"
                  alt="Language Selector"
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 w-[15px] object-contain " 
                />
              </div>
       
          

         
          </div>
        
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
