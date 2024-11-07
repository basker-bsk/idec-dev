import Link from "next/link";
import classnames from "classnames";
import MenuTop from "./MenuTop";
import ProductFinderSearchMobile from "./ProductFinderSearchMobile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function L2({ levelTwoMenus, prevLink, hideMenu, setIsL2Open }) {
  // Hide Menu when click Overlay
  const hideL2Menu = () => {
    setIsL2Open(false);
    hideMenu();
  };
  return (
    <div className="relative  h-screen">
      <MenuTop
        hideMenu={hideL2Menu}
        prevLink={prevLink}
        backtoLink={setIsL2Open}
      ></MenuTop>
      <div className="text-12 leading-12 text-black my-4 flex justify-center border font-medium border-black p-2">
        Expore All {prevLink}
      </div>
      <div className="flex flex-col justify-between overflow-y-auto l2-menus ">
        <Accordion
          type="single"
          collapsible
          className="w-full custom-accordian"
        >
          {levelTwoMenus.map((levelTwo, index) => (
            <div key={levelTwo.linkText}>
              {levelTwo.linkChildrenCollection?.items &&
              levelTwo.linkChildrenCollection?.items?.length > 0 ? (
                <AccordionItem value={`item-${index}`} key={`item-${index}`}>
                  <AccordionTrigger className="text-16 font-medium leading-16">
                    {levelTwo.linkText}
                  </AccordionTrigger>

                  <AccordionContent className="text-14 leading-14 font-normal">
                    <ul className={classnames("flex flex-col")}>
                      {levelTwo.linkChildrenCollection?.items.map((menu) => (
                        <li
                          className="text-14 leading-14 font-normal p-4"
                          key={menu.linkText}
                        >
                          {menu.linkText}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Link
                  href={levelTwo.linkUrl}
                  title={levelTwo.linkText}
                  className={classnames(
                    "py-4 text-black border-b border-gray200 text-16 font-medium leading-16 flex"
                  )}
                >
                  {levelTwo.linkText}
                </Link>
              )}
            </div>
          ))}
        </Accordion>
        <div className="w-full absolute bottom-0 left-0">
          <ProductFinderSearchMobile />
        </div>
      </div>
    </div>
  );
}

export default L2;
