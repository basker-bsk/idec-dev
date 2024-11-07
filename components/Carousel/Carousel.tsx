"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import classnames from "classnames";
import CarouselSlides from "./CarouselSlides";
import { useState } from "react";
import ScreenSize from "@/utils/ScreenSize";
import Link from "next/link";
import { TCarousel, TCarouselSettings } from "../../interface";
type Props = {
  data: TCarousel;
};

export default function Carousel({ data }: Props) {
  const [loadMore, setLoadMore] = useState(false);
  const settingsseries: TCarouselSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: parseInt(data.crSlidesPerRow),
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settingsnews: TCarouselSettings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: parseInt(data.crSlidesPerRow) > 3 ? 3.75 : 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.25,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-gray-50">
        {data && (
          <div
            className={classnames(
              " mx-auto container  py-8",
              {
                "px-4 xl:py-12 xl:px-[50px]": data.crStyle === "Series card",
              },
              {
                "pl-4 xl:pl-[50px] xl:!pr-0 ": data.crStyle === "News card",
              }
            )}
          >
            <h3 className="mb-6 lg:mb-8">{data.crTitle}</h3>
            {data.crStyle === "Series card" && (
              <>
                {ScreenSize() ? (
                  <Slider {...settingsseries}>
                    {data?.crComponentsCollection?.items.map((slide, index) => (
                      <CarouselSlides
                        props={Object.assign({}, slide, {
                          crStyle: data.crStyle,
                        })}
                        key={`b-${index}`}
                        // crStyle={data.crStyle}
                      />
                    ))}
                  </Slider>
                ) : (
                  <div className="flex flex-col gap-4">
                    {data?.crComponentsCollection?.items
                      .slice(
                        0,
                        !loadMore
                          ? 3
                          : data?.crComponentsCollection?.items.length
                      )
                      .map((slide, index) => (
                        <CarouselSlides
                          props={Object.assign({}, slide, {
                            crStyle: data.crStyle,
                          })}
                          key={`b-${index}`}
                          // crStyle={data.crStyle}
                        />
                      ))}
                  </div>
                )}
              </>
            )}
            {data.crStyle === "News card" && (
              <Slider {...settingsnews}>
                {data?.crComponentsCollection?.items.map((slide, index) => (
                  <CarouselSlides
                    props={Object.assign({}, slide, {
                      crStyle: data.crStyle,
                    })}
                    key={`b-${index}`}
                    // crStyle={data.crStyle}
                  />
                ))}
              </Slider>
            )}

            {data.crStyle === "Series card" && (
              <>
                {data?.crComponentsCollection?.items?.length > 3 && (
                  <div
                    className="pt-6 md:hidden flex justify-center px-5 py-2 items-center text-12 font-medium"
                    onClick={() => setLoadMore(!loadMore)}
                  >
                    <span className="min-w-[80px] text-center">
                      {loadMore ? "Load Less" : "Load More"}
                    </span>
                    <span
                      className={classnames(
                        "icon-chevron-down ease-in-out duration-500 text-16",
                        { "rotate-180": loadMore }
                      )}
                    ></span>
                  </div>
                )}
              </>
            )}
            {data.crStyle === "News card" && (
              <>
                <div className="pt-6  hover:text-primary gap-2 flex justify-center py-2 items-center text-12 font-medium">
                  <Link
                    href={data?.crViewAllLink?.linkUrl}
                    target={
                      data?.crViewAllLink?.linkNewWindow ? "_blank" : "_self"
                    }
                    className={classnames(
                      "flex gap-1 items-center py-[5px] font-medium "
                    )}
                  >
                    {data?.crViewAllLink?.linkText}
                  </Link>
                  <span
                    className={classnames(
                      "icon-chevron-right ease-in-out duration-500 text-16"
                    )}
                  ></span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
