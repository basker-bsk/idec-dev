"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import series_listing_data from "@/public/assets/data/series_listing.json";
const SeriesListing = () => {
  const getSeriesListingData = series_listing_data;
  console.log("Series Listing", getSeriesListingData);
  return (
    <div className="container mx-auto px-4 py-8 xl:py-12 xl:px-[50px]">
      <div className="text-32 leading-[130%] text-black font-medium">
        Series Listing page
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 place-items-center">
        {getSeriesListingData &&
          getSeriesListingData?.componentsCollection?.items.map((data, i) => {
            return <ProductCard key={i} data={data} />;
          })}
      </div>
    </div>
  );
};
export default SeriesListing;
