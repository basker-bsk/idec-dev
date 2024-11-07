"use client";
import classnames from "classnames";
import Link from "next/link";
import Image from "next/image";
function MenuWithSubMenu({
  menu,
  menuIndex,
  hoverArrowIndex,
  hoverMenu,
  icon,
  isAllProducts,
}) {
  return (
    <Link
      href={menu.linkUrl}
      className={classnames(
        "text-20 flex gap-2 items-center py-4 pl-4 pr-16 relative hover:text-primary hover:bg-gray-50 rounded-md",
        {
          "text-primary bg-gray-50 ": hoverArrowIndex === menuIndex,
        }
      )}
      onMouseEnter={() => {
        hoverMenu(menuIndex);
      }}
    >
      {icon && isAllProducts && menu.linkIcon && (
        <Image
          src={menu.linkIcon.url}
          width={42}
          height={42}
          alt={menu.linkIcon.title}
          className="w-10 h-10 bottom-1 border-gray-400"
        ></Image>
      )}
      <span className={classnames("text-20")}>{menu.linkText}</span>
      <span
        className={classnames(
          "icon-arrowright rounded-full  w-8 h-8 p-[6px]  text-black absolute right-4 top-1/2 -translate-y-1/2",
          {
            "text-white bg-primary ": hoverArrowIndex === menuIndex,
          }
        )}
      ></span>
    </Link>
  );
}

export default MenuWithSubMenu;
