"use client";
import classnames from "classnames";
import { useState } from "react";
import LevelOneAll from "./LevelOneAll";
import LevelOne from "./LevelOne";
import CountrySelection from "../CountrySelection/CountrySelection";
const DesktopMenu = ({ menuItems, pf, hdRegionIndicator }) => {
  const [levelOneMenus, setLevelOneMenus] = useState([]);
  const [menuActive, setMenuActive] = useState("");
  const [isLevelOne, setIsLevelOne] = useState(false);
  const [allProducts, setAllProducts] = useState(false);
  const [l1Wrap, setL1Wrap] = useState(false);
  const [bowseBy, setBrowseBy] = useState("");
  const [levelTwoHasSubMenu, setLevelTwoHasSubMenu] = useState(false);
  const [submenuPostion, setSubmenuPostion] = useState(0);
  // let levelOneHasSubMenu;

  const showMenu = (subCategory, index, linkText) => {
    setL1Wrap(false);
    setBrowseBy(linkText);
    // levelOneHasSubMenu = subCategory.length > 0;
    subCategory.map((cat) => {
      if (cat.linkChildrenCollection.items.length > 0) {
        setLevelTwoHasSubMenu(true);
      } else {
        setLevelTwoHasSubMenu(false);
      }
    });
    if (subCategory.length > 7) {
      setL1Wrap(true);
    }

    const element = document.getElementById(linkText);
    //const rect = element.getBoundingClientRect();
    setSubmenuPostion(element.offsetLeft.toFixed());

    if (subCategory.length > 0) {
      setIsLevelOne(true);
    }
    if (index === 0) {
      setAllProducts(true);
    } else {
      setAllProducts(false);
    }
    setLevelOneMenus(subCategory);
    setMenuActive(index);
  };

  const hideMenu = () => {
    setIsLevelOne(false);
    setLevelOneMenus("");
    setMenuActive("");
    setL1Wrap(false);
  };

  return (
    <>
      {menuItems && (
        <>
          <div className="relative container mx-auto flex justify-between">
            <div
              onMouseLeave={() => {
                hideMenu();
              }}
              className="flex h-12"
            >
              <ul className="float-left level-0 h-full">
                {menuItems.map((menu, index) => (
                  <li
                    id={menu.linkText}
                    className={classnames(
                      "cursor-pointer mr-[1px] relative  h-full",
                      {
                        "gradient-red text-white":
                          index === 0 && menuActive === index,
                      },
                      {
                        "active-bdr  ":
                          menuActive === index &&
                          index !== 0 &&
                          menu.linkClass === null,
                      },
                      { "text-primary": menu.linkClass !== null }
                    )}
                    key={menu.linkText}
                    onMouseEnter={() => {
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
                    <div
                      href={menu.linkUrl}
                      title={menu.linkText}
                      className={classnames(
                        "flex gap-1 items-center py-3 px-5 text-center justify-center text-14 leading-14 font-medium"
                      )}
                    >
                      <span>{menu.linkText}</span>
                      {menu.linkChildrenCollection.items &&
                        menu.linkChildrenCollection.items.length > 0 && (
                          <i
                            className={classnames(
                              "text-20  ease-in-out duration-500",
                              { "icon-chevron-down": menuActive !== index },
                              {
                                "icon-chevron-down rotate-180":
                                  menuActive === index,
                              }
                            )}
                          ></i>
                        )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* All Products Menu */}
              {isLevelOne && allProducts && (
                <LevelOneAll
                  levelOneMenus={levelOneMenus}
                  isAllProducts={allProducts}
                  bowseBy={bowseBy}
                  levelTwoHasSubMenu={levelTwoHasSubMenu}
                  pf={pf}
                />
              )}

              {/* Other Menus */}
              {isLevelOne && !allProducts && (
                <LevelOne
                  levelOneMenus={levelOneMenus}
                  bowseBy={bowseBy}
                  isAllProducts={allProducts}
                  levelTwoHasSubMenu={levelTwoHasSubMenu}
                  submenuPostion={submenuPostion}
                  l1Wrap={l1Wrap}
                  hideMenu={hideMenu}
                />
              )}
            </div>
            <div className="relative text-14 flex items-center justify-center bg-gray-50">
              <CountrySelection hdRegionIndicator={hdRegionIndicator} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DesktopMenu;
