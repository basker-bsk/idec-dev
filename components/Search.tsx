"use client";
import { Search } from "lucide-react";
import classnames from "classnames";

type Props = {
  className: string;
};

export default function SearchComponent(props: Props) {
  return (
    <div className={classnames("max-w-md mx-auto w-1/2 ", props.className)}>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="text-[#A30000] w-4 h-4" />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full pr-2 py-[10.5px] rounded-sm border border-gray-300 dark:border-gray-600 ps-10 lg:rounded-lg text-gray-900 text-sm"
          placeholder="Search products, keywords or documents"
        />
      </div>
    </div>
  );
}
