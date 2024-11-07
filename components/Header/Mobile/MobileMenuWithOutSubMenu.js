import Link from "next/link";
import Image from "next/image";
function MobileMenuWithOutSubMenu({ menu, thumbImage, isAllProducts }) {
  return (
    <Link
      href={menu.linkUrl}
      title={menu.linkText}
      className="flex justify-between items-center"
    >
      <div className="flex gap-1 items-center">
        {thumbImage && isAllProducts && menu.linkIcon && (
          <Image
            src={menu.linkIcon.url}
            width={42}
            height={42}
            alt={menu.linkIcon.title}
            className="w-10 h-10 bottom-1 border-gray-400"
          ></Image>
        )}
        <span>{menu.linkText}</span>
      </div>
    </Link>
  );
}

export default MobileMenuWithOutSubMenu;
