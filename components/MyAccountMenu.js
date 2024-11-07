"use client";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";

export default function MyAccount({ profileMenus, postProfileData }) {
  const [childMenu, setChildMenu] = useState(profileMenus[0].children);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [menuActive, setMenuActive] = useState({
    activeMenu: false,
    activeIndex: "",
  });

  const hoverMenu = (index) => {
    setMenuActive({
      activeMenu: true,
      activeIndex: index,
    });
  };

  const showSubMenu = (subMenus) => {
    setChildMenu(subMenus);
  };

  const hideSubMenu = (subMenus) => {
    setChildMenu(subMenus);
  };

  return (
    <div className="flex flex-col px:6">
      <div className="account-menu">
        <div className="flex flex-col self-stretch items-start">
          <div className="flex flex-row">
            <div className="flex flex-col pl-2 md:pl-0 justify-center items-center">
              <span className="flex justify-center items-center gap-2.5 shrink-0 h-10 w-10 p-2.5 bg-[#E7E7E7] text-[#C31008] rounded-full">
                J
              </span>
            </div>
            <div className="flex flex-col p-4">
              <div className="flex-col">
                <span className="text-xs font-medium leading-5">
                  {" "}
                  {postProfileData.hdWelcomeUserPostlogin}{" "}
                </span>
              </div>
              <span className="text-base font-medium leading-8">
                {" "}
                John Mike{" "}
              </span>
            </div>
          </div>
          {profileMenus && (
            <div className="flex flex-row w-full py-6">
              <ul className="flex flex-row w-full">
                {profileMenus.map((accMenu, index) => (
                  <li
                    className={classNames(
                      "flex h-12 items-center justify-center gap-1 py-4 px-4 w-1/2",
                      {
                        "top-0 block bg-[#c0392b]": currentIndex == index,
                      }
                    )}
                    key={index}
                    onClick={() => {
                      if (accMenu.children && accMenu.children.length > 0) {
                        showSubMenu(accMenu.children);
                        setCurrentIndex(index);
                      } else {
                        hideSubMenu([]);
                      }
                    }}
                  >
                    <Link href="/" data-hover={accMenu.name}>
                      {accMenu.name ? accMenu.name : ""}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {childMenu && (
            <div className="flex flex-row">
              <ul className="flex flex-col items-start gap-2 self-stretch">
                {childMenu.map((cMenu, index) => (
                  <li
                    className={classNames(
                      "flex h-12 items-center w-full gap-1 py-3 px-5",
                      {
                        "text-[#c0392b] bg-[#E7E7E7]":
                          menuActive.activeIndex === index,
                      }
                    )}
                    key={index}
                    onMouseEnter={() => {
                      hoverMenu(index);
                    }}
                  >
                    <div className="flex text-xl font-normal w-3/4 hover:text-[#c0392b]">
                      <span>{cMenu.name}</span>
                    </div>
                    <div className="flex justify-between items-center w-1/4"></div>
                    <div
                      className={classNames(
                        "flex rounded-full items-center justify-center p-2 gap-2.5",
                        {
                          "text-[#fff] bg-[#c0392b]":
                            menuActive.activeIndex === index,
                        }
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex w-full items-center justify-center pt-[80px] gap-8">
            <span>Signout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
