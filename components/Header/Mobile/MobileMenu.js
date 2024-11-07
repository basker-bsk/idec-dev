"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import classnames from "classnames";
import { useState } from "react";
import MenuTop from "./MenuTop";
import L1 from "./L1";
import CountrySelection from "../CountrySelection/CountrySelection";
export default function MobileMenu({ menuItems, pf, hdRegionIndicator }) {
  const [menuOpen, setMenuOpen] = useState({
    currentMenu: true,
    nextMenu: false,
  });

  const [allProducts, setAllProducts] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isL1Open, setIsL1Open] = useState(false);
  const [prevLink, setPrevLink] = useState("");
  const [levelOneMenus, setLevelOneMenus] = useState([]);

  const showMenu = (subCategory, index, linkText) => {
    setIsL1Open(true);
    setLevelOneMenus(subCategory);
    setPrevLink(linkText);
    if (subCategory.length > 0) {
      setMenuOpen({
        currentMenu: false,
        nextMenu: true,
      });
    }
    if (index === 0) {
      setAllProducts(true);
    } else {
      setAllProducts(false);
    }
  };
  // Hide Menu when click Overlay
  const hideMenu = () => {
    setPrevLink("");
    setIsMenuOpen(false);
    setIsL1Open(false);
  };

  return (
    <>
      <div className={classnames("", { "menu-open ": isMenuOpen })}>
        <div onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </div>

        <div
          className={classnames(
            "w-full fixed bg-white overflow-auto top-0 ease-in-out duration-500 transition-all h-full px-4 z-10 ",
            { "left-0": isMenuOpen },
            { "-left-full": !isMenuOpen }
          )}
        >
          <MenuTop hideMenu={hideMenu}></MenuTop>
          <ul className="text-20 leading-20 font-medium text-black">
            {menuItems.map((menu, index) => (
              <li
                className={classnames("p-4 text-black", {
                  "text-primary": menu.linkClass !== null,
                })}
                key={menu.linkText}
              >
                {menu.linkChildrenCollection.items &&
                menu.linkChildrenCollection.items.length > 0 ? (
                  <div
                    className="flex justify-between"
                    onClick={() => {
                      if (
                        menu.linkChildrenCollection.items &&
                        menu.linkChildrenCollection.items.length > 0
                      ) {
                        showMenu(
                          menu.linkChildrenCollection.items,
                          index,
                          menu.linkText
                        );
                      }
                    }}
                  >
                    <span>{menu.linkText}</span>
                    <i
                      className={classnames(
                        "text-24 ease-in-out text-black duration-500 icon-chevron-right"
                      )}
                    ></i>
                  </div>
                ) : (
                  <Link
                    href={menu.linkUrl}
                    title={menu.linkText}
                    className="flex justify-between"
                  >
                    <span>{menu.linkText}</span>
                    <i
                      className={classnames(
                        "text-24 ease-in-out text-black duration-500 icon-chevron-right"
                      )}
                    ></i>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="absolute bottom-0 left-0 w-full">
            <CountrySelection hdRegionIndicator={hdRegionIndicator} />
          </div>
        </div>
        {/* level 1 Menu */}
        <div
          className={classnames(
            "w-full fixed bg-white overflow-auto top-0 ease-in-out duration-500 transition-all h-full px-4 z-10",
            { "left-0": isL1Open },
            { "-left-full": !isL1Open }
          )}
        >
          <L1
            levelOneMenus={levelOneMenus}
            isAllProducts={allProducts}
            prevLink={prevLink}
            hideMenu={hideMenu}
            thumbImage={true}
            menuOpen={menuOpen.nextMenu}
            setIsL1Open={setIsL1Open}
            isL1Open={isL1Open}
            pf={pf}
          />
        </div>
      </div>
      {/* {showOverlay && (
        <div
          className="fixed w-full h-full bg-black opacity-50 overlaySection z-20 top-0 left-0"
          onClick={() => hideMenu()}
        ></div>
      )} */}
    </>
  );
}
