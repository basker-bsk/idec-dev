import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { isEmpty } from "lodash";
import Link from "next/link";
import { TOLATWO } from "../../interface";
type Props = {
  data: TOLATWO;
};
export default function ArticleContent({ data }: Props) {
  return (
    <div className="p-5 flex flex-col gap-6">
      <div className="flex flex-col gap-2 justify-between">
        {!isEmpty(data.cdOverline1) && (
          <span className="text-12 leading-12 mdtext-14 md:leading-14 font-medium ">
            {data.cdOverline1}
          </span>
        )}
        {!isEmpty(data.cdOverline2) && (
          <span className="text-12 leading-12 mdtext-14 md:leading-14 font-medium text-gray400">
            {data.cdOverline2}
          </span>
        )}
        {!isEmpty(data.cdTitle) && (
          <p className="text-18 leading-18 mdtext-20 md:leading-20 font-medium">
            {data.cdTitle}
          </p>
        )}
        {!isEmpty(data.cdDescription) && (
          <div className="text-14 leading-14 mdtext-16 md:leading-16">
            {documentToReactComponents(data.cdDescription?.json)}
          </div>
        )}
      </div>
      {!isEmpty(data.cdLink) && (
        <div>
          <Link
            className="text-14 leading-14 font-medium flex items-center gap-2 hover:text-primary"
            href={data.cdLink.linkUrl}
            target={data.cdLink.linkNewWindow ? "_blank" : "_self"}
          >
            {data.cdLink.linkText.includes("Download") && (
              <span className="icon-download text-24"></span>
            )}
            <span>{data.cdLink.linkText}</span>
            {!data.cdLink.linkText.includes("Download") && (
              <span className="icon-chevron-right text-24"></span>
            )}
          </Link>
        </div>
      )}
    </div>
  );
}
