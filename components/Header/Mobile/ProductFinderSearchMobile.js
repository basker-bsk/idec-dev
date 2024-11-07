import Link from "next/link";

export default function ProductFinderSearchMobile({ pf }) {
  return (
    <div className=" mb-4">
      {pf && (
        <div className="bg-black bg-opacity-80 relative text-white p-4 rounded-md w-full h-[90px] flex items-center">
          <span className="absolute left-0 top-0 tracking-[0.8px] gradient-red text-white  uppercase text-10 font-bold py-[5px] px-[15px] rounded-tl-md rounded-br-md ">
            {pf.hdProductFinder}
          </span>
          <div className="pt-2 flex justify-between items-center w-full">
            <span className="text-20">{pf.hdProductFinderHeading}</span>
            <Link
              id={pf.hdProductFinderLink.linkId}
              className={`icon-arrowright rounded-full text-20 text-white bg-primary w-8 h-8 p-[6px]  ${pf.hdProductFinderLink.linkClass}`}
              href={pf.hdProductFinderLink.linkUrl}
              target={pf.hdProductFinderLink.linkNewWindow ? "_blank" : "_self"}
            ></Link>
          </div>
        </div>
      )}
    </div>
  );
}
