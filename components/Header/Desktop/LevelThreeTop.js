import Link from "next/link";

function LevelThreeTop({ selectedMenu }) {
  return (
    <div className="flex justify-between  mb-4">
      <div className="flex gap-4 items-center">
        <span className="text-14 text-gray-400">{selectedMenu.activeLink}</span>
      </div>
      <div className="flex gap-2 items-center  hover:text-primary">
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
    </div>
  );
}

export default LevelThreeTop;
