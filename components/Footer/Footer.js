"use client";

import classNames from "classnames";
import FooterJson from "@/public/assets/data/footer.json";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Footer() {
  const FooterData = FooterJson?.data?.footerCollection?.items;

  return (
    <>
      {FooterData && (
        <div className="flex flex-col border-t container mx-auto py-10 px-5 md:px-[50px] gap-12">
          <div className="flex flex-col md:flex-row gap-10 md:gap-0">
            <div className="max-w-[300px]">
              <div className="flex flex-col flex-start gap-6">
                <Link href="/">
                  <Image
                    src={FooterData && FooterData[0].ftLogo.url}
                    alt={FooterData && FooterData[0].ftLogo.title}
                    width={90}
                    height={30.77}
                    className="w-[90px] h-[30.77px]"
                  />
                </Link>
                <div className="w-full md:w-3/4 h-[63px] text-14 font-medium md:font-normal leading-[21px] text-wrap overflow-hidden">
                  {FooterData && FooterData[0].ftIntroText}
                </div>
                <div className="flex w-[72px] h-6 gap-6">
                  {FooterData &&
                    FooterData[0].ftSocialMediaLinksCollection &&
                    FooterData[0].ftSocialMediaLinksCollection.items.length &&
                    FooterData[0].ftSocialMediaLinksCollection.items.map(
                      (ftMediaInfo, index) => (
                        <div key={ftMediaInfo.linkText}>
                          <Link href={ftMediaInfo.linkUrl}>
                            <img
                              id={ftMediaInfo.linkId}
                              src={ftMediaInfo.linkIcon}
                              alt={ftMediaInfo.linkText}
                              width={24}
                              height={24}
                              className={classNames(
                                "flex items-center justify-center",
                                {
                                  "w-6 h-4":
                                    ftMediaInfo.linkId == "socialmedia-youtube",
                                },
                                {
                                  "w-6 h-6":
                                    ftMediaInfo.linkId ==
                                    "socialmedia-linkedin",
                                }
                              )}
                            />
                          </Link>
                        </div>
                      )
                    )}
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-start self-auto md:hidden">
              <Accordion type="single" collapsible className="custom-accordian">
                {FooterData &&
                  FooterData[0].ftNavigationCollection &&
                  FooterData[0].ftNavigationCollection.items &&
                  FooterData[0].ftNavigationCollection.items.map(
                    (ftNavInfo, index) => (
                      <AccordionItem
                        value={`item-${index}`}
                        key={`item-${index}`}
                      >
                        <AccordionTrigger className="text-16 font-medium leading-16">
                          {ftNavInfo.menusTitle}
                        </AccordionTrigger>
                        <AccordionContent className="text-14 leading-14 font-normal">
                          <ul className={classNames("flex flex-col")}>
                            {ftNavInfo.menusItemsCollection?.items.map(
                              (ftNavItem, indexNavItem) => (
                                <a
                                  href={ftNavItem.linkUrl}
                                  key={`item-content-${indexNavItem}`}
                                >
                                  <li
                                    className="text-12 leading-12 font-normal px-4 py-2"
                                    key={ftNavItem.linkText}
                                  >
                                    {ftNavItem.linkText}
                                  </li>
                                </a>
                              )
                            )}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    )
                  )}
              </Accordion>
            </div>
            <div className="hidden md:flex md:gap-20 md:self-auto">
              {FooterData[0].ftNavigationCollection &&
                FooterData[0].ftNavigationCollection.items &&
                FooterData[0].ftNavigationCollection.items.map(
                  (ftNavInfo, index) => (
                    <div className="h-5" key={`ftNavInfo-item-${index}`}>
                      <p className="text-gray500 font-bold leading-5 text-sm pb-4">
                        {ftNavInfo.menusTitle}
                      </p>
                      <ul className={classNames("")}>
                        {ftNavInfo.menusItemsCollection?.items.map(
                          (ftNavItem, indexNavItem) => (
                            <a
                              href={ftNavItem.linkUrl}
                              key={`item-content-${indexNavItem}`}
                            >
                              <li
                                className="text-14 font-medium py-2"
                                key={ftNavItem.linkText}
                              >
                                {ftNavItem.linkText}
                              </li>
                            </a>
                          )
                        )}
                      </ul>
                    </div>
                  )
                )}
            </div>
            {/* <div className="flex flex-col"> */}
            <div className="flex flex-col flex-start self-auto pt-5 gap-8 md:pt-0 md:pl-20">
              <div className="flex items-center justify-between md:flex-col md:items-start md:gap-6">
                {/* <p>{FooterData && FooterData[0].ftQrCode.title}</p> */}
                <p className="md:flex md:flex-col text-gray500 text-sm font-bold">
                  Learn more about us on WeChat
                </p>
                <a className="">
                  <Image
                    src={FooterData && FooterData[0].ftQrCode.url}
                    width={70}
                    height={70}
                    alt={FooterData && FooterData[0].ftQrCode.title}
                    className="md:w-[135px] md:h-[135px]"
                  ></Image>
                </a>
              </div>
              <div className="pt-3 pb-5">
                <div className="flex items-center justify-between self-stretch">
                  <p className="pt-3 pb-2 md:text-14 font-medium text-gray500">
                    Join our mailing list for our newsletter!
                  </p>
                </div>
                <div className="flex items-center justify-between self-stretch">
                  <input
                    className="h-[55px] px-2 border w-3/4 rounded-lg rounded-r-none"
                    type="email"
                    placeholder="Enter Email Here"
                  />
                  <button className="!h-[55px] w-1/4 !rounded-l-none bg-primary duration-500 ease-in-out flex focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-ring font-medium gap-2 hover:bg-secondary items-center justify-center lg:h-[55px] lg:px-5 lg:rounded-lg lg:text-14 px-4 py-2 ring-offset-background rounded-md sm:h-9 sm:text-12 text-white transition-colors whitespace-nowrap">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between  self-stretch w-full">
            <ul className="flex flex-col md:flex-row md:gap-6 pt-4 w-full border-t">
              {FooterData[0].ftBottomNavigation &&
                FooterData[0].ftBottomNavigation.menusItemsCollection &&
                FooterData[0].ftBottomNavigation.menusItemsCollection.items &&
                FooterData[0].ftBottomNavigation.menusItemsCollection.items.map(
                  (ftBtmNavInfo, ftBtmNavIndex) => (
                    <a
                      href={ftBtmNavInfo.linkUrl}
                      key={`ftBtmItem-${ftBtmNavIndex}`}
                      className="gap-3"
                    >
                      <li className="pb-4">{ftBtmNavInfo.linkText}</li>
                    </a>
                  )
                )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
