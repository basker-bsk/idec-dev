import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CountUpAnimation from "./CountUpAnimation";
import { TUSP } from "../interface";
type Props = {
  usp: TUSP;
};
export default function USP({ usp }: Props) {
  return (
    <div className="gradient-gray w-full py-6">
      <div className="flex container mx-auto px-4 md:px-[50px] xl:px-[100px] items-center">
        <div className="flex gap-5 lg:gap-10 flex-col lg:flex-row  items-center">
          <div className="text-18 leading-18 font-medium md:text-20 md:leading-[30px] w-full lg:w-1/2">
            {documentToReactComponents(usp?.introText?.json)}
          </div>
          <div className="flex gap-7 md:gap-12 w-full lg:w-1/2">
            <div className="flex flex-col md:gap-1">
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter1Prefix}
              </span>

              <CountUpAnimation
                initialValue={0}
                targetValue={usp.counter1Text}
              />

              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter1Suffix}
              </span>
            </div>
            <div className="flex flex-col md:gap-1">
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter2Prefix}
              </span>
              <CountUpAnimation
                initialValue={0}
                targetValue={usp.counter2Text}
              />
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter2Suffix}
              </span>
            </div>
            <div className="flex flex-col md:gap-1">
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter3Prefix}
              </span>
              <CountUpAnimation
                initialValue={0}
                targetValue={usp.counter3Text}
              />
              <span className="text-12 leading-12 md:text-14 md:leading-14">
                {usp.counter3Suffix}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
