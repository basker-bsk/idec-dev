import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Link from "next/link";
import ScreenSize from "@/utils/ScreenSize";
import { THeroSlide } from "../../interface";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Links from "@/helpers/Link";
type Props = {
  slide: THeroSlide;
};
function HeroSlides({ slide }: Props) {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  return (
    <div className="relative flex flex-col justify-center lg:flex-row">
      <>
        {ScreenSize() ? (
          <LazyLoadImage
            alt={slide?.bannerBgImgDsktp?.title}
            effect="blur"
            src={slide?.bannerBgImgDsktp?.url}
          />
        ) : (
          <LazyLoadImage
            alt={slide?.bannerBgImgMob?.title}
            effect="blur"
            src={slide?.bannerBgImgMob?.url}
          />
        )}
      </>
      <div className="absolute w-full md:w-1/3 md:left-20 xl:left-[100px] top-0 md:top-1/2 md:-translate-y-2/4 px-4 md:px-0 pt-6 md:pt-0">
        <div
          className={`flex flex-col mb-6 md:mb-8 w-full lg:max-w-[500px]`}
          style={{
            color: `${slide?.bannerTextColor}`,
          }}
        >
          {slide?.bannerOverlineTxt && (
            <div>
              <span className="float-left mb-3 text-10 font-bold uppercase text-white bg-black rounded-tl-md rounded-br-md py-[5px] px-[15px]">
                {slide?.bannerOverlineTxt}
              </span>
            </div>
          )}

          <div
            className="text-32 leading-32  lg:text-48 lg:leading-48 font-medium mb-2 lg:mb-3"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            {slide?.bannerTitle}
          </div>

          <p
            className="text-14 leading-14 lg:text-16 lg:leading-16 mb-6 lg:mb-8"
            data-aos="fade-down"
            data-aos-delay="50"
          >
            {slide?.bannerBody}
          </p>

          <div>
            {slide?.bannerLinkCollection?.items &&
              slide?.bannerLinkCollection?.items[0] && (
                <Links
                  data={slide?.bannerLinkCollection?.items[0]}
                  className="py-[7px] md:py-3 px-5 bg-white  text-12 md:text-14 font-medium rounded-md text-black w-auto"
                />
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlides;
