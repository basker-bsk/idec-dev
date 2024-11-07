"use client";
import Link from "next/link";
import Image from "next/image";
import { isEmpty } from "lodash";
import classnames from "classnames";
import { TCarouselSlide } from "../../interface";
import { LazyLoadImage } from "react-lazy-load-image-component";
type Props = {
  props: TCarouselSlide;
};
export default function CarouselSlides({ props }: Props) {
  return (
    <div
      className={classnames(
        "ease-in-out duration-500",
        {
          "series-banner": props.crStyle === "Series card",
        },
        {
          "news-banner": props.crStyle === "News card",
        }
      )}
      data-aos="zoom-in"
    >
      {!isEmpty(props.cdBadge) && (
        <span className="tag absolute left-0 top-0 ">{props.cdBadge}</span>
      )}
      <div
        className={classnames(
          "flex flex-col",
          {
            " w-1/2 gap-2": props.crStyle === "Series card",
          },
          {
            "p-5 gap-5": props.crStyle === "News card",
          }
        )}
      >
        <div className="flex flex-col">
          {!isEmpty(props.cdOverline1) && (
            <span
              className={classnames(
                "text-12 font-medium leading-12 md:text-14 md:font-bold md:leading-14",
                {
                  "text-gray-500": props.crStyle === "News card",
                }
              )}
            >
              {props.cdOverline1}
            </span>
          )}
          {!isEmpty(props.cdOverline2) && (
            <span className="text-12 font-medium leading-12 md:text-14 md:leading-14 text-gray-400">
              {props.cdOverline2}
            </span>
          )}
        </div>
        <p className="text-16 leading-16 md:text-18 md:leading-18 font-medium">
          {props.cdTitle}
        </p>
        <Link
          href={props.cdLink.linkUrl}
          target={props.cdLink.linkNewWindow ? "_blank" : "_self"}
          className={classnames(
            "flex gap-1 items-center py-[5px] font-medium  hover:text-primary",
            {
              "leading-14 text-14": props.crStyle === "Series card",
            },
            {
              "leading-16 text-16": props.crStyle === "News card",
            }
          )}
        >
          {props.crStyle === "News card" && (
            <span className="icon-plus text-primary text-24"></span>
          )}
          {props.cdLink.linkText}
          {props.crStyle === "Series card" && (
            <span className="icon-chevron-right text-24"></span>
          )}
        </Link>
      </div>
      <div
        className={classnames(
          " ",
          {
            "w-1/2": props.crStyle === "Series card",
          },
          {
            "w-full": props.crStyle === "News card",
          }
        )}
      >
        {props.crStyle === "Series card" ? (
          <LazyLoadImage
            alt={props.cdImage.title}
            className={classnames("md:w-full md:h-full ", {})}
            src={props.cdImage.url}
          />
        ) : (
          <LazyLoadImage
            alt={props.cdImage.title}
            className={classnames("md:w-full md:h-full ", {
              "rounded-tl-md rounded-tr-md": props.crStyle === "News card",
            })}
            src={props.cdImage.url}
          />
        )}
      </div>
    </div>
  );
}
