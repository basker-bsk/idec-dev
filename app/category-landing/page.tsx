"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import category_landing_data from "@/public/assets/data/category_landing.json";
const CategoryLanding = () => {
  const getCategoryLandingData = category_landing_data;
  console.log("Category Landing", getCategoryLandingData);
  return (
    <div className="container mx-auto px-4 py-8 xl:py-12 xl:px-[50px]">
      <div className="text-32 leading-[130%] text-black font-medium">
        {getCategoryLandingData?.title}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 place-items-center">
        {getCategoryLandingData &&
          getCategoryLandingData?.componentsCollection?.items.map((data, i) => {
            return <ProductCard key={i} data={data} />;
          })}
      </div>
    </div>
  );
};
export default CategoryLanding;
