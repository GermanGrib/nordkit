"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import SliderPagination from "@/components/sliders/slider-controllers/slider-pagination";
import SliderArrows from "@/components/sliders/slider-controllers/slider-arrows";

interface MainBannerProps {
  sliderData: {
    id: number;
    imgSrc: string;
    linkHref: string;
  }[];
  className?: string;
  showArrows?: boolean;
  showPagination?: boolean;
  variant?: "default" | "mainBanner";
  altText?: string;
  loop?: boolean;
  firstSliderPriority?: boolean;
  autoplay?: { autoplay: boolean; duration: number };
}

const sliderStyle = {
  default: "",
  mainBanner: "w-full h-full rounded-md sm:rounded-2xl lg:rounded-[20px]",
};

const imgStyle = {
  default: "",
  mainBanner: "rounded-md sm:rounded-2xl lg:rounded-[20px]",
};

const linkStyle = {
  default: "",
  mainBanner: "flex w-full",
};

const MainBannerSlider = ({
  sliderData,
  showArrows = false,
  showPagination = false,
  altText = "Рекламный баннер",
  loop = false,
  variant = "default",
  firstSliderPriority = true,
  autoplay,
  className,
}: MainBannerProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderLength, setSliderLength] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [autoPlayActive, setAutoPlayActive] = useState(true);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: loop,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created(slider) {
        setSliderLength(slider.track.details.slides.length);
        setInitialized(true);
      },
    },
    [],
  );

  useEffect(() => {
    if (isMouseDown) {
      setAutoPlayActive(false);
    } else {
      setAutoPlayActive(true);
    }
  }, [isMouseDown]);

  useEffect(() => {
    if (autoplay?.autoplay && instanceRef.current) {
      const intervalId = setInterval(() => {
        if (instanceRef.current) {
          instanceRef.current.next();
        }
      }, autoplay.duration);

      return () => clearInterval(intervalId);
    }
  }, [autoplay, instanceRef, autoPlayActive]);

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      onMouseLeave={() => setIsMouseDown(false)}
    >
      <div ref={sliderRef} className={`keen-slider ${sliderStyle[variant]}`}>
        <div className={`keen-slider__slide flex`}>
          <Link
            href={sliderData[0].linkHref}
            className={`relative ${linkStyle[variant]}`}
          >
            <Image
              priority={firstSliderPriority}
              loading="eager"
              className={imgStyle[variant]}
              src={sliderData[0].imgSrc}
              alt={altText}
              fill
            />
          </Link>
        </div>
        {sliderData.map((slide, index) => {
          const otherSlides = index !== 0 && initialized ? "flex" : "hidden";
          return (
            <Fragment key={slide.id}>
              {index !== 0 && slide.imgSrc && (
                <>
                  <div className={`keen-slider__slide ${otherSlides}`}>
                    <Link
                      href={slide.linkHref}
                      className={`relative ${linkStyle[variant]}`}
                    >
                      <Image
                        className={imgStyle[variant]}
                        src={sliderData[index].imgSrc}
                        alt={altText}
                        fill
                      />
                    </Link>
                  </div>
                </>
              )}
            </Fragment>
          );
        })}
      </div>

      <SliderArrows
        currentSlide={currentSlide}
        showArrows={showArrows}
        sliderLength={sliderLength}
        instanceRef={instanceRef}
        variant={variant}
      />
      <SliderPagination
        showPagination={showPagination}
        sliderLength={sliderLength}
        currentSlide={currentSlide}
        instanceRef={instanceRef}
        variant={variant}
      />
    </div>
  );
};

export default MainBannerSlider;
