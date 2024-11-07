import { getClient } from "@/app/utility/ApolloClient";
import { gql } from "@apollo/client";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import data from "@/public/assets/data/home.json";
import USP from "@/components/USPComponent";
import LoginBanner from "@/components/LoginBanner";
import ProductFinderBanner from "@/components/ProductFinderBanner";
import PopularCategories from "@/components/PopularCaregories";
import TextImageComponent from "@/components/TextImageComponent";
import ResourceAndDocuments from "@/components/ResourceAndDocuments";
import HelpComponent from "@/components/HelpComponent";
import Carousel from "@/components/Carousel/Carousel";
import LatestOnArticles from "@/components/LatestArticles/LatestOnArticles";
import getDataFromPersistantQuery from "./utility/PersistentQuery";

export default async function Home() {
  const { data } = await getDataFromPersistantQuery();
  const cms_home =
    data.landingPageIdecCollection?.items[0]?.lpComponentsCollection?.items;
  console.log("cms_home", cms_home);
  return (
    <>
      {cms_home.map((content: any, index: number) => (
        <div key={`LP-${index}`}>
          {/* Hero Banner */}
          {content.__typename === "Carousel" &&
            content.crStyle === "Banner" && (
              <div className="xl:min-h-[500px]">
                <HeroBanner banner={content} />
              </div>
            )}
          {/* USP */}
          {content.__typename === "Counters" && (
            <div className="">
              <USP usp={content} />
            </div>
          )}
          {/* Popular Categories */}
          {content.__typename === "Columns" &&
            content.clmStyle === "Popular Categories" && (
              <div className="">
                <PopularCategories categories={content} />
              </div>
            )}
          {/* Log in or create an account */}
          {content.__typename === "CallToAction" &&
            content.ctaStyle === "Ribbon" && (
              <div className="">
                <LoginBanner data={content} />
              </div>
            )}
          {/* Latest Articles */}
          {content.__typename === "LatestOnArticles" && (
            <div className="">
              <LatestOnArticles data={content} />
            </div>
          )}
          {/* Featured Series */}
          {content.__typename === "Carousel" &&
            content.crStyle === "Series card" && (
              <div className="slider card-slider ">
                <Carousel data={content} />
              </div>
            )}
          {/* Product Finder */}
          {content.__typename === "CallToAction" &&
            content.ctaStyle === "Transparent" && (
              <div className="">
                <ProductFinderBanner PFBanner={content} />
              </div>
            )}
          {/* Resource And Documents */}
          {content.__typename === "ListOfLinks" && (
            <div className=" mb-8 md:mb-12">
              <ResourceAndDocuments rd={content} />
            </div>
          )}
          {/* Text Image Component */}
          {content.__typename === "TextImage" && (
            <div className=" mb-8 md:mb-12">
              <TextImageComponent data={content} />
            </div>
          )}
          {/* News & Highlights */}
          {content.__typename === "Carousel" &&
            content.crStyle === "News card" && (
              <div className="slider news-slider mb-8 md:mb-12">
                <Carousel data={content} />
              </div>
            )}
          {content.__typename === "Columns" &&
            content.clmStyle === "Help Links" && (
              <div className="">
                <HelpComponent help={content} />
              </div>
            )}
        </div>
      ))}
    </>
  );
}
