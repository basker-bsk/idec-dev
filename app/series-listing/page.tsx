"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";
import series_listing_data from "@/public/assets/data/series_listing.json";
import { useRef, useState } from "react";
import classNames from "classnames";
const SeriesListing = () => {
  const getSeriesListingData = series_listing_data;
  console.log("Series Listing", getSeriesListingData);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container mx-auto px-4 py-8 xl:py-12 xl:px-[50px] bg-white">
      <div className="flex flex-wrap mt-3">
        <div className="hidden lg:block basis-1/4 pr-[10px]">
          <div className="w-full p-5">
            <div className="text-16 font-medium leading-[150%]">
              <span className="icon-filter"></span>{" "}
              <span className="ml-[5px]">Filters</span>
            </div>
            <div className="mt-5 flex justify-between items-center mb-2">
              <span className="text-14 leading-[150%] text-gray-600">
                Attributes
              </span>
              <Button theme={"link"}>Clear All</Button>
            </div>
            <div className="flex flex-col">
              <div
                className="flex flex-wrap border-t border-gray-200 py-4 items-center cursor-pointer"
                onClick={toggleOpen}
              >
                <div className="basis-9/12 text-14 leading-[150%] font-medium">
                  Product Type
                </div>
                <div className="basis-3/12">
                  <div className="flex flex-wrap justify-end">
                    <div className="w-[25px]">
                      <div className="bg-primary rounded-full text-white text-14 text-center w-5 h-5">
                        1
                      </div>
                    </div>
                    <div className="w-[25px] h-[24px]">
                      <span className="icon-chevron-down text-24"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={classNames(
                  "flex flex-col overflow-hidden transition-all",
                  {
                    "max-h-[1000px]": isOpen === true,
                  },
                  {
                    "max-h-[0]": isOpen === false,
                  }
                )}
              >
                <div className="flex flex-col items-start mb-4">
                  <div className="border border-gray-200 px-4 py-1 rounded-2xl text-gray-600 text-14 leading-[150%] text-center mb-2">
                    E-Stop Pushbutton
                  </div>
                  <div className="border border-gray-200 px-4 py-1 rounded-2xl text-gray-600 text-14 leading-[150%] text-center mb-2 last-of-type:mb-0">
                    Pushbutton
                  </div>
                </div>
                <div className="px-4">
                  <div className="mb-5">
                    <label className="text-14 font-medium leading-[150%] flex flex-row items-center">
                      <input
                        type="checkbox"
                        value="e-stop-pushbutton"
                        className="accent-primary mr-2 w-4 h-4"
                      />{" "}
                      E-Stop Pushbutton
                    </label>
                  </div>
                  <div className="mb-5">
                    <label className="text-14 font-medium leading-[150%] flex flex-row items-center">
                      <input
                        type="checkbox"
                        value="pushbutton"
                        className="accent-primary mr-2 w-4 h-4"
                      />{" "}
                      Pushbutton
                    </label>
                  </div>
                  <div className="mb-5">
                    <label className="text-14 font-medium leading-[150%] flex flex-row items-center">
                      <input
                        type="checkbox"
                        value="selecter-switch"
                        className="accent-primary mr-2 w-4 h-4"
                      />{" "}
                      Selector Switch
                    </label>
                  </div>
                  <div className="mb-5">
                    <label className="text-14 font-medium leading-[150%] flex flex-row items-center">
                      <input
                        type="checkbox"
                        value="sub-components"
                        className="accent-primary mr-2 w-4 h-4"
                      />{" "}
                      Sub-components
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap border-t border-gray-200 py-4 items-center">
              <div className="basis-9/12 text-14 leading-[150%] font-medium">
                Sub-components Type
              </div>
              <div className="basis-3/12">
                <div className="flex flex-wrap justify-end">
                  <div className="w-[25px]">
                    <div className="bg-primary rounded-full text-white text-14 text-center w-5 h-5">
                      1
                    </div>
                  </div>
                  <div className="w-[25px] h-[24px]">
                    <span className="icon-chevron-down text-24"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap border-t border-gray-200 py-4 items-center">
              <div className="basis-9/12 text-14 leading-[150%] font-medium">
                Bezel Type
              </div>
              <div className="basis-3/12">
                <div className="flex flex-wrap justify-end">
                  <div className="w-[25px]">
                    <div className="bg-primary rounded-full text-white text-14 text-center w-5 h-5">
                      1
                    </div>
                  </div>
                  <div className="w-[25px] h-[24px]">
                    <span className="icon-chevron-down text-24"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap border-t border-gray-200 py-4 items-center">
              <div className="basis-9/12 text-14 leading-[150%] font-medium">
                Pushbutton Function
              </div>
              <div className="basis-3/12">
                <div className="flex flex-wrap justify-end">
                  <div className="w-[25px]">
                    <div className="bg-primary rounded-full text-white text-14 text-center w-5 h-5">
                      1
                    </div>
                  </div>
                  <div className="w-[25px] h-[24px]">
                    <span className="icon-chevron-down text-24"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-12/12 lg:basis-3/4 pl-0 lg:pl-[6px]">
          <div className="p-4 bg-gray-100 flex flex-row flex-wrap justify-between rounded-lg items-center mb-6">
            <div className="text-14 font-medium leading-6">2532 Products</div>
            <div className="flex lg:hidden">
              <div className="text-16 font-medium leading-[150%]">
                <span className="icon-filter"></span>{" "}
                <span className="ml-[5px]">Filters</span>
              </div>
            </div>
            <div className="hidden lg:flex flex-row items-center flex-wrap">
              <div className="mr-[10px]">
                <span className="icon-sort"></span>
              </div>

              <div>
                <span className="text-14 font-medium leading-6 mr-[10px]">
                  Sort
                </span>
                <span>
                  <select className="min-h-[40px] text-14 font-medium leading-[150%] text-gray-400 bg-white border border-gray-400 rounded-lg px-5 py-2">
                    <option value="high">Price (Highest First)</option>
                    <option value="low">Price (Lowest First)</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full relative mb-6 hidden lg:block">
            <span className="icon-search absolute top-4 left-4 pointer-events-none text-24"></span>
            <input
              type="text"
              className="w-full bg-white py-4 px-5 border border-gray-200 rounded-lg pl-12"
              placeholder="Search by Series"
            />
          </div>
          <div className="w-full mb-6 hidden lg:flex flex-row items-center ">
            <div className="text-gray-600 text-16 font-medium leading-[150%]">
              Filters By
            </div>
            <div className="flex flex-row flex-wrap ml-4">
              <div className="p-[10px] bg-gray-100 text-14 font-medium leading-[150%] relative flex flex-row items-center mr-[10px]">
                E-Stop Pushbutton{" "}
                <span className="cursor-pointer icon-close text-20 ml-3"></span>
              </div>
              <div className="p-[10px] bg-gray-100 text-14 font-medium leading-[150%] relative flex flex-row items-center mr-[10px]">
                Pushbutton{" "}
                <span className="cursor-pointer icon-close text-20 ml-3"></span>
              </div>
              <div className="p-[10px] bg-gray-100 text-14 font-medium leading-[150%] relative flex flex-row items-center mr-[10px] last-of-type:mr-[0px]">
                Pushbutton Operator{" "}
                <span className="cursor-pointer icon-close text-20 ml-3"></span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-4">
            {getSeriesListingData &&
              getSeriesListingData?.componentsCollection?.items.map(
                (data, i) => {
                  return <ProductCard key={i} data={data} />;
                }
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeriesListing;
