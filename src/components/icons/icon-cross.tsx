import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

interface CrossIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: "default" | "secondary";
  size?: "default" | "secondary";
  position?: "default" | "rightTop";
  color?: "default" | "bright";
}

const crossVariants = cva(
  `cursor-pointer transition-transform hover:rotate-45`,
  {
    variants: {
      variant: {
        default: "",
        secondary: "",
      },
      size: {
        default: "w-6 h-6",
        secondary: "",
      },
      color: {
        default: "text-black",
        bright: "text-white",
      },
      position: {
        default: "",
        rightTop: "absolute top-2 md:top-4 right-2 md:right-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
    },
  },
);

const CrossSvg = React.forwardRef<SVGSVGElement, CrossIconProps>(
  ({ className, variant, size, color, position, onClick, ...props }, ref) => {
    return (
      <svg
        {...props}
        onClick={onClick}
        ref={ref}
        className={cn(
          crossVariants({
            variant,
            size,
            color,
            position,
            className,
          }),
        )}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="#2D2C2C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#2D2C2C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CrossSvg.displayName = "IconCrossSvg";
export default CrossSvg;
