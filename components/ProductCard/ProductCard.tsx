"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import classNames from "classnames";
import ScreenSize from "@/utils/ScreenSize";
interface ProductCardProps {
  data: any;
}
const ProductCard = ({ data }: ProductCardProps) => {
  console.log("card props item", data);
  const cardType: string = data?.cdStyle;
  const ctaText: string = data?.cdLink?.linkText;
  const ctaLink: string = data?.cdLink?.linkUrl;
  const description: string = data?.cdDescription;
  const title: string = data?.cdTitle;
  const imageSrc: string = data?.cdImage?.url;
  const imageAlt: string = data?.cdImage?.title;
  const price: string = data?.price;
  const descriptionList: [] = data?.descriptionList;
  const styleTypeA: string = "category-landing";
  const styleTypeB: string = "series-landing";
  const styleTypeC: string = "series-listing";
  return (
    <>
      <div
        className={classNames(
          "w-full lg:max-w-[323px] rounded-2xl border-halfGray border bg-white",
          { "p-[30px]": cardType === styleTypeB },
          { "px-4 lg:px-5": cardType === styleTypeA },
          { "px-3 lg:px-5": cardType === styleTypeC }
        )}
      >
        {cardType === styleTypeB && (
          <div className="text-16 lg:text-20 font-medium leading-[150%] text-black lg:px-[15px] text-center">
            {title}
          </div>
        )}
        <div
          className={classNames(
            "w-full flex justify-center items-center",
            { "mt-[18px] lg:mt-4": cardType === styleTypeB },
            { "py-6 lg:py-10": cardType === styleTypeA },
            { "pt-[26px] lg:py-10": cardType === styleTypeC }
          )}
        >
          <Image
            src={imageSrc}
            width={ScreenSize() ? (cardType === styleTypeB ? 160 : 180) : 120}
            height={ScreenSize() ? (cardType === styleTypeB ? 160 : 180) : 120}
            alt={imageAlt}
            className="object-cover"
          />
        </div>
        {cardType === styleTypeA && (
          <div className="pb-4 lg:py-5">
            <div className="font-medium text-16 lg:text-20 leading-[150%] text-black">
              {title}
            </div>
            <p className="text-14 lg:text-16 leading-[150%] lg:leading-6 mt-2 text-black">
              {description}
            </p>
            <div className="flex justify-start mt-6">
              <Button theme="secondary" variant="iconText">
                <Link href={ctaLink}>{ctaText}</Link>
                <span className="icon-chevron-right"></span>
              </Button>
            </div>
          </div>
        )}
        {cardType === styleTypeB && (
          <div className="flex justify-center mt-[18px] lg:mt-6">
            <Button theme="secondary" variant="iconText">
              <Link href={ctaLink}>{ctaText}</Link>
              <span className="icon-chevron-right"></span>
            </Button>
          </div>
        )}
        {cardType === styleTypeC && (
          <div className="pt-4 pb-3 lg:pt-5 lg:pb-5">
            <div className="lg:font-medium text-12 lg:text-14 leading-[150%] text-gray-600">
              {description}
            </div>
            <div className="font-medium text-16 lg:text-18 leading-[150%] text-black mt-1 min-h-[47px] lg:min-h-[55px]">
              {title}
            </div>
            <div className="text-18 lg:text-20 font-bold text-secondary leading-[150%] mt-2 lg:mt-5">
              ${price}{" "}
              <span className="uppercase text-12 lg:text-14 font-medium leading-[150%] text-gray-400">
                MSRP
              </span>
            </div>
            <ul className="text-gray-600 text-10 lg:text-12 leading-[160%] lg:leading-4 list-disc pl-5 mt-[6px] lg:mt-2">
              {descriptionList &&
                descriptionList.map((list, i) => {
                  return <li key={i}>{list}</li>;
                })}
            </ul>
            <div className="flex justify-start mt-3 lg:mt-6">
              <Button theme="secondary" className="w-full">
                {ctaText}
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
