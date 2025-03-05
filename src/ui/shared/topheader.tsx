"use client";

import Logo from "@/components/ui/logo";
import MarqueHeader from "@/components/marketing/MarqueHeader";
import Wrapper from "@/components/global/wrapper";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useProfileData from "@/app/customHooks/profiledata";
import CommonButton from "@/components/ui/CommonButton";

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

const Topheader = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const router=useRouter()
  const pathname = usePathname();
  const {profileData}=useProfileData()
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

 

  useEffect(() => {
    if (profileData && profileData?.role === "ADMIN") {
      router.push("/admin/dashboard");
    }
  }, [profileData]);

  return (
    <>
      <header className="sticky top-0 w-full bg-transparent backdrop-blur-[10px] z-50">
        <MarqueHeader />
        <div id="google_translate_element" style={{ display: "none" }}></div>
        <Wrapper className="h-full p-2">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-2 sm:mt-1 mt-0">
              <Logo />
            </div>

            <div className="xl:flex items-center gap-4">
              <ul className="hidden xl:flex items-center gap-8">
                {NAV_LINKS.map((link: any, index) => (
                  <li
                    style={{ fontFamily: "Prompt" }}
                    key={index}
                    className={`${
                      pathname === link.href ? "text-red" : "text-black"
                    } text-[18px] font-[400]`}
                  >
                    <Link
                      style={{
                        color: pathname === link.href ? "blue" : "black",
                      }}
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-1">
                <Link href={"/dashboard/contact-customer-service"}>
                <img
                  src="/images/home/notification.svg"
                  className="w-[40px] h-[40px]"
                />
                </Link>


<Link href={"/dashboard/contact-customer-service"} >
<img
               
               src="/images/auth/help.svg"
               className="w-[40px] h-[40px] cursor-pointer"
             />
</Link>
               

                {profileData && profileData?.role==="ADMIN" && (
                 <button onClick={()=>router.push("/admin/dashboard")} className="bg-[#0071CE] flex justify-center items-center text-white text-[16px] font-[600] border-none rounded-[12px] max-w-fit h-[49px] cursor-pointer appearance-none pl-2 pr-2">
                  Dashboard
                 </button>
                )}

                <div className="relative">
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
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[15px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </header>
    </>
  );
};

export default Topheader;
