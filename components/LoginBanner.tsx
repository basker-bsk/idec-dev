import Link from "next/link";
import { Button } from "./ui/button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TLoginBanner } from "../interface";
import Links from "@/helpers/Link";
type Props = {
  data: TLoginBanner;
};
export default function LoginBanner({ data }: Props) {
  return (
    <div className="container mx-auto px-4 py-8 xl:py-12 xl:px-[50px]">
      <div className="gradient-red p-4 md:p-10 lg:px-20 rounded-md flex flex-col md:flex-row justify-between gap-4 md:items-center ">
        <div className="text-white font-medium md:w-3/4" data-aos="fade-right">
          <h3 className="mb-1">{data.ctaTitle}</h3>
          <div className="text-14 leading-14 md:text-16 md:leading-16">
            {documentToReactComponents(data.ctaText.json)}
          </div>
        </div>
        <div className="md:w-1/4 flex justify-end" data-aos="fade-left">
          <Button theme="tertiary">
            <Links data={data.ctaLink} className="" />
          </Button>
        </div>
      </div>
    </div>
  );
}
