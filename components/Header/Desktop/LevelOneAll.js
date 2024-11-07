"use client";
import classnames from "classnames";
import LevelTwo from "./LevelTwo";
import ProductFinderSearch from "./ProductFinderSearch";
import { useState } from "react";
import MenuWithSubMenu from "./MenuWithSubMenu";
import MenuWithOutSubMenu from "./MenuWithOutSubMenu";

export default function LevelOneAll({
  levelOneMenus,
  isAllProducts,
  levelTwoHasSubMenu,
  pf,
}) {
  const [levelTwoMenus, setLevelTwoMenus] = useState([]);
  const [isLevelTwo, setIsLevelTwo] = useState(false);
  const [hoverArrowIndex, setHoverArrowIndex] = useState();
  const [menuActive, setMenuActive] = useState({
    activeIndex: "",
    activeLink: "",
    activeUrl: "",
  });

  const showLevelMenu = (subCategory, link, url) => {
    setHoverArrowIndex();
    if (subCategory.length > 0) {
      setIsLevelTwo(true);
    }
    setMenuActive({
      activeLink: link,
      activeUrl: url,
    });
    // const isLevelTwo = subCategory.length > 0;

    setLevelTwoMenus(subCategory);
  };

  const hoverMenu = (index) => {
    setHoverArrowIndex(index);
  };

  const hideMenu = () => {
    setIsLevelTwo(false);
    setLevelTwoMenus([]);

    setMenuActive({
      activeMenu: false,
      activeIndex: "",
    });
  };

  return (
    <div className="megamenu-dropdown absolute z-10 left-0 top-[48px] w-full">
      <div
        className={classnames(
          "max-w-[1340px] border-t border-gray100 mx-auto relative "
        )}
      >
        <div
          className="shadow-md w-full h-[528px]  bg-white  max-h-100 rounded-br-md rounded-bl-md"
          onMouseLeave={() => {
            hideMenu();
          }}
        >
          <div className=" flex w-full h-full justify-between">
            {/* Level One  Starts here */}
            {!isLevelTwo && (
              <div className={classnames("levelOne flex flex-col p-4 w-2/3")}>
                <p className="text-14 text-gray-400  mb-4">
                  Browse by Categories
                </p>
                <div className="overflow-y-auto h-[450px]">
                  {levelOneMenus.map((levelOne, index) => (
                    <div key={levelOne.linkText}>
                      {levelOne?.linkChildrenCollection?.items?.length > 0 ? (
                        <MenuWithSubMenu
                          menu={levelOne}
                          menuIndex={index}
                          hoverArrowIndex={hoverArrowIndex}
                          hoverMenu={hoverMenu}
                          showLevelMenu={showLevelMenu}
                          icon={true}
                          hideMenu={hideMenu}
                          isAllProducts={isAllProducts}
                          levelTwoHasSubMenu={levelTwoHasSubMenu}
                        />
                      ) : (
                        <MenuWithOutSubMenu
                          menu={levelOne}
                          menuIndex={index}
                          hoverArrowIndex={hoverArrowIndex}
                          hoverMenu={hoverMenu}
                          icon={true}
                          hideMenu={hideMenu}
                          isAllProducts={isAllProducts}
                          levelTwoHasSubMenu={levelTwoHasSubMenu}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Level Two Starts here */}
            {isLevelTwo && (
              <div className={classnames("levelTwo flex flex-col w-2/3")}>
                <LevelTwo
                  levelTwoMenus={levelTwoMenus}
                  selectedMenu={menuActive}
                  setIsLevelTwo={setIsLevelTwo}
                  isAllProducts={isAllProducts}
                />
              </div>
            )}

            {isAllProducts && (
              <div className="flex w-1/3">
                <ProductFinderSearch pf={pf} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
