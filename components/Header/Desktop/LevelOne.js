"use client";
import classnames from "classnames";
import LevelTwo from "./LevelTwo";
import { useState, useEffect } from "react";
import MenuWithSubMenu from "./MenuWithSubMenu";
import MenuWithOutSubMenu from "./MenuWithOutSubMenu";

export default function LevelOne({
  levelOneMenus,
  bowseBy,
  isAllProducts,
  levelTwoHasSubMenu,
  submenuPostion,
  l1Wrap,
  hideMenu,
}) {
  const [levelTwoMenus, setLevelTwoMenus] = useState([]);
  const [hoverArrowIndex, setHoverArrowIndex] = useState();
  const [menuActive, setMenuActive] = useState({
    activeIndex: "",
    activeLink: "",
    activeUrl: "",
  });
  const showLevelMenu = (subCategory, link, url) => {
    if (subCategory.length > 0) {
      setLevelTwoMenus(subCategory);
    }
    setMenuActive({
      activeLink: link,
      activeUrl: url,
    });
    //  const isLevelTwo = subCategory.length > 0;
  };

  const hoverMenu = (index) => {
    setHoverArrowIndex(index);
  };

  useEffect(() => {
    if (
      levelOneMenus[0]?.linkChildrenCollection?.items.length > 0 &&
      !isAllProducts
    ) {
      setLevelTwoMenus(levelOneMenus[0].linkChildrenCollection?.items);
      setMenuActive({
        activeLink: levelOneMenus[0].linkText,
        activeUrl: levelOneMenus[0].linkUrl,
        activeIndex: 0,
      });
    }
  }, [levelOneMenus]);
  return (
    <div
      className={classnames("megamenu-dropdown absolute z-10  top-[48px] ")}
      style={{
        left:
          levelTwoHasSubMenu || (!levelTwoHasSubMenu && l1Wrap)
            ? "0"
            : `${submenuPostion}px`,
        width:
          levelTwoHasSubMenu || (!levelTwoHasSubMenu && l1Wrap)
            ? "100%"
            : "auto",
      }}
    >
      <div
        className={classnames(
          " border-t border-gray100 relative container-menu",
          {
            "mx-auto  max-w-[1000px]":
              levelTwoHasSubMenu || (!levelTwoHasSubMenu && l1Wrap),
          },
          { "max-w-[450px]": !levelTwoHasSubMenu && !l1Wrap }
        )}
      >
        <div
          className={classnames(
            "shadow-md w-full   bg-white  rounded-br-md rounded-bl-md",
            { "h-[528px]  max-h-100": levelTwoHasSubMenu || l1Wrap },
            { "h-auto": !levelTwoHasSubMenu }
          )}
          onMouseLeave={() => {
            hideMenu();
          }}
        >
          <div className="flex w-full h-full justify-between">
            {/* Level One  Starts here */}

            <div
              className={classnames(
                "levelOne flex flex-col p-4 ",
                {
                  "w-1/2 border-r border-gray-300": levelTwoHasSubMenu,
                },
                { "w-full": !levelTwoHasSubMenu }
              )}
            >
              <p className="text-14 text-gray-400  mb-4">Browse by {bowseBy}</p>
              <div
                className={classnames("overflow-y-auto max-h-[450px]", {
                  "flex flex-col flex-wrap": l1Wrap && !levelTwoHasSubMenu,
                })}
              >
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
                        levelTwoHasSubMenu={false}
                        selectedMenu={menuActive}
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
                        levelTwoHasSubMenu={false}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Level Two Starts here */}
            {levelTwoHasSubMenu && (
              <div
                className={classnames("levelTwo flex flex-col w-1/2", {
                  "bg-gray-200": !isAllProducts,
                })}
              >
                <LevelTwo
                  levelTwoMenus={levelTwoMenus}
                  selectedMenu={menuActive}
                  isAllProducts={isAllProducts}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
