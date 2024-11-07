"use client";
import Link from "next/link";
import { TPopularCategories } from "../interface";
import { LazyLoadImage } from "react-lazy-load-image-component";
type Props = {
  categories: TPopularCategories;
};
export default function PopularCategories({ categories }: Props) {
  return (
    <>
      {categories && (
        <div className="container mx-auto px-4 py-8 xl:py-12 xl:px-[50px]">
          <h3 className="md:text-center mb-6 md:mb-8" data-aos="fade-up">
            {categories.clmTitle}
          </h3>

          <div className="flex gap-x-3 lg:gap-x-[48px] flex-wrap justify-center">
            {categories.clmContentsCollection?.items?.map((cat) => (
              <Link
                href={cat.cdLink?.linkUrl}
                className="flex flex-col w-[110px]  lg:w-[150px]  mb-6"
                key={cat.cdTitle}
                target={cat.cdLink?.linkNewWindow ? "_blank" : "_self"}
              >
                <div
                  data-aos="zoom-in"
                  className="rounded-full bg-gray-50 p-[10px] w-[110px] h-[110px] lg:w-[150px] lg:h-[150px] flex justify-center items-center"
                >
                  <LazyLoadImage
                    alt={cat?.cdImage?.title}
                    src={cat?.cdImage?.url}
                  />
                </div>
                <span className="text-12 md:text-16 md:font-medium text-center mt-[14px]">
                  {cat.cdTitle}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
