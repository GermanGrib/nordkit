"use client";
import BrandResponse from "@/types/interfaces/wordpress/brand.interface";
import { useKeenSlider } from "keen-slider/react";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SliderArrows from "@/components/sliders/slider-controllers/slider-arrows";

interface PopularBrandsProps {
  brandsData: BrandResponse[];
}

const PopularBrands = ({ brandsData }: PopularBrandsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [initialized, setInitialized] = useState(false);
  const [sliderLength, setSliderLength] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setSliderLength(slider.track.details.slides.length);
      setInitialized(true);
    },
    slides: {
      perView: 1.4,
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 500px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2.5, spacing: 20 },
      },
      "(min-width: 880px)": {
        slides: { perView: 3.6, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 24 },
      },
      "(min-width: 1536px)": {
        slides: { perView: 4, spacing: 40 },
      },
    },
  });

  const sliderItemHeight = "h-[120px] md:h-[175px]";
  const linkStyle =
    "flex relative px-3 py-5 md:px-6 md:py-10 lg:px-4 2xl:px-5 justify-center items-center w-full bg-nk-secondary rounded-2xl";
  const linkChildrenStyle = "relative flex w-full h-full";
  const imgStyle = "object-contain";

  return (
    <>
      <div className="mb-4 sm:mb-8 font-bold text-xl sm:text-3xl lg:text-4xl leading-tight sm:leading-snug lg:leading-tight">
        Популярные бренды
      </div>
      <div className="relative">
        <div ref={sliderRef} className={`keen-slider`}>
          <div
            className={`keen-slider__slide max-w-[70%] sm:max-w-[39%] lg:max-w-[23%] flex ${sliderItemHeight}`}
          >
            <Link href="/" className={linkStyle}>
              <div className={linkChildrenStyle}>
                <Image
                  className={imgStyle}
                  src={brandsData[0].logo}
                  fill
                  alt={`Логотип ${brandsData[0].name}`}
                />
              </div>
            </Link>
          </div>
          {brandsData.slice(1).map((brand) => {
            return (
              <Fragment key={brand.id}>
                <div
                  className={`keen-slider__slide ${sliderItemHeight} ${initialized ? "flex" : "hidden"}`}
                >
                  <Link href="/" className={linkStyle}>
                    <div className={linkChildrenStyle}>
                      <Image
                        className={imgStyle}
                        src={brand.logo}
                        fill
                        alt={`Логотип ${brand.name}`}
                      />
                    </div>
                  </Link>
                </div>
              </Fragment>
            );
          })}
        </div>

        <SliderArrows
          currentSlide={currentSlide}
          showArrows
          sliderLength={sliderLength}
          instanceRef={instanceRef}
          variant="offerSlider"
        />
      </div>
    </>
  );
};

export default PopularBrands;
