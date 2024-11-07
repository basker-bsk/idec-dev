import Link from "next/link";

function LevelTwoTop({ selectedMenu, setIsLevelTwo, isAllProducts }) {
  return (
    <div className="flex justify-between  mb-4">
      <div
        className="flex gap-4 items-center cursor-pointer"
        onClick={() => setIsLevelTwo(false)}
      >
        {isAllProducts && (
          <span className="text-20 text-white bg-primary icon-arrowleft rounded-full  w-8 h-8 p-[6px] "></span>
        )}
        <span className="text-14 text-gray-40 hover:text-primary">
          {selectedMenu.activeLink}
        </span>
      </div>
      {isAllProducts && (
        <div className="flex gap-2 items-center hover:text-primary">
          <Link
            href={selectedMenu.activeUrl}
            className="text-14 text-black font-bold hover:text-primary"
          >
            Explore All
          </Link>
          <span className="w-6 h-6 relative">
            <i className="icon-chevron-right absolute top-1/2 -translate-y-1/2"></i>
          </span>
        </div>
      )}
    </div>
  );
}

export default LevelTwoTop;
