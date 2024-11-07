import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "ease-in-out duration-500 flex gap-2 items-center lg:text-14 text-12 justify-center whitespace-nowrap rounded-md lg:rounded-lg  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring focus-visible:ring-offset-0",
  {
    variants: {
      theme: {
        primary: "bg-primary text-white hover:bg-secondary",
        secondary:
          "bg-white text-black hover:text-white hover:bg-secondary border border-black hover:border-secondary",
        tertiary:
          "bg-white border border-gray-500  hover:bg-black hover:text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        disabled:
          "bg-halfGray text-borderGray border border-halfGray pointer-events-none",
      },
      variant: {
        default: "px-4 lg:px-5 py-2 sm:h-9 lg:h-[45px]",
        iconText: "px-4 lg:px-5 py-2 sm:h-9 lg:h-12",
        icon: "sm:min-w-[36px] lg:min-w-[48px] sm:h-9 lg:h-12",
      },
    },
    defaultVariants: {
      theme: "primary",
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, theme, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <>
        <Comp
          className={cn(buttonVariants({ theme, variant, className }))}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
