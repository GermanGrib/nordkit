import { MutableRefObject } from "react";
import { KeenSliderInstance } from "keen-slider";
import IconArrow from "@/components/icons/icon-arrow";

interface SliderArrowsProps {
  showArrows?: boolean;
  currentSlide: number;
  sliderLength: number;
  instanceRef: MutableRefObject<KeenSliderInstance | null>;
  variant: "default" | "mainBanner" | "offerSlider";
}

const buttonCommonStyles = {
  default: "",
  mainBanner:
    "absolute flex w-10 h-10 justify-center items-center transform rounded-full bg-white disabled:opacity-50 shadow-lg z-10",
  offerSlider:
    "absolute flex w-10 h-10 md:w-12 md:h-12 justify-center items-center transform rounded-full bg-white disabled:opacity-50 shadow-lg z-10",
};

const buttonLeftStyle = {
  default: "",
  mainBanner: "-left-3 top-1/2 -translate-y-1/2",
  offerSlider: "-left-5 top-[40%] md:top-1/2 md:-translate-y-1/2",
};

const buttonRightStyles = {
  default: "",
  mainBanner: "-right-3 top-1/2 -translate-y-1/2",
  offerSlider: "-right-4 top-[40%] md:top-1/2 md:-translate-y-1/2",
};

const SliderArrows = ({
  showArrows,
  instanceRef,
  currentSlide,
  sliderLength,
  variant,
}: SliderArrowsProps) => {
  const handlePrevClick = () => {
    if (instanceRef?.current) {
      instanceRef.current.prev();
    }
  };

  const handleNextClick = () => {
    if (instanceRef?.current) {
      instanceRef.current.next();
    }
  };

  return (
    <>
      {showArrows && (
        <button
          onClick={handlePrevClick}
          disabled={!instanceRef?.current?.options.loop && currentSlide === 0}
          className={`${buttonCommonStyles[variant]} ${buttonLeftStyle[variant]}`}
        >
          <IconArrow direction="left" />
        </button>
      )}
      {showArrows && (
        <button
          onClick={handleNextClick}
          disabled={
            !instanceRef?.current?.options.loop &&
            currentSlide === sliderLength - 1
          }
          className={`${buttonCommonStyles[variant]} ${buttonRightStyles[variant]}`}
        >
          <IconArrow />
        </button>
      )}
    </>
  );
};

export default SliderArrows;
