import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const arrowVariants = cva(
  `relative transition-transform transition-colors transition-opacity`,
  {
    variants: {
      variant: {
        default: "",
        secondary: "text-white",
        tertiary: "text-mm-main",
      },
      size: {
        default: "w-2 h-4",
        secondary: "w-2 h-1 md:w-2.5 md:h-1.5",
      },
      direction: {
        right: "-rotate-90",
        left: "rotate-180",
        down: "-rotate-90",
        up: "rotate-90",
      },
      flip: {
        true: "-rotate-180",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {
  variant?: "default" | "secondary" | "tertiary";
  size?: "default" | "secondary";
  direction?: "right" | "left" | "down" | "up";
  flip?: boolean;
}

const IconArrow = React.forwardRef<SVGSVGElement, ArrowIconProps>(
  ({ className, variant, size, direction, flip = false, ...props }, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        className={cn(
          arrowVariants({
            variant,
            size,
            direction,
            flip,
            className,
          }),
        )}
        width="8"
        height="16"
        viewBox="0 0 8 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.6625 7.05298L1.95767 0.391799C1.85129 0.267584 1.72499 0.169051 1.586 0.101826C1.447 0.0346007 1.29803 0 1.14758 0C0.843741 0 0.552345 0.140934 0.337496 0.391799C0.231114 0.516015 0.146727 0.663481 0.0891537 0.825776C0.0315801 0.988072 0.00194815 1.16202 0.00194815 1.33769C0.00194815 1.69246 0.122648 2.03271 0.337496 2.28357L5.24365 7.99886L0.337496 13.7142C0.230555 13.838 0.145674 13.9853 0.0877487 14.1477C0.0298234 14.31 0 14.4842 0 14.66C0 14.8359 0.0298234 15.01 0.0877487 15.1724C0.145674 15.3347 0.230555 15.4821 0.337496 15.6059C0.443564 15.7308 0.569756 15.8299 0.708794 15.8975C0.847831 15.9652 0.996961 16 1.14758 16C1.2982 16 1.44733 15.9652 1.58637 15.8975C1.72541 15.8299 1.8516 15.7308 1.95767 15.6059L7.6625 8.94475C7.76944 8.8209 7.85433 8.67355 7.91225 8.51121C7.97018 8.34886 8 8.17473 8 7.99886C8 7.82299 7.97018 7.64886 7.91225 7.48652C7.85433 7.32417 7.76944 7.17682 7.6625 7.05298Z"
          fill="#2D2C2C"
        />
      </svg>
    );
  },
);

IconArrow.displayName = "IconArrow";
export default IconArrow;
