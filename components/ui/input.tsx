"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import classnames from "classnames";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {    
    const [views, setViews] = React.useState(false);

    return (
      <div className="relative">
        <input
          type={!views ? type : "text"}
          className={cn(
            "flex h-[55px] w-full rounded-lg border border-gray300 focus:border-gray-800 bg-background px-5 py-2 text-14 md:text-16 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray400 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <span
            onClick={() => setViews(!views)}
            className={classnames(
              "cursor-pointer absolute right-4 top-4 text-24",
              { "icon-seen": !views },
              { "icon-unseen": views }
            )}
          ></span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
