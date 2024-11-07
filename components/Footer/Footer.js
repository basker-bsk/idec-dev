import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { gql } from "@apollo/client";
import { getClient } from "@/app/utility/ApolloClient";
const footerQuery = gql`
  {
    footerCollection(limit: 1, locale: "en-US") {
      items {
        ftName
        ftIntroText
        ftSocialMediaLinksCollection(limit: 6) {
          items {
            linkText
            linkUrl
            linkNewWindow
            linkId
          }
        }
        ftNavigationCollection(limit: 4) {
          items {
            menusTitle
            menusDescription
            menusItemsCollection(limit: 15) {
              items {
                linkText
                linkUrl
                linkStyle
                linkSubText
                linkNewWindow
                linkClass
                linkId
              }
            }
          }
        }
        ftQrCode {
          title
          url
        }
        ftCopyrightText
        ftBottomNavigation {
          menusTitle
          menusDescription
          menusItemsCollection(limit: 5) {
            items {
              linkText
              linkUrl
              linkNewWindow
              linkClass
              linkId
            }
          }
        }
      }
    }
  }
`;
export default async function Footer() {
  const { data } = await getClient().query({ query: footerQuery });
  const FooterData = data?.footerCollection?.items[0];
  console.log("FooterData", FooterData);
  return (
    <>
      {FooterData && (
        <div className="border-t">
          <div className="flex flex-col  container mx-auto py-10 px-5 md:px-[50px] gap-12">
            <div className="flex flex-col md:flex-row gap-10 md:gap-0">
              <div className="max-w-[300px]">
                <div className="flex flex-col flex-start gap-6">
                  <Link href="/">
                    <Image
                      src="/images/logo.png"
                      width={90}
                      height={30}
                      alt="Logo"
                    />
                  </Link>
                  <div className="w-full md:w-3/4 h-[63px] text-14 font-medium md:font-normal leading-[21px] text-wrap overflow-hidden">
                    {FooterData.ftIntroText}
                  </div>
                  <div className="flex gap-6">
                    {FooterData?.ftSocialMediaLinksCollection?.items?.map(
                      (ftMediaInfo) => (
                        <div key={ftMediaInfo.linkId}>
                          <Link
                            href={ftMediaInfo.linkUrl}
                            target={
                              ftMediaInfo.linkNewWindow ? "_blank" : "_self"
                            }
                            id={ftMediaInfo.linkId}
                          >
                            {ftMediaInfo.linkId == "socialmedia-youtube" && (
                              <span className="icon-social-YT text-24"></span>
                            )}
                            {ftMediaInfo.linkId == "socialmedia-linkedin" && (
                              <span className="icon-linkedin text-24"></span>
                            )}
                            {/* <img
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
                            /> */}
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-start self-auto md:hidden">
                <Accordion
                  type="single"
                  collapsible
                  className="custom-accordian"
                >
                  {FooterData &&
                    FooterData.ftNavigationCollection &&
                    FooterData.ftNavigationCollection.items &&
                    FooterData.ftNavigationCollection.items.map(
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
                {FooterData.ftNavigationCollection?.items?.map(
                  (ftNavInfo, index) => (
                    <div
                      className="flex flex-col gap-6"
                      key={`ftNavInfo-item-${index}`}
                    >
                      <p className="text-gray500 font-bold text-14 leading-14">
                        {ftNavInfo.menusTitle}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {ftNavInfo.menusItemsCollection?.items.map(
                          (ftNavItem, indexNavItem) => (
                            <li
                              className="text-14 font-medium"
                              key={ftNavItem.linkText}
                            >
                              <Link href={ftNavItem.linkUrl}>
                                {ftNavItem.linkText}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )
                )}
              </div>

              <div className="flex flex-col flex-start self-auto pt-5 gap-8 md:pt-0 md:pl-20">
                <div className="flex items-center justify-between md:flex-col md:items-start md:gap-6">
                  {/* <p>{FooterData.ftQrCode.title}</p> */}
                  <p className="md:flex md:flex-col text-gray500 text-sm font-bold">
                    Learn more about us on WeChat
                  </p>
                  <a className="">
                    <img
                      src={FooterData.ftQrCode.url}
                      width={70}
                      height={70}
                      alt={FooterData.ftQrCode.title}
                      className="md:w-auto md:h-auto"
                    ></img>
                  </a>
                </div>
                <div className="pb-5">
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
            <div className="flex flex-col md:flex-row gap-6 md:justify-between py-4 border-t border-gray-200 text-12 leading-12 font-medium md:text-14 md:leading-14 md:items-center">
              <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                <p>{FooterData.ftCopyrightText}</p>
                <ul className="flex flex-col md:flex-row gap-3 md:gap-6 md:items-center">
                  {FooterData.ftBottomNavigation?.menusItemsCollection?.items?.map(
                    (ftBtmNavInfo, ftBtmNavIndex) => (
                      <li className="">
                        <Link
                          href={ftBtmNavInfo.linkUrl}
                          key={`ftBtmItem-${ftBtmNavIndex}`}
                          className="gap-3"
                        >
                          {ftBtmNavInfo.linkText}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>EN</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
