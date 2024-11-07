"use client";
import { useEffect, useState } from "react";
import classnames from "classnames";
import LevelThree from "./LevelThree";
import LevelTwoTop from "./LevelTwoTop";
import MenuWithSubMenu from "./MenuWithSubMenu";
import MenuWithOutSubMenu from "./MenuWithOutSubMenu";
export default function LevelTwo({
  levelTwoMenus,
  selectedMenu,
  setIsLevelTwo,
  isAllProducts,
  levelTwoHasSubMenu,
}) {
  const [levelThreeMenus, setLevelThreeMenus] = useState([]);
  const [isLevelThree, setIsLevelThree] = useState(false);
  const [hoverArrowIndex, setHoverArrowIndex] = useState();
  const [menuActive, setMenuActive] = useState({
    activeLink: "",
    activeUrl: "",
    activeIndex: "",
  });
  const showLevelMenu = (subCategory, link, url, index) => {
    if (subCategory && subCategory.length > 0) {
      setIsLevelThree(true);
      setMenuActive({
        activeLink: link,
        activeUrl: url,
        activeIndex: index,
      });
      // const isLevelThree = subCategory.length > 0;

      setLevelThreeMenus(subCategory);
    }
  };
  const hoverMenu = (index) => {
    setHoverArrowIndex(index);
  };
  const hideMenu = () => {};
  useEffect(() => {
    if (
      levelTwoMenus[0]?.linkChildrenCollection?.items.length > 0 &&
      isAllProducts
    ) {
      setLevelThreeMenus(levelTwoMenus[0].linkChildrenCollection?.items);
      setIsLevelThree(true);
      setMenuActive({
        activeLink: levelTwoMenus[0].linkText,
        activeUrl: levelTwoMenus[0].linkUrl,
        activeIndex: 0,
      });
    } else {
      setIsLevelThree(false);
    }
  }, [levelTwoMenus]);
  return (
    <div
      className="flex w-full"
      onMouseLeave={() => {
        hideMenu();
      }}
    >
      <div
        className={classnames(
          "flex flex-col p-4 border-r border-gray-300",
          {
            "w-1/2": isAllProducts,
          },
          {
            "w-full": !isAllProducts,
          }
        )}
      >
        <LevelTwoTop
          selectedMenu={selectedMenu}
          setIsLevelTwo={setIsLevelTwo}
          levelTwoHasSubMenu={levelTwoHasSubMenu}
          isAllProducts={isAllProducts}
        />

        {/* <p className="text-14 text-gray-40 hover:text-primary mb-4">
          {selectedMenu.activeLink}
        </p> */}
        <div className="overflow-y-auto h-[450px]">
          {levelTwoMenus.map((levelTwo, index) => (
            <div key={levelTwo.linkText}>
              {levelTwo?.linkChildrenCollection?.items?.length > 0 ? (
                <MenuWithSubMenu
                  menu={levelTwo}
                  menuIndex={index}
                  hoverArrowIndex={hoverArrowIndex}
                  hoverMenu={hoverMenu}
                  showLevelMenu={showLevelMenu}
                  hideMenu={hideMenu}
                  icon={false}
                  isAllProducts={isAllProducts}
                  levelTwoHasSubMenu={levelTwoHasSubMenu}
                  selectedMenu={menuActive}
                />
              ) : (
                <MenuWithOutSubMenu
                  menu={levelTwo}
                  menuIndex={index}
                  hoverArrowIndex={hoverArrowIndex}
                  hoverMenu={hoverMenu}
                  icon={false}
                  isAllProducts={isAllProducts}
                  levelTwoHasSubMenu={levelTwoHasSubMenu}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Level Two Starts here */}
      {isLevelThree && (
        <div className={classnames("levelThree flex flex-col w-1/2")}>
          <LevelThree
            levelThreeMenus={levelThreeMenus}
            selectedMenu={menuActive}
            setIsLevelThree={setIsLevelThree}
          />
        </div>
      )}
    </div>
  );
}
