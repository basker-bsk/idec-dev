"use client";
import ArticleContent from "./ArticleContent";
import { isEmpty } from "lodash";
import classnames from "classnames";
import Link from "next/link";
import { Button } from "../ui/button";
import { TLOA } from "../../interface";
import Image from "next/image";
import Links from "@/helpers/Link";
import { LazyLoadImage } from "react-lazy-load-image-component";
type Props = {
  data: TLOA;
};
export default function LatestOnArticles({ data }: Props) {
  const articlePlacements = [
    {
      index: 1,
      imagePosition: "top",
      tile: "half",
    },
    {
      index: 2,
      imagePosition: "top",
      tile: "half",
    },
    {
      index: 3,
      imagePosition: "center",
      tile: "full",
    },
    {
      index: 4,
      imagePosition: "top",
      tile: "half",
    },
    {
      index: 5,
      imagePosition: "right",
      tile: "halfright",
    },
  ];
  return (
    <div className="gradient-black">
      <div className="container mx-auto px-4 py-8 xl:py-12 xl:px-[50px]">
        <h3 className="text-center mb-6 md:mb-8 text-white" data-aos="zoom-in">
          {data.loaTitle}
        </h3>
        {data.loaContentsCollection && (
          <div className="flex gap-4 flex-col flex-wrap lg:max-h-[664px]">
            {data.loaContentsCollection.items.map((article, index) => (
              <div
                key={article.cdOverline1}
                data-aos="flip-left"
                className={classnames(
                  "rounded-2xl lg:rounded-md bg-white relative flex lg:w-[436px]  justify-between",
                  {
                    "flex-col":
                      articlePlacements[index].imagePosition === "top" ||
                      articlePlacements[index].imagePosition === "center",
                  },
                  {
                    "lg:h-[427px]":
                      articlePlacements[index].index === 1 ||
                      articlePlacements[index].index === 4,
                  },
                  {
                    "lg:h-[211px]":
                      articlePlacements[index].index === 2 ||
                      articlePlacements[index].index === 5,
                  },
                  {
                    "items-center":
                      articlePlacements[index].imagePosition === "right",
                  },
                  {
                    "lg:h-[644px]": articlePlacements[index].index === 3,
                  },
                  {
                    "flex-row-reverse gap-2":
                      articlePlacements[index].tile === "halfright",
                  }
                )}
              >
                {!isEmpty(article.cdBadge) && (
                  <span className="tag absolute left-0 top-0 ">
                    {article.cdBadge}
                  </span>
                )}
                {!isEmpty(article.cdImage) ? (
                  <div
                    className={classnames(
                      "",
                      {
                        "flex items-center justify-center":
                          articlePlacements[index].imagePosition === "center",
                      },
                      {
                        "h-auto lg:py-[50px]":
                          articlePlacements[index].tile === "full",
                      },
                      {
                        "w-1/2": articlePlacements[index].tile === "halfright",
                      }
                    )}
                  >
                    <LazyLoadImage
                      alt={article.cdImage.title}
                      src={article.cdImage.url}
                      className={classnames(
                        "rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-md lg:rounded-tr-md",
                        {
                          "h-full ": articlePlacements[index].tile === "half",
                        },
                        {
                          "max-h-[230px] ":
                            articlePlacements[index].tile === "full",
                        },
                        {
                          " w-full":
                            articlePlacements[index].tile === "halfright",
                        }
                      )}
                    />
                    {/* <Image
                      src={article.cdImage.url}
                      width={80}
                      height={80}
                      alt={article.cdImage.title}
                      className={classnames(
                        "rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-md lg:rounded-tr-md",
                        {
                          "h-full lg:w-[230px]":
                            articlePlacements[index].tile === "half",
                        },
                        {
                          "max-h-[230px] ":
                            articlePlacements[index].tile === "full",
                        },
                        {
                          " w-full":
                            articlePlacements[index].tile === "halfright",
                        }
                      )}
                    ></Image> */}
                  </div>
                ) : (
                  <div>&nbsp;</div>
                )}
                <div
                  className={classnames(
                    "",
                    {
                      "h-auto ": articlePlacements[index].tile === "full",
                    },
                    {
                      "w-1/2": articlePlacements[index].tile === "halfright",
                    }
                  )}
                >
                  <ArticleContent data={article} />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="gradient-red px-4 py-10  mt-4 md:px-10 rounded-md flex flex-col md:flex-row justify-between gap-4 md:items-center ">
          <div className="text-white font-medium md:w-3/4">
            <div className="text-18 leading-18 font-bold">
              {data.loaCta.ctaTitle}
            </div>
          </div>
          <div>
            <Button theme="secondary">
              <Links data={data.loaCta.ctaLink} className="" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
