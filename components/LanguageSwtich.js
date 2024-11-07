"use client";
import { ChevronDown, ChevronUp, CircleCheck } from "lucide-react";
import { useState } from "react";
import Lang from "@/public/assets/data/language.json";

export default function LanguageSwitch() {
  const [subMenu, setSubMenu] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const openSubMenu = (flag) => {
    setSubMenu(flag);
  };
  const closeSubMenu = (flag) => {
    setSubMenu(flag);
  };

  return (
    <div className="">
      <button
        className="flex items-center justify-center"
        onClick={() => openSubMenu(true)}
      >
        <span className="text-[14px] font-semibold">{selectedLang}</span>
        {subMenu ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>
      {subMenu && (
        <div>
          <div className="lang-dropdown">
            <ul>
              {Lang.languages.map((langInfo, index) => (
                <li
                  className="flex"
                  onClick={() => {
                    setSelectedLang(langInfo.code);
                    closeSubMenu(false);
                  }}
                  key={index}
                >
                  {langInfo.code == selectedLang ? (
                    <CircleCheck />
                  ) : (
                    <span className="w-6 h-6" />
                  )}
                  <span className="text-sm px-2">{langInfo.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
    // <button className="flex gap-[2.5px] items-center">
    //     <span className="text-[14px] font-semibold">EN</span>
    //     <ChevronDown className="h-4 w-4" />
    // </button>
  );
}
