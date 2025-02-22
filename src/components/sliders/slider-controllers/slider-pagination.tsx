import { MutableRefObject } from "react";
import { KeenSliderInstance } from "keen-slider";

interface SliderPaginationProps {
  showPagination?: boolean;
  currentSlide?: number;
  sliderLength?: number;
  instanceRef?: MutableRefObject<KeenSliderInstance | null>;
  variant?: "default" | "mainBanner";
}

const paginationWrapperStyle = {
  default: "",
  mainBanner:
    "hidden p-2 md:flex absolute left-1/2 -translate-x-1/2 bottom-2 gap-2 bg-nk-secondary rounded-full",
};

const btnsStyle: Record<string, string | ((isActive: boolean) => string)> = {
  default: "",
  mainBanner: (isActive: boolean) =>
    `w-3 h-3 rounded-full ${isActive ? "bg-blue-500" : "bg-white"}`,
};

const SliderPagination = ({
  showPagination,
  currentSlide,
  sliderLength,
  instanceRef,
  variant = "default",
}: SliderPaginationProps) => {
  const handleClick = (idx: number) => {
    if (instanceRef?.current) {
      instanceRef.current.moveToIdx(idx);
    }
  };

  return (
    <>
      {showPagination && (
        <div className={paginationWrapperStyle[variant]}>
          {[...Array(sliderLength)].map((_, idx) => (
            <button
              key={idx}
              className={
                typeof btnsStyle[variant] === "function"
                  ? btnsStyle[variant](currentSlide === idx)
                  : btnsStyle[variant]
              }
              onClick={() => handleClick(idx)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SliderPagination;
