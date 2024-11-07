"use client";
import { useState } from "react";
import ScreenSize from "@/utils/ScreenSize";
import classnames from "classnames";
import data from "@/public/assets/data/regions.json";
import CountrtList from "./CountryList";
// import { gql } from "@apollo/client";
// import { getClient } from "@/app/utility/ApolloClient";
// const regionQuery = gql`
//   {
//     regionsCollection(locale: "en-US") {
//       items {
//         regionLabel
//         regionAllowedLanguages
//         regionSite
//       }
//     }
//   }
// `;
export default function CountrySelection({ hdRegionIndicator }) {
  // const { data } = await getClient().query({ query: regionQuery });
  let regionsData = data?.regionsCollection?.items;
  const [isCountrySelectionOpen, setIsCountrySelectionOpen] = useState(false);
  const [chooseRegion, setChooseRegion] = useState({
    regionSelected: "",
    regionIndex: "",
  });

  return (
    <>
      <div className="bg-gray-50 px-6 py-4 lg:py-0 ">
        <div className="flex justify-between items-center">
          <p
            className="text-13 cursor-pointer leading-14 font-medium flex items-center gap-1 lg:gap-[6px]"
            onClick={() => setIsCountrySelectionOpen(true)}
          >
            <span className="text-gray-300">{hdRegionIndicator}</span>
            <span className="icon-globe text-gray-900 text-24"></span>
            <span className="text-gray-900 pr-1">
              {chooseRegion.regionSelected}
            </span>
          </p>
          {ScreenSize() ? (
            <span
              className={classnames(
                "icon-chevron-down text-gray-900 text-16 ease-in-out duration-500",
                {
                  " rotate-180 ": isCountrySelectionOpen,
                }
              )}
            ></span>
          ) : (
            <span
              className="lg:hidden underline text-black cursor-pointer"
              onClick={() => setIsCountrySelectionOpen(true)}
            >
              Change
            </span>
          )}
        </div>
      </div>
      {ScreenSize() ? (
        <div className="">
          {isCountrySelectionOpen && (
            <div className="absolute right-0 top-12 bg-white w-[200px] rounded-br-md rounded-bl-md">
              <CountrtList
                regionsData={regionsData}
                setIsCountrySelectionOpen={setIsCountrySelectionOpen}
                setChooseRegion={setChooseRegion}
                chooseRegion={chooseRegion}
              />
            </div>
          )}
        </div>
      ) : (
        <div
          className={classnames(
            "w-full fixed bg-white overflow-auto top-0 ease-in-out duration-500 transition-all h-full px-4 pb-4 z-10 ",
            { "left-0": isCountrySelectionOpen },
            { "-left-full": !isCountrySelectionOpen }
          )}
        >
          <div className="flex flex-col">
            <div className="h-[100px] relative flex justify-between items-end pb-4 mb-7">
              <div className="flex items-center">
                <div
                  onClick={() => setIsCountrySelectionOpen(false)}
                  className="flex gap-1 items-center"
                >
                  <span className="icon-chevron-left text-24"></span>
                  <p className="font-medium text-18 leading-18">
                    IDEC Countries
                  </p>
                </div>
              </div>
            </div>
            <CountrtList
              regionsData={regionsData}
              setIsCountrySelectionOpen={setIsCountrySelectionOpen}
              setChooseRegion={setChooseRegion}
              chooseRegion={chooseRegion}
            />
          </div>
        </div>
      )}
    </>
  );
}
