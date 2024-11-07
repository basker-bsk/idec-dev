"use client";
import { useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import LevelThreeTop from "./LevelThreeTop";
export default function LevelThree({ levelThreeMenus, selectedMenu }) {
  const [hoverArrowIndex, setHoverArrowIndex] = useState();
  const hoverMenu = (index) => {
    setHoverArrowIndex(index);
  };
  return (
    <div className="w-full flex flex-col p-4 border-r border-gray-300">
      <LevelThreeTop selectedMenu={selectedMenu} />
      <div className="overflow-y-auto h-[450px]">
        {levelThreeMenus.map((levelThree, index) => (
          <Link
            href={levelThree.linkUrl}
            key={levelThree.linkText}
            className={classnames(
              "text-16 font-medium leading-16 flex gap-2 items-center p-4 relative hover:text-primary hover:bg-gray-50 rounded-md"
            )}
            onMouseEnter={() => {
              hoverMenu(index);
            }}
          >
            <span>{levelThree.linkText}</span>
            <span
              className={classnames(
                "icon-arrowright rounded-full text-20 w-8 h-8 p-[6px]  text-black absolute right-4 top-1/2 -translate-y-1/2",
                {
                  "text-white bg-primary ": hoverArrowIndex === index,
                }
              )}
            ></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
