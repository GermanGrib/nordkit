import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
        destructive:
          "bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        secondary:
          "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost:
          "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        //custom
        burger:
          "flex-col items-start gap-1 bg-nk-main hover:bg-nk-main-hover active:bg-nk-main-active disabled:bg-nk-main-inactive",
        primary:
          "text-base lg:text-xl text-white leading-snug lg:leading-6 font-bold sm:font-normal bg-nk-main hover:bg-nk-main-hover active:bg-nk-main-active disabled:bg-nk-main-inactive",
        outline:
          "text-base sm:text-sm sm:font-normal leading-snug font-bold border solid border-nk-main hover:opacity-70 active:border-nk-main-active active:bg-nk-main active:text-white",
        accent:
          "bg-nk-accent lg:hover:opacity-60 active:opacity-80 text-base text-white font-bold sm:font-normal leading-snug rounded-lg",
      },
      size: {
        default: "h-9 px-4 py-2",
        primary: "h-10 sm:h-12",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        burger: "w-11 h-11 px-2.5 py-3",
        catalogBtn: "h-full min-w-[200px]",
        outline: "p-2",
        productCard: "h-[42px] sm:h-10 sm:text-sm lg:text-xs lg:leading-snug",
        accent: "p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  preventProgressBar?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      preventProgressBar = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        data-prevent-nprogress={preventProgressBar}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
