import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./Mobile/MobileMenu";
import DesktopMenu from "./Desktop/DesktopMenu";
import SearchComponent from "../Search";
import LanguageSwitch from "../LanguageSwtich";
import MyAccountMenu from "../MyAccountMenu";
import ProfileMenu from "@/public/assets/data/profile-menu.json";
import CartInHeader from "../CartInHeader";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { gql } from "@apollo/client";
import { getClient } from "@/app/utility/ApolloClient";

const headerQuery = gql`
  {
    headerCollection(
      limit: 1
      locale: "en-US"
      where: { regions: { regionLabel: "Global" } }
    ) {
      items {
        hdName
        hdSearchBoxPlaceholder
        hdWelcomeUserPrelogin
        hdWelcomeUserPostlogin
        hdLoginLabel
        hdLogoutLabel
        hdMainNavigation {
          menusTitle
          menusDescription
          menusItemsCollection(limit: 7) {
            items {
              linkText
              linkUrl
              linkIcon {
                title
                url
              }
              linkClass
              linkId
              linkNewWindow
              linkChildrenCollection(limit: 20) {
                items {
                  linkText
                  linkUrl
                  linkIcon {
                    title
                    url
                  }
                  linkClass
                  linkId
                  linkHideText
                  linkNewWindow
                  linkChildrenCollection(limit: 20) {
                    items {
                      linkText
                      linkUrl
                      linkIcon {
                        title
                        url
                      }
                      linkClass
                      linkId
                      linkHideText
                      linkNewWindow
                    }
                  }
                }
              }
              sys {
                id
              }
            }
          }
        }
        hdRegionIndicator
        hdProductFinder
        hdProductFinderHeading
        hdProductFinderBackgroundImage {
          title
          url
        }
        hdProductFinderIntroText
        hdProductFinderLink {
          linkText
          linkUrl
          linkNewWindow
          linkClass
          linkId
        }
      }
    }
  }
`;

export default async function Header() {
  const { data } = await getClient().query({ query: headerQuery });
  let headerData = data?.headerCollection?.items[0];
  let Menus = headerData?.hdMainNavigation?.menusItemsCollection?.items;
  const {
    hdProductFinder,
    hdProductFinderHeading,
    hdProductFinderIntroText,
    hdProductFinderLink,
    hdProductFinderBackgroundImage,
  } = headerData;
  const productFinder = {
    hdProductFinder,
    hdProductFinderHeading,
    hdProductFinderIntroText,
    hdProductFinderLink,
    hdProductFinderBackgroundImage,
  };

  return (
    <div className="flex flex-col header relative z-[2]  header-shadow ">
      <div className="bg-white header-top container pt-[50px] pb-4 md:pt-5 md:pb-5 px-4">
        <div className="flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center ">
            <div className="lg:hidden">
              <MobileMenu
                menuItems={Menus}
                pf={productFinder}
                hdRegionIndicator={headerData.hdRegionIndicator}
              />
            </div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={100}
                height={34}
                alt="Logo"
                className="h-[30px] w-[90px] md:h-[34px] md:w-[100px]"
              />
            </Link>
          </div>
          <SearchComponent className="hidden md:block" />
          <div className="flex gap-2 lg:gap-6 items-center relative">
            <LanguageSwitch />
            <Sheet>
              <SheetTrigger>
                <div className="flex gap-2 items-center hover:text-red-800 cursor-pointer">
                  <span className="flex items-center justify-center h-8 w-8 bg-gray-200 text-base rounded-full border-black text-[#c0392b]">
                    G
                  </span>
                  <div className="hidden md:flex flex-col">
                    <div className="text-xs">
                      <span>{headerData.hdWelcomeUserPrelogin}</span>
                    </div>
                    <Link
                      href="/login"
                      className="text-[14px] font-semibold hidden lg:flex"
                    >
                      {headerData.hdLoginLabel}
                    </Link>
                  </div>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetDescription>
                    <MyAccountMenu
                      profileMenus={ProfileMenu.accountMenu}
                      postProfileData={headerData}
                    />
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <CartInHeader />
          </div>
        </div>
        <div className="block md:hidden pt-4">
          <SearchComponent className="w-full" />
        </div>
      </div>
      <div className="relative hidden lg:flex  border-t border-gray100 bg-white  desktop-menu text-black ">
        <DesktopMenu
          menuItems={Menus}
          pf={productFinder}
          hdRegionIndicator={headerData.hdRegionIndicator}
        />
      </div>
    </div>
  );
}
