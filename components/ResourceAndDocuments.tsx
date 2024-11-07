import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { TRandD } from "../interface";
type Props = {
  rd: TRandD;
};
export default function ResourceAndDocuments({ rd }: Props) {
  return (
    <div className="gradient-blue ">
      <div className="container mx-auto px-4 py-8 xl:py-12 xl:px-[50px]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4 md:mb-6">
          <h3>{rd.listLinkTitle}</h3>
          <div className="">
            <Button theme="primary">{rd.listLinkviewAllLink.linkText}</Button>
          </div>
        </div>
        <div>
          <ul className="grid md:grid-cols-2 gap-1 flex-wrap">
            {rd.listLinkCollection?.items?.map((list, index) => (
              <li
                key={list.linkText}
                data-aos={!(index % 2) ? "fade-right" : "fade-left"}
                className="px-5 py-4 flex justify-between items-center border-b border-gray-300"
              >
                <Link
                  href={list.linkUrl}
                  className="text-16 font-medium flex gap-2 items-center"
                >
                  <Image
                    src={list.linkIcon.url}
                    width={24}
                    height={24}
                    alt={list.linkIcon.title}
                    className="w-6 h-6 "
                  ></Image>
                  <span>{list.linkText}</span>
                </Link>
                <span className="text-24 icon-arrowright"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
