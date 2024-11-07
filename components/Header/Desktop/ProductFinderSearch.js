import { Button } from "@/components/ui/button";
import Links from "@/helpers/Link";
import { isEmpty } from "lodash";

export default function ProductFinderSearch({ pf }) {
  return (
    <div className="bg-black bg-opacity-80 text-white p-4 rounded-br-md">
      {pf && (
        <>
          <span className="tracking-[0.8px] gradient-red text-white  uppercase text-10 font-bold py-[5px] px-[15px] rounded-tl-md rounded-br-md ">
            {pf.hdProductFinder}
          </span>
          <h4 className="my-2">{pf.hdProductFinderHeading}</h4>
          <p className="text-16 leading-16 mb-2">
            {pf.hdProductFinderIntroText}
          </p>
          {!isEmpty(pf.hdProductFinderLink) && (
            <Button theme="secondary">
              <Links data={pf.hdProductFinderLink} className="" />
            </Button>
          )}
        </>
      )}
    </div>
  );
}
