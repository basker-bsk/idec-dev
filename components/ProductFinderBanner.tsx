"use client";
import { Button } from "./ui/button";
import ScreenSize from "@/utils/ScreenSize";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TPF } from "../interface";
type Props = {
  PFBanner: TPF;
};
export default function ProductFinderBanner({ PFBanner }: Props) {
  const styleDesktop = {
    background: `url(${PFBanner.ctaBgImageDsktp.url}) repeat-x center`,
  };
  const styleMobile = {
    background: `url(${PFBanner.ctaBgImageMob.url}) repeat-x center`,
  };
  return (
    <>
      {PFBanner && (
        <div
          className=" text-white px-4"
          style={ScreenSize() ? styleDesktop : styleMobile}
        >
          <div className="flex gap-4 justify-center items-center py-10 text-center flex-col">
            <h2 data-aos="fade-up">{PFBanner.ctaTitle}</h2>
            <div className="text-14 leading-14 md:text-16 md:leading-16 max-w-[660px]">
              {documentToReactComponents(PFBanner?.ctaText?.json)}
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Button theme="secondary">{PFBanner.ctaLink.linkText}</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
