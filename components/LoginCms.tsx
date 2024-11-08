import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { isEmpty } from "lodash";
export default function LoginCMS({ data }: any) {
  return (
    <>
      {!isEmpty(data) && (
        <div className="flex flex-col justify-between text-white w-full md:w-1/2 pt-12 md:pt-0 mt-12 md:mt-0 border-t-2 border-gray-100 md:border-t-0">
          <div className="flex flex-col gap-4">
            <h3 className="hidden md:flex font-medium">{data.plHeading}</h3>
            {!isEmpty(data.plintroText) && (
              <div className="text-14 leading-14 rta">
                {documentToReactComponents(data?.plintroText?.json)}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-8">
            {!isEmpty(data.plFeatures) && (
              <ul className="flex flex-col gap-4">
                {data.plFeatures.map((feature: any) => (
                  <li className=" flex gap-2 items-center" key={feature.id}>
                    <span className=" flex items-center justify-center w-4 h-4 rounded-full bg-success text-black text-10 font-bold icon-tick"></span>
                    <div className="flex flex-col">
                      <p className="text-14 leading-14 font-bold">
                        {feature.key}
                      </p>
                      {!isEmpty(feature.value) && (
                        <span className="text-14 leading-14">
                          {feature.value}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {!isEmpty(data.plDescription) && (
              <div className="text-14 leading-14 ">
                {documentToReactComponents(data?.plDescription?.json)}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
