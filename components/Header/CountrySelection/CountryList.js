export default function CountrtList({
  regionsData,
  setIsCountrySelectionOpen,
  setChooseRegion,
  chooseRegion,
}) {
  const SelectRegion = (region, index) => {
    setChooseRegion(region);
    setChooseRegion({
      regionSelected: region.regionLabel,
      regionIndex: index,
    });
    setIsCountrySelectionOpen(false);
  };
  return (
    <div className=" px-4 pb-4 lg:px-0 lg:pb-0 lg:pt-4">
      <ul className="flex flex-col gap-6 lg:gap-2 lg:h-[250px] lg:overflow-y-auto lg:px-4 lg:pb-4 lg:mb-4">
        {regionsData?.map((region, index) => (
          <li
            key={region.regionLabel + "-" + index}
            id={region.regionLabel + "-" + index}
            className=" py-1 flex justify-between items-center cursor-pointer"
            onClick={() => SelectRegion(region, index)}
          >
            <div className="flex gap-2 lg:flex-row-reverse items-center justify-between lg:justify-normal w-full lg:w-auto">
              <span className="text-16 leading-16 lg:text-14 lg:leading-14 font-medium">
                {region.regionLabel}
              </span>
              {chooseRegion.regionIndex === index ? (
                <span className="rounded-full w-6 h-6 lg:w-4 lg:h-4 flex justify-center items-center bg-success">
                  <i className="icon-tick text-12 text-white font-bold"></i>
                </span>
              ) : (
                <span className="rounded-full w-6 h-6 lg:w-4 lg:h-4 flex justify-center items-center bg-white"></span>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="gradient-red px-6 py-6 lg:py-4 text-white flex flex-col gap-1 font-medium rounded-md lg:rounded-tr-none lg:rounded-tl-none mt-6 lg:mt-0">
        <span className="text-14 leading-14">Corporate Site</span>
        <div className="text-16 leading-16 lg:text-14 lg:leading-14 flex gap-1 mt-2">
          <span>IDEC Global</span>
          <span className="icon-chevron-right text-24 "></span>
        </div>
      </div>
    </div>
  );
}
